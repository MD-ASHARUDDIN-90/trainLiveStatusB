import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from "./Pages/AboutUs/AboutUs"
import ContactUs from "./Pages/ContactUs/ContactUs"
import Card from './Component/Card/Card'

export default function App() {
  const [fetchData , setFetchData] = useState([])
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home setFetchData={setFetchData} />}></Route>
      <Route path='/AboutUs'element={<AboutUs />}></Route>
      <Route path='/ContactUs'element={<ContactUs  />}></Route>
      <Route path='/Card'element={<Card fetchData={fetchData}/>}></Route>
     </Routes>
     </BrowserRouter> 
    </div>
  )
}
