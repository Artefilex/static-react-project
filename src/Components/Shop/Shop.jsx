import React from 'react'
import "./shop.css"
import { useSelector } from 'react-redux'
const Shop = () => {
  const market = useSelector(state => state.data.basket) 
  return (
    <div className='Shop'>

      {
        market.map((item ,i) => (
          <div key={i}> { item.imgSrc}  </div>
        ) )
      }
    </div>
  )
}

export default Shop