import { createSlice, nanoid} from "@reduxjs/toolkit";
import { Data } from "../../Assests/data";
const  initialState = {
    data : Data,
    filter:[]
}


const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers:{
        addData(state,action){
            state.filter.push(action.payload)
        }
   
    }

})



export const {addData} = DataSlice.actions

export default DataSlice.reducer