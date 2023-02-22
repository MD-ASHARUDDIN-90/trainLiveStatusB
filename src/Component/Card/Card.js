import React, { useState, useEffect } from "react";
import style from "./Card.module.css";
import { useRecoilValue } from "recoil";
import { Traindata } from "../../Atom/Atom";
import Navbar from "../Navbar/Navbar";

function Card({ fetchData }) {

function handleLiveStatus(item){
  console.log(item,"clcik item")
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '43e138d2a8mshdd5783f8629f9afp105103jsnfac1b0bd9c7a',
      'X-RapidAPI-Host': 'indian-railway-irctc.p.rapidapi.com'
    }
  };
  
  fetch(`https://indian-railway-irctc.p.rapidapi.com/getTrainLiveStatusById?id=${item.id}&date=Mon%2C%2031st%20Dec`, options)
    .then(response => response.json())
    .then(response => console.log(response,"live status of train which click"))
    .catch(err => console.error(err));
}

  return (
    <div className={style.main}>
      <Navbar />
      <h2 className={style.head}>List of trains search by train number... </h2>
      <div className={style.allCard}>
        {fetchData.map((item) => (
          <>
            <div className={style.Card}>
              <div>
                <h3>Train No : {item.display.split(" ").slice(0,1).join(" ")}</h3>
                <h5>Destination Code : {item.destination_code}</h5>
                <h5> Destination Name : {item.destination_name}</h5>
                <h3>{item.destination_name_hi}</h3>
                <h3>{item.display}</h3>
                <h5> Source Name : {item.source_name}</h5>
                <h5> Source Code : {item.source_code}</h5>
            
              </div>
              <button onClick={() => handleLiveStatus(item)}>
                Check Live Status
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Card;
