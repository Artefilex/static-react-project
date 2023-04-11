import {useEffect} from 'react'
import "./main.css"
import {Data} from "../../Assests/data"
import Aos from 'aos'
import "aos/dist/aos.css"
import DataMain from './DataMain'
import {useSelector } from 'react-redux'

const Main = () => {
console.log("main components render")

 const datas = useSelector(state => state.data.data)
const filter = useSelector(state => state.data.filter)
const datafilter = datas.filter((elem) => filter.find((item) => item.range > elem.fees ) )

console.log(filter)



 
 useEffect(()=>{
  Aos.init({duration:2000})
 },[])

  return (
  <section className='Main container'>
        <div data-aos="fade-down" className='Main_Section_Title'>
              <h3 className='title'>
                  Most visited destinations    
              </h3>
        </div>
        <div className='Main_Section_Content grid'>
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