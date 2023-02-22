import React, { useState, useEffect } from "react";
import style from "./Home.module.css"
import { useNavigate } from "react-router-dom";
import { traindata } from "../../Atom/Atom";
import {useSetRecoilState } from "recoil";
import {Traindata} from"../../Atom/Atom"

function Home() {
  const Navigate = useNavigate()
  const[data,setData]=useState([])
  const setData2=useSetRecoilState(Traindata)
  const [Number, setNumber] = useState('')

function handleClick(){
  setData(Number)
  setData2(data)
Navigate("/Card")
}
  


  return (
  <>
<div className={style.container}>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRludSQffX9Bh8ZtuyjqsV72KsZTjbqgLpGQ&usqp=CAU"/>
</div>

    <div className={style.App}>

      <div className={style.wrapper}>

    
        <a onClick={() => Navigate("/AboutUs")} >About Us</a>
        <a onClick={() => Navigate("ContactUs")} >Contact Us</a>

      </div>
      <div className={style.main}>
        <h3>SEARCH BY TRAIN</h3>
        <input type={'text'} className={style.inputContainer} placeholder='Train Number' onChange={(e) => setNumber(e.target.value)} required />

      <button className={style.btnContainer} onClick={handleClick}>Check Status</button> </div>
    </div>
</>

  );
}

export default Home;
