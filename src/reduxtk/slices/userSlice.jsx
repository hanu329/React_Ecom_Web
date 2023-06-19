

import { createSlice } from "@reduxjs/toolkit";
const initialState={
    status:localStorage.getItem('status')||false,
    user:[],
    userDetail:JSON.parse(localStorage.getItem('user'))||{}
}
const userSlice=createSlice({
    name:'usr',
    initialState,
    reducers:{
         addUser: (state, action)=>{
             state.user=[...state.user, action.payload]
         },
         userDetails: (state, action)=>{
            state.userDetail= action.payload;
            localStorage.setItem('user',JSON.stringify(state.userDetail))
        },
         userStatus:(state, action)=>{
          state.status=action.payload;
          localStorage.setItem('status',state.status)
         }
    }
})

export const {addUser, userStatus,userDetails} =userSlice.actions
export default userSlice.reducer

export const fetchUser=()=>{
    return async (dispatch, getState)=>{
        console.log(getState().user)
    }
}