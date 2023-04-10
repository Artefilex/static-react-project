
import {useEffect} from 'react'
import "./home.css"
import videos from "../../Assests/header.mp4"
import { CiLocationOn } from "react-icons/ci"
import {HiFilter} from "react-icons/hi"
import {FiFacebook, FiInstagram  } from "react-icons/fi"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {TbBrandTripadvisor ,TbApps} from "react-icons/tb"
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
        <div className='textDiv'>
          <span data-aos="fade-up" className='smallText'>
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holiday
          </h1>
        </div>
        <div  data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your destination: </label>
            <div className='input flex'>
              <input type="text" placeholder='Enter name here...' />
              <CiLocationOn className='icon' />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select Your Date:  </label>
            <div className='input flex'>
              <input type="date" />

            </div>

          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price" className='total'>Max Price :</label>
              <h3 className='total'> $5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max={5000} min={1000} />
            </div>
          </div>
          <div className='searchOption flex'>
           <HiFilter className='icon'/>
           <span>More Filter</span>

          </div>
        </div>
        <div  data-aos="fade-up" className="homeFooterIcons flex">
           <div className="rightIcons">
            <FiFacebook className="icon" />
            <FiInstagram className="icon"/>
            <TbBrandTripadvisor className="icon"/>

           </div>
           <div className='leftIcons'> 
        
           <AiOutlineUnorderedList className="icon" />
           <TbApps className="icon" />

           </div>
        </div>
      </div>




    </section >
  )
}

export default Home