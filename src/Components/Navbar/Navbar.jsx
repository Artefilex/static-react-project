import { useState } from 'react'
import "./navbar.css"
import { MdTravelExplore } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"

const Navbar = () => {
  const [active, setActive] = useState("navBar")
  const toogleNavbar = () => {
    setActive("navBar activeNavbar")
  }

  return (
    <section className='navbarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#home" className="logo flex">
            <h1> <MdTravelExplore className="icon" /> Travel.</h1>
          </a>
        </div>


        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className='navLink'>Home </a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>Packages </a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'> Shop </a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'>About </a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'> Pages</a>
            </li>
            <li className="navItem">
              <a href="#" className='navLink'> News</a>
            </li>
            <button className='btn'> <a href="#">Book Now </a></button>
          </ul>
          <div className='closeNavbar'> <AiOutlineClose className='icon' onClick={() => setActive("navBar")} /> </div>
        </div>

        <div className='toogleNavbar' onClick={toogleNavbar}>
          <TbGridDots className='icon' />
        </div>
      </header>

    </section>
  )
}

export default Navbar