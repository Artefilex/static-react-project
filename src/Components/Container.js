import React from 'react'
import {Footer,Navbar } from "./";
import { BrowserRouter as Router } from "react-router-dom";
import Location from "./Navbar/Routes/Location";

const Container = () => {
  return (
    <>
        <Router>
         <Navbar/>        
         <Location/>
        <Footer/> 
       </Router>
    </>
  )
}

export default Container