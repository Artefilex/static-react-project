import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../reducer/DataSlice";
const store = configureStore({
    reducer:{
     data: DataReducer        
    }
})


export default store
