import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../../Main/Main'
import DataLocation from '../../Main/DataLocation'
import Shop from '../../Shop/Shop'
import Login from "../../Login/Login"
import Join from '../../Login/Join'
const Location = () => {
  return (
    <Routes>
        <Route path='/' exact Component={Main} /> 
        <Route path='/packages' Component={Main} /> 
        <Route path='/shop' Component={Shop} /> 
        <Route path='/about' Component={Main} /> 
        <Route path='/pages' Component={Main} /> 
        <Route path='/:id' Component = {DataLocation}/>
        <Route path= "/login" Component={Login} />
        <Route path="/join" Component={Join} />
       
    </Routes>
  )
}

export default Location