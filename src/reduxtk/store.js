 import productSlice from './slices/productSlice'
import userSlice from './slices/userSlice'

import {configureStore} from '@reduxjs/toolkit'


export const store = configureStore({
    reducer:{
       product:productSlice,
       user:userSlice
    },
   
})

