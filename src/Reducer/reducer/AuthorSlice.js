import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : {},
    users:  JSON.parse(localStorage.getItem("users")) || [],
    activeUser: JSON.parse(localStorage.getItem("isActive")) || false ,
    userProfile: JSON.parse(localStorage.getItem("userProfile")),
    userAllInfo: []
}

const UsersSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
       addUser(state,action) {
        state.user = action.payload      
        const filtered = state.users.filter((item)=> item.username  === state.user.username  && item.password === state.user.password)
       if(filtered.length !== 0 ){
         state.activeUser= true  
         localStorage.setItem("userProfile",JSON.stringify(state.user))
       }
      
       localStorage.setItem("isActive" , JSON.stringify(state.activeUser))
    },
    userCardInfo ( state, action){
        state.userAllInfo.push(state.userProfile)
        state.userAllInfo =[...state.userAllInfo, action.payload]  
         
     }
  
  
    }
})

export const addAllInfoToLocalStorage = (userAllInfo) =>{
    const allInfo = JSON.parse(localStorage.getItem("allInfo")) || []
    const updateInfo = [...allInfo, userAllInfo]
    localStorage.setItem("allInfo", JSON.stringify(updateInfo))
    
}

export const addUserToLocalStorage = (users) =>{
    const existingUser = JSON.parse(localStorage.getItem("users")) || [ ]
    const updateUser = [...existingUser , users]
    localStorage.setItem("users", JSON.stringify(updateUser))
}
export const getUser = () =>{
    return JSON.parse(localStorage.getItem("users") || [ ])
}

 
export const { addUser ,userCardInfo} = UsersSlice.actions

export default UsersSlice.reducer