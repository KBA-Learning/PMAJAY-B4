# Deploy chaincode with Rich Query as an upgrade
```
./network.sh deployCC -ccn KBA-Automobile -ccp ../../KBA-Automobile/Chaincode/ -ccl go -c autochannel -ccv 4.0 -ccs 4 -cccg ../../KBA-Automobile/Chaincode/collections.json
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
