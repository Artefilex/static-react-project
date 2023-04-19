
import  { useEffect, useState } from 'react'

import {ImBin} from "react-icons/im"
import { getBasketData } from '../../Reducer/reducer/MarketSlice'
import { useSelector } from 'react-redux'
const FilteredBasket = () => {

    const filtered = useSelector(state => state.market.data)
 const [basket, setBasket] = useState([])
 const [count, setCount] = useState({})
 const filteredData = filtered.filter((data) => basket.find(item => data.imgSrc === item ))
 
 const increase = (imgSrc) =>{
    setCount((prevState)=> ({
      ...prevState,
      [imgSrc]: prevState[imgSrc] ? prevState[imgSrc] + 1 : 1
    }))
  }
 const decrease = (imgSrc) =>{
  setCount(prevState => ({
    ...prevState,
    [imgSrc]: Math.max((prevState[imgSrc] || 0) - 1, 0)
  }))
}

const handleRemove = (url) =>{
  const myData = JSON.parse(localStorage.getItem('market'));
  const indexToRemove = myData.filter(item => item !== url);
  localStorage.setItem('market', JSON.stringify(indexToRemove));
  window.location.reload();
}

 useEffect(()=>{
  setBasket(getBasketData())
 },[])
 
 return (
    <>
      {
    filteredData && filteredData.map((item ,index) =>(
         <div key={index} className='Shop-item-main'>
             <div className='Shop-item-seciton' > 
                  <img src={item.imgSrc} alt={item.imgSrc} />  
                  <span>{item.grade}</span>   
             </div>
            <div className='Shop-btn-amount'>
            <div className='Shop-button'>
                 <h4>Ekstra Gün +${item.ekstra}</h4>
                 <div className='buttons'>
                 <button onClick={() => decrease(item.imgSrc)}><span>-</span></button>
                  <span>{count[item.imgSrc] ? count[item.imgSrc]: 0}</span> 
                 <button onClick={() => increase(item.imgSrc)}>
                     <span>+</span>
                 </button>
                 </div>
                 
             </div>
             <div className='Shop-amount'>
               <h4>Total Amount </h4>
                <h2>
                {
             count[item.imgSrc] ? (count[item.imgSrc] * item.ekstra + item.fees ): item.fees
             }
                </h2>
              
              </div>
            </div>
             <div className='clear-button'>
              <button className='btn' onClick={()=> handleRemove(item.imgSrc) }>
                <ImBin className='icon'/>
              </button>
             </div>
         </div>
      ))
     }
    </>
  )
}

export default FilteredBasket