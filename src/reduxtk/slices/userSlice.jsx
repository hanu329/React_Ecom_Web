

import { createSlice } from "@reduxjs/toolkit";
const initialState={
    status:localStorage.getItem('status')||false,
    user:[]
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
         addUser: (state, action)=>{
             state.user=[...state.user, action.payload]
         },
         userStatus:(state, action)=>{
          state.status=action.payload;
          localStorage.setItem('status',state.status)
         }
    }
})

export const {addUser, userStatus} =userSlice.actions
export default userSlice.reducer

export const fetchUser=()=>{
    return async (dispatch, getState)=>{
        console.log(getState().user)
    }
}