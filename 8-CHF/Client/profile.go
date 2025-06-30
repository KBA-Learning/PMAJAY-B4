package main

// Config represents the configuration for a role.
type Config struct {
CryptoPath string `json:"cryptoPath"`
CertPath string `json:"certPath"`
KeyDirectory string `json:"keyPath"`
TLSCertPath string `json:"tlsCertPath"`
PeerEndpoint string `json:"peerEndpoint"`
GatewayPeer string `json:"gatewayPeer"`
MSPID string `json:"mspID"`
}
// Create a Profile map

var profile = map[string]Config{

"org1": {

CryptoPath: "../../fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/",

CertPath: "../../fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/signcerts/cert.pem",

KeyDirectory: "../../fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/",

TLSCertPath: "../../fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt",

PeerEndpoint: "localhost:7051",

GatewayPeer: "peer0.org1.example.com",

MSPID: "Org1MSP",

},

"org2": {

CryptoPath: "../../fabric-samples/test-network/organizations/peerOrganizations/org2.example.com/",

CertPath: "../../fabric-samples/test-network/organizations/peerOrganizations/org2.example.com/users/User1@org2.example.com/msp/signcerts/cert.pem",

KeyDirectory: "../../fabric-samples/test-network/organizations/peerOrganizations/org2.example.com/users/User1@org2.example.com/msp/keystore/",

TLSCertPath: "../../fabric-samples/test-network/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt",

PeerEndpoint: "localhost:9051",

GatewayPeer: "peer0.org2.example.com",

MSPID: "Org2MSP",

},

"org3": {

CryptoPath: "../../fabric-samples/test-network/organizations/peerOrganizations/org3.example.com/",

CertPath: "../../fabric-samples/test-network/organizations/peerOrganizations/org3.example.com/users/User1@org3.example.com/msp/signcerts/cert.pem",

KeyDirectory: "../../fabric-samples/test-network/organizations/peerOrganizations/org3.example.com/users/User1@org3.example.com/msp/keystore/",

TLSCertPath: "../../fabric-samples/test-network/organizations/peerOrganizations/org3.example.com/peers/peer0.org3.example.com/tls/ca.crt",

PeerEndpoint: "localhost:11051",

GatewayPeer: "peer0.org3.example.com",

MSPID: "Org3MSP",

},

}