import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {fetchProduct} from './reduxtk/slices/productSlice'
import { fetchUser } from './reduxtk/slices/userSlice'
import {Routes, Route, Link} from 'react-router-dom'
import {Nav} from './components/Nav' 
import {Footer} from './components/Footer' 
import { Product } from './components/Product'
import { ProductDetails } from './components/ProductDetails'
import { Cart } from './components/Cart'
import { Login } from './components/Login'
import { Register } from './components/Register'
function App() {

const dispatch=useDispatch()

useEffect(()=>{
//    const fetchProduct =async ()=>{
//     const res=await fetch('https://fakestoreapi.com/products')
//       const ans =await res.json()
//       dispatch(getProduct(ans))
//    }
// fetchProduct()
//dispatch(fetchUser())

dispatch(fetchProduct())
},[])

//console.log(prod.productDetails)
  return (
    <>
    <Nav />
    <Routes>  
    <Route path='/' element={<Product />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
    <Route path='/product/cart' element={<Cart />}></Route>
    <Route path='/productDetails' element={<ProductDetails />}></Route>
    </Routes>
  <Footer />
   
    </>
  )
}

export default App
