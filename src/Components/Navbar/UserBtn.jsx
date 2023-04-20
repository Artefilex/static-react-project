import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const UserBtn = () => {
 const activeUser = useSelector(state => state.author.user)
 const [userActive ,setUserActive] = useState(false)
 const [open ,setOpen] = useState(false) 

//  useEffect(()=>{
//     if(activeUser.Username !== null || activeUser.userName !== undefined ){
//        setUserActive(true)
//     }else{
//      setUserActive(false)
//     }
//   },[activeUser])
  

  const handleLocation = () =>{
    window.location.href = '/login'
  }
 const handleClick = () =>{
    setOpen(!open)
 }


 


  return (

    <div> 
        { userActive === false && <button onClick={handleLocation} className='btn'>  Log In </button>}

       {
        userActive &&<>
              <button className='btn' onClick={handleClick}> User </button>
         {
            open && <div>
                acık
            </div>
         }
        </>
       }
    </div>
  )
}

export default UserBtn