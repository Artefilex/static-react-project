import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../../Assests/data";

const initialState = {
    data: Data,
    market:[]
    
}

const MarketSlice = createSlice({
    name: "market",
    initialState,
    reducers:{
       addBasket(state, action){
         state.market.push(state.data.filter((item) => item.imgSrc === action.payload) ) 

        
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

export const { addBasket } = MarketSlice.actions

export default MarketSlice.reducer