# Deploy chaincode with Rich Query as an upgrade
```
./network.sh deployCC -ccn KBA-Automobile -ccp ../../KBA-Automobile/Chaincode/ -ccl go -c autochannel -ccv 5.0 -ccs 5 -cccg ../../KBA-Automobile/Chaincode/collections.json
```
# General Environment variables :
```
export FABRIC_CFG_PATH=$PWD/../config/

export ORDERER_CA=${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem

export ORG1_PEER_TLSROOTCERT=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt

export ORG2_PEER_TLSROOTCERT=${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt

export CORE_PEER_TLS_ENABLED=true
```
# Environment variables for Org1:
```
export CORE_PEER_LOCALMSPID=Org1MSP

export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt

 export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp

export CORE_PEER_ADDRESS=localhost:7051
```
# Invoke – CreateCar
```
>peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile $ORDERER_CA -C autochannel -n KBA-Automobile --peerAddresses localhost:7051 --tlsRootCertFiles $ORG1_PEER_TLSROOTCERT --peerAddresses localhost:9051 --tlsRootCertFiles $ORG2_PEER_TLSROOTCERT -c '{"function":"CreateCar","Args":["Car-02", "Tata", "Tiago", "Red", "Factory-2", "22/10/2023" ]}'
```
Note :Create more cars using the same invoke command by changing the car ID and details.

# Query – GetAllCars
```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["GetAllCars"]}'
```
# Range query:

```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["GetCarsByRange", "Car-01", "Car-03"]}'
```

```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["GetCarsByRange", "Car-03", ""]}'
```
```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["GetCarsByRange", "", "Car-03"]}'
```

```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["GetCarsByRange", "", ""]}'
```
# History Query

```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["GetCarHistory","Car-02"]}'
```
# Export order details
```
export MAKE=$(echo -n "Tata" | base64 | tr -d \n)

export MODEL=$(echo -n "Harrier" | base64 | tr -d \n)

export COLOR=$(echo -n "Black" | base64 | tr -d \n)

export DEALER_NAME=$(echo -n "Popular" | base64 | tr -d \n)
```
# Invoke – CreateOrder

```
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile $ORDERER_CA -C autochannel -n KBA-Automobile --peerAddresses localhost:7051 --tlsRootCertFiles $ORG1_PEER_TLSROOTCERT --peerAddresses localhost:9051 --tlsRootCertFiles $ORG2_PEER_TLSROOTCERT -c '{"Args":["OrderContract:CreateOrder","ORD-09"]}' --transient "{\"make\":\"$MAKE\",\"model\":\"$MODEL\",\"color\":\"$COLOR\",\"dealerName\":\"$DEALER_NAME\"}"
```
Note : Add more orders to the collections by changing  the exported details and order ID.

# Query – Order
```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args",["OrderContract:GetAllOrders"]}'
```
```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["OrderContract:GetOrdersByRange", "ORD-01", "ORD-03"]}'
```


# Try these queries : 

Note: Make sure there is a order details matched with Car-02

# Matching orders

```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["GetMatchingOrders", "Car-02"]}'
```
Match order
```
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile $ORDERER_CA -C autochannel -n KBA-Automobile --peerAddresses localhost:7051 --tlsRootCertFiles $ORG1_PEER_TLSROOTCERT --peerAddresses localhost:9051 --tlsRootCertFiles $ORG2_PEER_TLSROOTCERT -c '{"function":"MatchOrder","Args":["Car-02","ORD-01"]}'
```
# Environment variables for Org3:
```
export CORE_PEER_LOCALMSPID=Org3MSP

export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/organizations/peerOrganizations/org3.example.com/peers/peer0.org3.example.com/tls/ca.crt

export CORE_PEER_MSPCONFIGPATH=${PWD}/organizations/peerOrganizations/org3.example.com/users/Admin@org3.example.com/msp

export CORE_PEER_ADDRESS=localhost:11051
```
# Register car

```
peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile $ORDERER_CA -C autochannel -n KBA-Automobile --peerAddresses localhost:7051 --tlsRootCertFiles $ORG1_PEER_TLSROOTCERT --peerAddresses localhost:9051 --tlsRootCertFiles $ORG2_PEER_TLSROOTCERT -c '{"function":"RegisterCar","Args":["Car-02","Bob","KL-01-7777"]}'
```
# History Query

```
peer chaincode query -C autochannel -n KBA-Automobile -c '{"Args":["GetCarHistory", "Car-02"]}' --peerAddresses localhost:9051 --tlsRootCertFiles $ORG2_PEER_TLSROOTCERT
```
