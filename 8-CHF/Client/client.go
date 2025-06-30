package main

import (

"fmt"

"github.com/hyperledger/fabric-gateway/pkg/client"

)

// Submit a transaction synchronously, blocking until it has been committed to the ledger.

func submitTxnFn(organization string, channelName string, chaincodeName string, contractName string, txnType string, privateData map[string][]byte, txnName string, args ...string) string {

orgProfile := profile[organization]

mspID := orgProfile.MSPID

certPath := orgProfile.CertPath

keyPath := orgProfile.KeyDirectory

tlsCertPath := orgProfile.TLSCertPath

gatewayPeer := orgProfile.GatewayPeer

peerEndpoint := orgProfile.PeerEndpoint

// The gRPC client connection should be shared by all Gateway connections to this endpoint

clientConnection := newGrpcConnection(tlsCertPath, gatewayPeer, peerEndpoint)

defer clientConnection.Close()

id := newIdentity(certPath, mspID)

sign := newSign(keyPath)

// Create a Gateway connection for a specific client identity

gw, err := client.Connect(

id,

client.WithSign(sign),

client.WithClientConnection(clientConnection),

)

if err != nil {

panic(err)

}

defer gw.Close()

network := gw.GetNetwork(channelName)

contract := network.GetContractWithName(chaincodeName, contractName)

fmt.Printf("\n-->Submiting Transaction: %s,\n", txnName)

switch txnType {

case "invoke":

result, err := contract.SubmitTransaction(txnName, args...)

if err != nil {

panic(fmt.Errorf("failed to submit transaction: %w", err))

}

return fmt.Sprintf("*** Transaction submitted successfully: %s\n", result)

case "query":

evaluateResult, err := contract.EvaluateTransaction(txnName, args...)

if err != nil {

panic(fmt.Errorf("failed to evaluate transaction: %w", err))

}

result := formatJSON(evaluateResult)

return fmt.Sprintf("*** Result:%s \n", result)

case "private":

result, err := contract.Submit(

txnName,

client.WithArguments(args...),

client.WithTransient(privateData),

)

if err != nil {

panic(fmt.Errorf("failed to submit transaction: %w", err))

}

fmt.Println(result)

return fmt.Sprintf("*** Transaction committed successfullyn result: %s \n", result)

}

return ""

}