import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../Assests/data";

const initialState = {
    data: Data,
    total:'',
    active: false,
    market: []
    
}

const MarketSlice = createSlice({
    name: "market",
    initialState,
    reducers:{
       calculateAmaount(state,action){
        state.total = action.payload
       },
       addBasket(state, action){
         state.market.push(state.data.filter((item) => item.imgSrc === action.payload) ) 
       },
       showPayment(state,action){
        state.active = action.payload
       }

    }
})
export const addNewsToLocalStorage = (market) => {
    const existingNews = JSON.parse(localStorage.getItem("market")) || [];
    const updatedNews = [...existingNews, market];
    localStorage.setItem("market", JSON.stringify(updatedNews));
  };

export const getBasketData = () => {
    return JSON.parse(localStorage.getItem("market")) || []
}

export const { addBasket, calculateAmaount ,showPayment} = MarketSlice.actions

export default MarketSlice.reducer