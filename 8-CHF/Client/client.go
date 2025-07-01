package main

import (
	"fmt"
	"time"

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
		// Default timeouts for different gRPC calls
		client.WithEvaluateTimeout(5*time.Second),
		client.WithEndorseTimeout(15*time.Second),
		client.WithSubmitTimeout(5*time.Second),
		client.WithCommitStatusTimeout(1*time.Minute),
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

		// return fmt.Sprintf("*** Result:%s\n", result)
		var result string
		if isByteSliceEmpty(evaluateResult) {
			result = string(evaluateResult)
		} else {
			result = formatJSON(evaluateResult)
		}

		// return fmt.Sprintf("*** Result:%s\n", result)
		return result

	case "private":
		result, err := contract.Submit(
			txnName,
			client.WithArguments(args...),
			client.WithTransient(privateData),
		)

		if err != nil {
			panic(fmt.Errorf("failed to submit transaction: %w", err))
		}

		return fmt.Sprintf("*** Transaction committed successfully\n result: %s \n", result)

	}
	return ""
}
