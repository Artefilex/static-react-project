import "./shop.css"
import PaymentForm from './PaymentForm'
import FilteredBasket from './FilteredBasket'
import { useEffect, useState } from "react"
import EmptyAlert from "./EmptyAlert"
import Payment from "./Payment"
import { useSelector } from "react-redux"

const Shop = () => {
  const active = useSelector(state => state.market.active)
  const storedData = JSON.parse(localStorage.getItem('market'));
  const [empty, setEmty] = useState(false)
  useEffect(()=>{
    if(!storedData || storedData.length === 0 ){
      setEmty(false)
    }
    else{
      setEmty(true)
    }
  },[storedData])
  
  

  return (

   
    <div className='Shop'>
   
   {
    active && <Payment/>
   }
   {
    !active &&  <div className="Shop-center">
    {
         !empty && <EmptyAlert  /> 
      }  
    {    
      empty  &&  <>
        <div className='Shop-product'>
            <FilteredBasket/>
        </div>
        <div className='Payment-form'>
            <PaymentForm/>
        </div>
       </>
     }
      
     </div>
   }


 </div>
   
  )
}

export default Shop