import React, { useEffect , useState } from 'react'
import { traindata } from '../../Atom/Atom'
import { useRecoilState } from 'recoil'
import style from "./TrainLivePage.module.css"
import Image from "./Track.png"
import { FaTrain } from 'react-icons/fa';

function TrainLivePage() {
const [data,setData] = useRecoilState(traindata)
console.log(data,"bipullllll")
const [color,setcolor] = useState("blue")

const date = new Date();
const hour=date.getHours()
const min = date.getMinutes()
const sec= date.getSeconds()
console.log(hour,min,sec)




  return (
    <div className={style.main}>
     
      <div className={style.box}>
      {data.map((item)=>
      <>
      
      <div className={style.TrainBox}>
      <img className={style.img} src={Image} />
        <span className={style.logo}  style={{color : item.actual_departure_time.split("").slice(0,2).join("") == hour   ? "red" : "blue" } }><FaTrain/></span>
        <h3>{item.source_name}</h3>
        <h5>Arival time:{item.actual_arrival_time}</h5>
        <h5>Departure time:{item.actual_departure_time}</h5>
        </div>
    
      </>
      )}
      </div>
    </div>
  )
}

export default TrainLivePage
