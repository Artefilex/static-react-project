import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../../Main/Main'
import DataMain from '../../Main/DataMain'
import DataLocation from '../../Main/DataLocation'
const Location = () => {
  return (
    <Routes>
        <Route path='/' exact Component={Main} /> 
        <Route path='/packages' Component={Main} /> 
        <Route path='/shop' Component={Main} /> 
        <Route path='/about' Component={Main} /> 
        <Route path='/pages' Component={Main} /> 
        <Route path='/:id' Component = {DataLocation}  />
    </Routes>
  )
}

export default Location