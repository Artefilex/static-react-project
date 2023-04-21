import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {},
    users:  JSON.parse(localStorage.getItem("users"))
}

const UsersSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
       addUser(state,action) {
        state.user = action.payload
      
       },
      
    }
})
export const addUserToLocalStorage = (users) =>{
    const existingUser = JSON.parse(localStorage.getItem("users")) || [ ]
    const updateUser = [...existingUser , users]
    localStorage.setItem("users", JSON.stringify(updateUser))
}
export const getUser = () =>{
    return JSON.parse(localStorage.getItem("users") || [ ])
}
 
export const { addUser} = UsersSlice.actions

export default UsersSlice.reducer