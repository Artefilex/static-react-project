import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserOption from '../UserOption/UserOption'


const UserBtn = () => {
 const activeUser = useSelector(state => state.author.user)
 const userActive = JSON.parse(localStorage.getItem("isActive"))
 const [open ,setOpen] = useState(false) 

 useEffect(()=>{
   
  },[activeUser ])


  const handleLocation = () =>{
    window.location.href = '/login'
  }
 const handleClick = () =>{
    setOpen(!open)
 }


 


  return (

    <div> 
        { !userActive && <button onClick={handleLocation} className='btn'>  Log In </button>}

       {
        userActive &&<>
              <button className='btn' onClick={handleClick}> User </button>
         {
            open && <UserOption/>
         }
        </>
       }
    </div>
  )
}

export default UserBtn