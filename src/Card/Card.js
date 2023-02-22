import React, { useState,useEffect } from 'react'
import style from "./Card.module.css"
import { useRecoilValue } from 'recoil'
import { Traindata } from '../Atom/Atom'

function Card() {
    const[data,setData]=useState([])
    const newValue=useRecoilValue(Traindata)
    const[filterd,setFiltered]=useState([])
    
    useEffect(()=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '37f13b1eb0msh930328f2c54d226p1ed50ejsn1a864904355b',
      'X-RapidAPI-Host': 'indian-railway-irctc.p.rapidapi.com'
    }
  };
  fetch('https://indian-railway-irctc.p.rapidapi.com/getTrainId?trainno=1205', options)
    .then(response => response.json())
    .then(response => setData(response))

    .catch(err => console.error(err));
  
  },[])
  useEffect(()=>{
    // console.log(typeof(newValue))
   let newfilterdata= data.filter((e)=>e.destination_name.toLowerCase().includes(newValue.toLowerCase()) )
   console.log(newfilterdata)
   setFiltered(newfilterdata)
  },[newValue])
  console.log(data)
  return (
    <div >
        {data.map((item)=>
        <div className={style.Card}>
         <h1>{item.id}</h1>
        <h1>{item.destination_code}</h1>
        <h1>{item.destination_name}</h1>
        <h2>{item.destination_name_hi}</h2>
        <h2>{item.display}</h2>
        <h3>{item.source_name}</h3>
        <h2>{item.source_code}</h2>
        <h3>{item.runson}</h3>
        </div>
        )}
      
    </div>
  )
}

export default Card
