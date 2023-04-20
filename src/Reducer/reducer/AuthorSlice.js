import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {
     userName: "baris",
     passworld: "tncdmr"
    },
    users: []
}

const UsersSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
       addUser(state,action) {
        state.user = action.payload
        if(state.user !== null || state.user !== undefined){
            state.users.push(state.user)
        }
       },
      
    }
})

export const { addUser} = UsersSlice.actions

export default UsersSlice.reducer