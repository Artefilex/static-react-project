
import {useEffect } from 'react'
import "../../Assests/scss/home/home.css"
import videos from "../../Assests/header.mp4"

import HomeHeader from "./Home_Content/HomeHeader"
import InputArea from './Home_Content/InputArea'
import HomeIcons from './Home_Content/HomeIcons'
import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {
  
useEffect(()=>{
  Aos.init({duration:2000})
})

console.log("InputArea render")
  return (
    <section className='home'>
      <div className='overlay'>

      </div>
      <video src={videos} typeof='video/mp4' muted loop autoPlay ></video>
      <div className="homeContent">
         <HomeHeader/>
         <InputArea/> 
         <HomeIcons/>
      </div>
    </section >
  )
}

export default Home