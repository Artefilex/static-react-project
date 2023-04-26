import React from 'react'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Summary = () => {

    const total = useSelector(state => state.market.total)
    const box= useSelector(state => state.market.box)
    const data = useSelector(state => state.market.data)
    const [filter, setFilter] = useState([])
    useEffect(()=>{
    const filterData = data.filter((item)=> box.includes(item.imgSrc))
       setFilter(filterData)
    },[data,box])
  return (
    <div className="Payment-method">
        <div className="Payment-Card">
          
        </div>
      <div className="payment-info">
        <h2>Tatil Özeti </h2>
       
        
         <div className="summary">
          {
            filter && filter.map((item, i) =>(
              <div className="summary-location" key={i}>
                 <h4> {item.location}</h4>
                 <span> {item.grade} </span>
                 <span> {item.fees} </span>
                 <span>{item.date} / {item.dateFinish} </span>
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