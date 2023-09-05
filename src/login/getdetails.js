import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './getdetails.css'
export default function Getdetails() {
    const navigate=useNavigate();
  const[info,setInfo]=useState([])
  const [emailid,setemailid]=useState('')
    const handleget = (e) => {
        e.preventDefault();
       // console.log(data)
        axios.get(`http://127.0.0.1:8080/showquerys/${emailid}`)
        .then(res => setInfo(res.data))
         
    }
    const handlegetdetails = (e) => {
      e.preventDefault();
     // console.log(data)
      axios.get(`http://127.0.0.1:8080/disp`)
      .then(res => setInfo(res.data))
  }
  const handleup=(e)=>{
    e.preventDefault();
    navigate('/update')
  }
  return (
    <div id='border1'>
    <div id='border23'>
    <form onSubmit={handleget}>
    <label>EMAIL ID:</label>
    <input type='email' onChange={(e)=>setemailid(e.target.value)}></input><br></br>
    <input type='submit' />
    <button onClick={handlegetdetails}>GET</button>
    <button onClick={handleup}>EDIT</button>
    </form>
    <table className='table-data'>
    <thead>
      <tr>
        <th>  ID  </th>
        <th>  Name </th>
        <th> Gender</th>
        <th> AGE </th>
        <th> DOB  </th>
        <th> PH_NO </th>
        <th> EMAIL </th>
      </tr>
    </thead>
    <tbody>
      {info.map((data) => (
        <tr key={data.id}>
          <td> {data.id}</td>
          <td> {data.name}</td>
          <td> {data.gender}</td>
          <td> {data.age}</td>
          <td> {data.dob}</td>
          <td> {data.ph_no}</td>
          <td> {data.emailid}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
    </div>
  )
}