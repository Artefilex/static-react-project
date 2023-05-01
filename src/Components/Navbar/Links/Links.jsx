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
      <NavLink to={"/shop"} className='navLink'> Shop </NavLink>
    </li>
    <li className="navItem">
      <NavLink  to={"/about "} className='navLink'>About </NavLink>
    </li>
    <li className="navItem">
      <NavLink  to={"/pages"}  className='navLink'> Pages</NavLink>
    </li>
 </>
  )
}

export default Links
