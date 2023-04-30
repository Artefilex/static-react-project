import React, { useEffect } from 'react'
import "./footer.css"
import Video from "../../Assests/header.mp4"
import {FiSend} from  "react-icons/fi"
import {MdTravelExplore} from "react-icons/md"
import {AiFillTwitterCircle ,AiFillInstagram} from "react-icons/ai"
import {BsFacebook } from "react-icons/bs"
import {FiChevronRight } from "react-icons/fi"
import Aos from 'aos'
import "aos/dist/aos.css"
const Fotter = () => {

  useEffect(()=>{
   Aos.init({duration:1000 })
  },[])
  return (
    <section className='footer'>
      <div className='videoDiv'>
            <video src={Video} loop autoPlay muted  ></video>
      </div>
      <div className='secContent container'> 
         <div className="contactDiv flex">
          <div className='text'>
            <small>Keep IN Touch</small>
            <h2>Travel With us </h2>

          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='enter email adress' />
            <button className='btn flex' type='submit'> 
              Send < FiSend className="icon"/>
            </button>
          </div>
         </div>
         <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href="#" className='logo flex' >
               <MdTravelExplore className='icon'/>  Travel.
              </a>
            </div>
            <div className='footerP'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque possimus accusantium deleniti alias odit, aliquam itaque cupiditate ullam suscipit saepe.

            </div>
           <div className='footerSocials'>
              <BsFacebook className='icon' /> <AiFillTwitterCircle  className='icon'/>
              <AiFillInstagram  className='icon'/>
           </div>
           
          </div>
          <div className='footerLinks flex'>
            <div data-aos="fade-up" data-aos-duration="1000" className='linkGroup'>
            <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Servises
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                tourism
              </li>
            </div>
            <div  data-aos="fade-up" data-aos-duration="2000" className='linkGroup'>
            <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Servises
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                tourism
              </li>
            </div>
            <div  data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
            <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Servises
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                tourism
              </li>
            </div>
            </div>
         <div data-aos="fade-down" data-aos-duration="4000" className="footerDiv flex">
          <small>Lorem ipsum dolor sit.</small>
          <small>Copyright © 2023 Apinizer • Powered by Scroll Viewport </small>
         </div>
         </div>
        </div>   
       </section>
  )
}

export default Fotter