
import {useEffect} from 'react'
import "./home.css"
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

  return (
    <section className='home'>
      <div className='overlay'>

      </div>
      <video src={videos} typeof='video/mp4' muted loop autoPlay ></video>
      <div className="homeContent container">
         <HomeHeader/>
         <InputArea/>
         <HomeIcons/>
      </div>
    </section >
  )
}

export default Home