import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import {useEffect} from 'react'

let c={}
for(let i=1; i<=20; i++){
   c[i]=0;
}
const initialState={
    prod:[], 
    filteredProd:[],
    cart:JSON.parse(localStorage.getItem('cart'))||c,
    productDetails:JSON.parse(localStorage.getItem('prodDetail'))||{}, 
    status:false
}

const productSlice= createSlice({
    name:'product',
    initialState,
    reducers:{
        getProduct(state, action){
            state.prod=action.payload
        }, 
       filterProduct(state, action){
            state.filteredProd=action.payload
        },     

        addCart(state, action){         
          state.cart={...state.cart,[action.payload]:state.cart[action.payload]+1};
         localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        removeCart(state, action){
            state.cart={...state.cart,[action.payload]:state.cart[action.payload]-1};
            localStorage.setItem("cart", JSON.stringify(state.cart))
          },
        productDetails(state,action){
           state.productDetails=action.payload;
           localStorage.setItem("prodDetail", JSON.stringify(state.productDetails))
        }
    },
    // extraReducers:(builder)=>{
    //     builder.addCase(fetchProduct.fulfilled,(state,action)=>{
    //         state.prod=action.payload;
    //         state.status=true;
    //     })
    // .addCase(fetchProduct.pending,(state,action)=>{
    //     state.status="pending"
    // })
    // .addCase(fetchProduct.rejected,(state,action)=>{
    //     state.status="error"
    // })
    // }
})
export const {getProduct,addCart,productDetails,removeCart,sortedProd,filterProduct} = productSlice.actions
export default productSlice.reducer

// export const fetchProduct =createAsyncThunk('product/getProduct',async ()=>{
//                 const res=await fetch('https://fakestoreapi.com/products')
//               const ans =await res.json()
//               return ans;
      
// })

export const fetchProduct =()=>{
    return async (dispatch, getState)=>{   
            const res=await fetch('https://fakestoreapi.com/products')
              const ans =await res.json()            
              dispatch(getProduct(ans)) 
         
    }
}

