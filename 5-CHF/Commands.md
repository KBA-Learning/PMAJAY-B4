
## Create order-contract.go and collections.json

# update main.go 

```
package main

import (
"log"

"github.com/hyperledger/fabric-contract-api-go/contractapi"
)

func main() {
carContract := new(CarContract)
orderContract := new(OrderContract)


chaincode, err := contractapi.NewChaincode(carContract,orderContract)

if err != nil {
log.Panicf("Could not create chaincode." + err.Error())
}

err = chaincode.Start()

if err != nil {
log.Panicf("Failed to start chaincode. " + err.Error())
}
}

```



# Deploy Chaincode

```
./network.sh deployCC -ccn KBA-Automobile -ccp ../../KBA-Automobile/Chaincode/ -ccl go -c autochannel -ccv 3.0 -ccs 3 -cccg ../../KBA-Automobile/Chaincode/collections.json
```
# General Environment variables :

```
export FABRIC_CFG_PATH=$PWD/../config/

export ORDERER_CA=${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem

export ORG1_PEER_TLSROOTCERT=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt

export ORG2_PEER_TLSROOTCERT=${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt

export CORE_PEER_TLS_ENABLED=true
```
# Environment variables for Org2:

```
export CORE_PEER_LOCALMSPID=Org2MSP

export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt

export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org2.example.com/users/Admin@org2.example.com/msp

export CORE_PEER_ADDRESS=localhost:9051

```
# Export order details

```
export MAKE=$(echo -n "Tata" | base64 | tr -d \n)

export MODEL=$(echo -n "Tiago" | base64 | tr -d \n)

export COLOR=$(echo -n "Blue" | base64 | tr -d \n)

export DEALER_NAME=$(echo -n "Popular" | base64 | tr -d \n)

```
# Invoke – CreateOrder

```
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile $ORDERER_CA -C autochannel -n KBA-Automobile --peerAddresses localhost:7051 --tlsRootCertFiles $ORG1_PEER_TLSROOTCERT --peerAddresses localhost:9051 --tlsRootCertFiles $ORG2_PEER_TLSROOTCERT -c '{"Args":["OrderContract:CreateOrder","ORD-01"]}' --transient "{\"make\":\"$MAKE\",\"model\":\"$MODEL\",\"color\":\"$COLOR\",\"dealerName\":\"$DEALER_NAME\"}"
```
# Query – ReadOrder

```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["OrderContract:ReadOrder","ORD-01"]}'
```
# Environment variables for Org1:
```
export CORE_PEER_LOCALMSPID=Org1MSP

export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt

export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp

export CORE_PEER_ADDRESS=localhost:7051
```
# Query – ReadOrder
```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["OrderContract:ReadOrder","ORD-01"]}'
```

