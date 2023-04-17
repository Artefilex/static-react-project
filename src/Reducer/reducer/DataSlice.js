import { createSlice} from "@reduxjs/toolkit";
import { Data } from "../../Assests/data";
const  initialState = {
    data : Data,
    filter:[],
    filtered:[],
    basket:[],

}


const DataSlice = createSlice({
    name: "data",
    initialState,
    reducers:{
        addData(state,action){
            state.filter= action.payload
            state.filtered = state.data.filter((elem) => (
                state.filter.find((item) => (
                    item.range >= elem.fees && 
                    item.title === elem.destTitle.toLocaleLowerCase("TR") &&
                    (item.date !==  elem.date || item.date === elem.date) 
                ))
            ))
             
        },
        clearFilter(state){
            state.filtered= []
            state.filter = []
        }
        

    
    }

})



export const {addData ,clearFilter} = DataSlice.actions

export default DataSlice.reducer