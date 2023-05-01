import { useState } from 'react'
import "../../Assests/scss/navbar/navbar.css"
import { MdTravelExplore } from "react-icons/md"
import { AiOutlineClose } from "react-icons/ai"
import { TbGridDots } from "react-icons/tb"
import Links from './Links/Links'
import UserBtn from './UserBtn'


const Navbar = () => {
  const [active, setActive] = useState("navBar")
  const toogleNavbar = () => {
    setActive("navBar activeNavbar")
  }

  return (
    <section className='navbarSection'>
      <header className="header">
        <div className="logoDiv">
          <a href="#home" className="logo ">
            <h1> <MdTravelExplore className="icon" /> Travel.</h1>
          </a>
        </div>
        <div className={active}>
          <div className="navList "> 
            <Links  />
            <UserBtn/>
          </div>
          <div className='closeNavbar'> 
          <AiOutlineClose className='icon' onClick={() => setActive("navBar")} /> 
          </div>
        </div>

        <div className='toogleNavbar' onClick={toogleNavbar}>
          <TbGridDots className='icon' />
        </div>
      </header>

    </section>
  )
}

export default Navbar