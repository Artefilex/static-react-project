import "./shop.css"
import PaymentForm from './PaymentForm'
import FilteredBasket from './FilteredBasket'
import { useEffect, useState } from "react"
import EmptyAlert from "./EmptyAlert"

const Shop = () => {
  const storedData = JSON.parse(localStorage.getItem('market'));
  console.log(storedData)
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
    !empty && <EmptyAlert/> 
 }
 <div className="Shop-center">
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
    </div>
  )
}

export default Shop