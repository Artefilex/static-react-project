import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {AiFillCreditCard} from "react-icons/ai"
import {HiLocationMarker} from "react-icons/hi"
import {SiYourtraveldottv} from "react-icons/si"
import CardForm from './Form/CardForm';
import AddressForm from './Form/AddressForm';
const Summary = () => {

    const total = useSelector(state => state.market.total)
    const box= useSelector(state => state.market.box)
    const data = useSelector(state => state.market.data)
    const [filter, setFilter] = useState([])
    const cardInfo = JSON.parse(localStorage.getItem("allInfo"))
    const [showAddress , setShowAddress] = useState(false)
    const [showCard, setShowCard] = useState(false)
   

    useEffect(()=>{
    const filterData = data.filter((item)=> box.includes(item.imgSrc))
       setFilter(filterData)
    },[data,box])
  return (
    <div className="Payment-information">
        <div className="Payment-Card">
          {
           cardInfo  && cardInfo.map((item , i) => (
             <div className='Payment-Card-Section'>
              <div key={i} className='address'>
               <div className='card-flex'>
                <h2> Adrress Bilgileri </h2>
                <HiLocationMarker className='icon'/>
               </div>
                <div>
                <h4> Açık Adres :</h4>  <span>{item.address}</span>
                </div>
                <div >
                 <h4>Şehir: </h4><span>{item.city}</span>
                </div>
              </div>
              <button className='btn' onClick={() => setShowAddress(!showAddress)} >Adrress bilgilerini Değiş </button> 
              {
              showAddress  &&   <AddressForm/>
              }
              <div>
              
              </div>
              <div className='cardInfo'>
               <div className='card-flex'>
               <h2>Kart bilgileri </h2>
                <AiFillCreditCard className='icon'/>
               </div>
               <div className='bank-card'>
               <div> <h4>Kart Üzerindeki isim </h4>  <span>{item.cardName} </span> 
                
                </div>
                <div> <h4>Kart Numarası</h4> <span>**** {item.cardNumber.substring(item.cardNumber.length - 4)}</span> </div>
                <div><h4>Sona Erme Tarihi</h4><span> {item.date}</span> </div>
               </div>
               </div>
              <button className='btn'  onClick={()=> setShowCard(!showCard)} > Kredi/Banka Kartı   </button> 
              {
              showCard &&   <CardForm/>
              }
              <div>
              </div>

             </div>
            ))
          }
        </div>
      <div className= "Payment-info">
        <div className='info-header'>
        <h2>Tatil Özeti  </h2>
       <SiYourtraveldottv className="icon"/>
        </div>
         <div className="summary">
          {
            filter && filter.map((item, i) =>(
              <div className="summary-location" key={i}>
                 <div className='summary-header'>
                 <h4> {item.location}</h4>
                 <span> {item.grade} </span>
                 </div>
                <div className='summary-body'>
                <span> $ {item.fees} </span>
                 <span>{item.date} / {item.dateFinish} </span>
                </div>
                <p> {item.descripton}</p>
                 </div>
            ) ) 
          }
         </div>
         <div className="total">
          <h4>Toplam Tutar: </h4>  
          <span>{total ? total: null} $</span>
        </div>
      </div>
      </div>
  )
}

export default Summary