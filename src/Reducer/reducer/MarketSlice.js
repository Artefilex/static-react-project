import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../Assests/data";

const initialState = {
    data: Data,
    total:'',
    active: false,
    market: [],
    box: JSON.parse(localStorage.getItem("market")) ||[],
   
    
}

const MarketSlice = createSlice({
    name: "market",
    initialState,
    reducers:{
       calculateAmaount(state,action){
        state.total = action.payload
       },
       addBasket(state, action){
         state.market = state.data.filter((item) => item.imgSrc === action.payload)  
        
       },
       showPayment(state,action){
        state.active = action.payload
       
       }
      

    }
})
export const addBasketToLocalStorage = (market) => {
    const existingBasket = JSON.parse(localStorage.getItem("market")) || [];
    const updatedBasket = [...existingBasket, market];
    localStorage.setItem("market", JSON.stringify(updatedBasket));
  };

export const getBasketData = () => {
    return JSON.parse(localStorage.getItem("market")) || []
}

export const { addBasket, calculateAmaount ,showPayment,filterState} = MarketSlice.actions

export default MarketSlice.reducer