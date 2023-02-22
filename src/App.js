import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from "./Pages/AboutUs/AboutUs"
import ContactUs from "./Pages/ContactUs/ContactUs"
import Card from './Card/Card'

export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/AboutUs'element={<AboutUs />}></Route>
      <Route path='/ContactUs'element={<ContactUs />}></Route>
      <Route path='/Card'element={<Card/>}></Route>
     </Routes>
     </BrowserRouter> 
    </div>
  )
}
