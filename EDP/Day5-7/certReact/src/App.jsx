import {BrowserProvider,Contract} from 'ethers';
import { useState } from 'react';
import abi from './assets/Cert.json';
import address from './assets/deployed_addresses.json'

function App(){
  const [txDetails,setTxDetails]=useState({
    ID:0,
    Name:'',
    Course:'',
    Grade:'',
    Date:''
  })
  const [output,setOutput]= useState('');


  const provider = new BrowserProvider(window.ethereum);
  async function handleWallet(){
    const signer =await provider.getSigner()
    alert(`${signer.address} connected succesfully`);
  }

  function handleChange(e){
    const {name,value} = e.target;
    console.log(name,value);
    setTxDetails((prevState)=>({...prevState,[name]:value}));
  }

  async function handleSubmit(e){
    e.preventDefault();
    console.log(txDetails);
    const signer =await provider.getSigner()
    const contObj = new Contract(address['CertModule#Cert'],abi.abi,signer);
    const txReceipt=await contObj.issue(txDetails.ID,txDetails.Name,txDetails.Course,txDetails.Grade,txDetails.Date);
    if(txReceipt){
      console.log(txReceipt);
      alert(`${txReceipt.hash} created succesfully`)
    }
    else{
      alert("Check details");
    }
  }

  async function handleClick(){
    const Id = document.getElementById("iD").value;
    console.log(Id);
    const signer =await provider.getSigner()
    const contObj = new Contract(address['CertModule#Cert'],abi.abi,signer);
    const result =await contObj.Certificates(Id);
    console.log(result[0]);
    const out = `Name:${result[0]}, Course:${result[1]},Grade:${result[2]},Date:${result[3]}`
    setOutput(out)

  }

  return(
    <div>
      <div>
        <input type="button" value="Connect To Metamask" onClick={handleWallet} />
      </div>
      <br />
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
          <label>ID :</label>
          <input type="text" onChange={handleChange} name="ID"/>
          </div>
          <div>
            <label>Name :</label>
            <input type="text" name='Name' onChange={handleChange} />
          </div>
          <div>
            <label>Course :</label>
            <input type="text" name='Course' onChange={handleChange} />
          </div>
          <div>
            <label>Grade :</label>
            <input type="text" name='Grade' onChange={handleChange} />
          </div>
          <div>
            <label>Date :</label>
            <input type="date" name='Date' onChange={handleChange}/>
          </div>
          <div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
        </div>
        <br />
      <br />
        <div>
          <input type="text" id='iD' />
          <input type="button" value="Get Certificate" onClick={handleClick}/>
        </div>
        <div>
          <p>{output}</p>
        </div>
       
      </div>
   
  )
}

export default App;