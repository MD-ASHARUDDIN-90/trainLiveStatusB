import React from 'react'
import { traindata } from '../../Atom/Atom'
import { useRecoilState } from 'recoil'
import style from "./TrainLivePage.module.css"

function TrainLivePage() {
const [data,setData] = useRecoilState(traindata)
console.log(data,"bipullllll")
  return (
    <div>
      <h1>TrainLivePage</h1>
      {data.map((item)=>
      <>
      <div className={style.main}>
         <h3>{item.source_name}</h3>
      </div>
      </>
      )}
    </div>
  )
}

export default TrainLivePage
