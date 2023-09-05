import React from 'react'
import axios from 'axios'
import { useState} from 'react'
import {Link} from "react-router-dom"
//import Createaccount from './Signup'
export default function Search() {
  const[boardingpoint,setboardingpoint]=useState('')
const[droppingpoint,setdroppingpoint]=useState('')
const[dateofjourney,setdateofjourney]=useState('')
const[info,setinfo]=useState([])
const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      boardingpoint:boardingpoint,
      droppingpoint:droppingpoint,
      dateofjourney:dateofjourney
    }
    console.log(data)
     
    alert("Submitted")
  axios.get(`http://127.0.0.1:8080/showbuses/${boardingpoint}/${droppingpoint}`)
  .then(res=>setinfo(res.data));

 }
 // const navigate = useNavigate();
  return (
    <div >
      
    <form onSubmit={handleSubmit}> 
        <label><b>FROM     :</b></label>
        <input type='text' name="from" id="from" placeholder="Boarding" size={40} onChange={(e)=>setboardingpoint(e.target.value)}></input><br></br><br></br><br></br>
        <label><b>TO      :</b></label>
        <input type='text' name="to" id="to" placeholder="droping" size={40} onChange={(e)=>setdroppingpoint(e.target.value)}></input><br></br><br></br>
        <input type='date' name='date' id='date' onChange={(e)=>setdateofjourney(e.target.value)}></input>
         <button >Search</button>   

    </form>
    {info.map((data) => { return <li>
        <label><b>BUS NUMBER :</b></label> {data.id}<br></br>
        <p>
         <label><b>BUS TYPE :  </b></label>{data.bus_type}
       <label><b>SEAT NUMBER:      </b></label> {data.seat_no}
         <label><b>BOARDING POINT:      </b></label>{data.boardingpoint}
       <label><b>DROPPING POINT:       </b></label> {data.droppingpoint}
         <label><b>DATE:      </b></label>{data.dateofjourney}
         <Link to='/form'>Click</Link>
         </p>
         </li> })}
    <br></br><br></br>


    </div>
  )
  }