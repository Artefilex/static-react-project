
import {useEffect ,memo} from 'react'
import "../../Assests/scss/home/home.css"
// import videos from "../../Assests/header.mp4"

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
      <img src="https://images.pexels.com/photos/13290973/pexels-photo-13290973.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
      {/* <video src={videos} typeof='video/mp4' autoPlay muted loop ></video> */}
      <div className="homeContent">
         <HomeHeader/>
         <InputArea/> 
         <HomeIcons/>
      </div>
    </section >
  )
}

export default memo( Home )