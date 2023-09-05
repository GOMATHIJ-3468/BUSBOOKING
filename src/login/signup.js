import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import {useNavigate} from "react-router-dom"
//import Createaccount from './Signup'
export default function Login() {
  const[emailid,setemailid]=useState('')
const[password,setpassword]=useState('')
const[check,setcheck]=useState('')
const handle=(e)=>{
  e.preventDefault();
  navigate('/create')
}
const handleSubmit =  (e) => {
    e.preventDefault();
    axios.get(`http://127.0.0.1:8080/getdetails/${emailid}/${password}`)
    .then(res => setcheck(res.data))
    .catch(err=>(console.log(err)))
  //const check=true;
  if(check===true){
    navigate('/search');
    console.log("valid");
}
  else if(check===false){
    console.log("invalid");
    alert('Invalid credential')
  }
  
  
}

const handledelete=(e)=>{
  e.preventDefault();
  navigate('/delete')
}
  const navigate = useNavigate();
  return (
    <div id='border'>
      <div id="border2">
    <form>
        <label><b>EMAIL ID     :</b></label>
        <input type='email' name="Email" id="email" placeholder="Email" size={40} onChange={(e)=>setemailid(e.target.value)}></input><br></br><br></br><br></br>
        <label><b>PASSWORD      :</b></label>
        <input type='password' name="Password" id="password" placeholder="Password" size={40} onChange={(e)=>setpassword(e.target.value)}></input><br></br><br></br>
        <button onClick={handleSubmit}>LOGIN</button>
         <button onClick={handle}>Signup</button>  
         <button onClick={handledelete}>Forgot Password</button>   
    </form>
    <br></br><br></br>
    </div>
    </div>
  )
  }