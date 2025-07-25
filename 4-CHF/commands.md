### Fabric Test Network commands 

## To use the script navigate to test-network folder inside the fabric-samples folder,

`cd fabric-samples/test-network/`

`./network.sh -h`

`./network.sh up createChannel -ca`

`docker ps -a`

# Initializing Go project

```
go mod init kbaauto

```

# Get the contract api

```
go get github.com/hyperledger/fabric-contract-api-go@v1.2.1

```

# Get all required dependancies and remove any unnecessary

```
go mod tidy

```
### Deploy asset-transfer basic sample chaincode listed in the samples.

`./network.sh deployCC -ccn KBA-Automobile -ccp ../../KBA-Automobile/Chaincode -ccl go`



```
export FABRIC_CFG_PATH=$PWD/../config/


export CORE_PEER_TLS_ENABLED=true


export CORE_PEER_LOCALMSPID="Org1MSP"

export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt

export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp

export CORE_PEER_ADDRESS=localhost:7051

```
### To Invoke
```
`peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n KBA-Automobile --peerAddresses localhost:7051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"CreateCar","Args":["Car01","Maruti","800","Red","POpular","31/2/2025"]}'
`
```
### To query
```
peer chaincode query -C mychannel -n KBA-Automobile -c '{"Args":["ReadCar","Car01"]}'

```

### Stopping the network

`./network.sh down`
















