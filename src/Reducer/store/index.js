import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../reducer/DataSlice";
import MarketReducer from "../reducer/MarketSlice";
const store = configureStore({
    reducer:{
     data: DataReducer,
     market: MarketReducer       
    }
})


export default store
