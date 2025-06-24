# Bring up the Test network
```
cd fabric-samples/test-network
```
```
./network.sh up createChannel -c autochannel -ca -s couchdb
```
# Addding org3
```
cd addOrg3
```
```
./addOrg3.sh up -c autochannel -ca -s couchdb
```
```
cd ..
```
# Checking docker containers
```
docker ps -a
```
# Update car-contract with deletecar function
```
// DeleteCar removes the instance of Car from the world state
func (c *CarContract) DeleteCar(ctx contractapi.TransactionContextInterface, carID string) (string, error) {

clientOrgID, err := ctx.GetClientIdentity().GetMSPID()
if err != nil {
return "", err
}
if clientOrgID == "Org1MSP" {

exists, err := c.CarExists(ctx, carID)
if err != nil {
return "", fmt.Errorf("Could not read from world state. %s", err)
} else if !exists {
return "", fmt.Errorf("The asset %s does not exist", carID)
}

err = ctx.GetStub().DelState(carID)
if err != nil {
return "", err
} else {
return fmt.Sprintf("Car with id %v is deleted from the world state.", carID), nil
}

} else {
return "", fmt.Errorf("User under following MSP:%v cannot able to perform this action", clientOrgID)
}
}
```

## Create order-contract.go and collections.json

# update main.go 

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
# Environment variables for Org3:

```
export CORE_PEER_LOCALMSPID=Org3MSP

export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org3.example.com/peers/peer0.org3.example.com/tls/ca.crt

export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org3.example.com/users/Admin@org3.example.com/msp

export CORE_PEER_ADDRESS=localhost:11051
```
# Query – ReadOrder – using org2 peer address and tls root cetificates
```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["OrderContract:ReadOrder","ORD-01"]}' --peerAddresses localhost:9051 --tlsRootCertFiles $ORG2_PEER_TLSROOTCERT
```
