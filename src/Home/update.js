import axios from 'axios'
import React from 'react'
import { useState} from 'react'
//import './Form.css'
export default function Update() {
  
const[name,setname]=useState('')
const[emailid,setemailid]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          name:name,
          emailid:emailid   
        }
        console.log(data)
        axios.put(`http://127.0.0.1:8080/updatequery/${name}/${emailid}`,data)
          .then(response => { console.log(response.data) })
          .catch(err => { console.log(err) })
         
        alert("updated")
      }    
  return (
    <div id="border">
    <div id="border2">
    <h1>FILL THE DETAILS</h1>
    <form onSubmit={handleSubmit}>
    <label>NAME:    <input type='text' id='name' placeholder='ENTER YOUR NAME'  onChange={(e)=>setname(e.target.value)}>
    </input>
    </label>
    <br></br>
    <label>E-MAIL ID :    <input type='email'  placeholder='ENTER YOUR E-MAIL ID' onChange={(e)=>setemailid(e.target.value)}></input></label>
<br></br>
    <br></br>
    <input type='submit'></input>
    </form>
    </div>
    </div>
  )
}