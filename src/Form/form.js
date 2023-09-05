import axios from 'axios'
import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Form() {
  const navigate=useNavigate();
const[name,setname]=useState('')
const[gender,setgender]=useState('')
const[age,setage]=useState(0)
const[dob,setdob]=useState('')
const[ph_no ,setph_no]=useState(0)
const[emailid,setemailid]=useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
          name:name,
          gender:gender,
          age:age,
          dob:dob,
          ph_no:ph_no,
          emailid:emailid   
        }
        console.log(data)
        axios.post(`http://127.0.0.1:8080/add`,data)
          .then(response => { console.log(response.data) })
          .catch(err => { console.log(err) })
         
        alert("Submitted")
        navigate('/getdetails');
      }    
  return (
    <div id="border">
    <div id="border2">
    <h1>FORM VALIDATION</h1>
    <form onSubmit={handleSubmit}>
    <label>NAME:    <input type='text' placeholder='ENTER YOUR NAME'  onChange={(e)=>setname(e.target.value)}>
    </input>
    </label>
    <br></br>
    
    <br></br>
    <label>GENDER:    <input type='text'   onChange={(e)=>setgender(e.target.value)}>
    </input>
    </label>
    <br></br>
    <label>AGE:    <input type='number'  placeholder='ENTER YOUR AGE' onChange={(e)=>setage(e.target.value)}>
    </input></label>
    <br></br>
    
    <br></br>
    <label>DOB:        <input type='date'  onChange={(e)=>setdob(e.target.value)}></input></label>
    <br></br><br></br>
    <br></br>
    <label>PHONE-NO:      <input type='number'  onChange={(e)=>setph_no(e.target.value) }></input></label>
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