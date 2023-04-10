import {useEffect} from 'react'
import "./main.css"
import {Data} from "../../Assests/data"
import { GrLocation} from "react-icons/gr"
import {BsClipboardCheck} from "react-icons/bs"
import Aos from 'aos'
import "aos/dist/aos.css"
const Main = () => {
 useEffect(()=>{
  Aos.init({duration:2000})
 },[])

  return (
  <section className='main container'>
        <div data-aos="fade-down" className='secTitle'>
              <h3 className='title'>
                  Most visited destinations
                  
              </h3>
        </div>
        <div className='seContent grid'>
           {
            Data.map((travel) =>(
              <div className='singleDestination' data-aos="zoom-in" key={travel.id}>
                 <div className="imageDiv">
                  <img src={travel.imgSrc} alt={travel.destTitle} />
                 </div>
                 <div className='cardInfo'>
                    <h4 className='title'> {travel.destTitle}</h4>
                    <span  className='continent flex'>  
                      <GrLocation className='icon'/> 
                      <span className='name'>{travel.location} </span>
                     </span>
                     <div className='fees flex'>
                       <div className='grade'>
                         <span> {travel.grade} <small>+1</small></span>
                        
                       </div>
                       <div className="price">
                        <h5>{travel.fees}</h5>
                       </div>
                     </div>
                     <div className='desc'>
                      <p>{travel.descripton}</p>
                     </div>
                     <button className='btn flex'  > <span>DETAİLS</span>  <BsClipboardCheck className='icon'/> </button> 
                 </div>
              </div>

            ) )
           }

        </div>
  </section>
  )
}

export default Main