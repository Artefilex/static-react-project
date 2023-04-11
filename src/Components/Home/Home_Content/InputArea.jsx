import React, { useState } from 'react'
import { CiLocationOn } from "react-icons/ci"
import {HiFilter} from "react-icons/hi"
import { useDispatch} from 'react-redux'
import { addData } from '../../../Reducer/reducer/DataSlice'




const InputArea = () => {
const dispatch = useDispatch()

 console.log("InputArea render")
 const [destination , setDestination] = useState("")
 const [date ,setDate ] = useState("")
 const [range , setRange] = useState(0)



const handleLocation = (e) => setDestination(e.target.value)
const handleDate = (e) => setDate(e.target.value)
const handleRange = (e) => { setRange(e.target.value)};




 const handleSubmit = (e)=>{
   e.preventDefault()
   if(range){
    const action = {destination, range, date }
    dispatch(addData(action))

     setDate("")
     setDestination("")
     setRange("")
   }
   
  


 }

  return (
    <form onSubmit={handleSubmit}  data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your destination: </label>
            <div className='input flex'>
              <input type="text" value={destination} onChange={handleLocation} placeholder='Enter A country' />
              <CiLocationOn className='icon' />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select Your Date:  </label>
            <div className='input flex'>
              <input type="date"  value={date} onChange={handleDate}/>
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price" className='total'>Max Price :</label>
              <h3 className='total'> $ {range}</h3>
            </div>
            <div className="input flex">
              <input type="text" value={range} onChange={handleRange} max={5000} min={0} />
            </div>
          </div>
          <button type='submit'  className='searchOption flex'>
           <HiFilter className='icon'/>
           <span>More Filter</span>

          </button>
        </form>
  )
}

export default InputArea