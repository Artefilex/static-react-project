import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../reducer/DataSlice";
import MarketReducer from "../reducer/MarketSlice";
import UserReducer from "../reducer/AuthorSlice"
const store = configureStore({
    reducer:{
     data: DataReducer,
     market: MarketReducer,
     author: UserReducer       
    }
})


export default store
