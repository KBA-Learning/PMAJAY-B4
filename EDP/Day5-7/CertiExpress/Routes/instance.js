import { assert, ethers } from "ethers";
import abi from './Assets/Cert.json' assert {type:'json'};
import address from './Assets/deployed_addresses.json' assert {type:'json'};


export const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");

const signer =await  provider.getSigner();
console.log(signer);
console.log(abi);
console.log(address);

export const contObjct = new ethers.Contract(address["CertModule#Cert"],abi.abi,signer);


