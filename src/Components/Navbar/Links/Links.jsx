import React from 'react'
import { NavLink} from 'react-router-dom'
const Links = () => {
  return (
 <>
     <li className="navItem">
      <NavLink to={"/"}  className='navLink'> Home </NavLink>
    </li>
     
    <li className="navItem">
      <NavLink to={"/packages"} className='navLink'>Packages </NavLink>
    </li>
    <li className="navItem">
      <a href={"/shop"} className='navLink'> Shop </a>
    </li>
    <li className="navItem">
      <NavLink  to={"/about "} NavLink className='navLink'>About </NavLink>
    </li>
    <li className="navItem">
      <NavLink  to={"/pages"}  className='navLink'> Pages</NavLink>
    </li>
   
 </>
  )
}

export default Links
