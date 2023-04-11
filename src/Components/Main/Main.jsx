import {useEffect} from 'react'
import "./main.css"
import {Data} from "../../Assests/data"
import Aos from 'aos'
import "aos/dist/aos.css"
import DataMain from './DataMain'
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
              <DataMain key={travel.id}  travels ={travel} />
            ))
           }
        </div>
  </section>
  )
}

export default Main