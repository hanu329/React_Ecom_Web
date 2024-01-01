import { useSelector, useDispatch } from "react-redux"
import { removeCart ,addCart} from "../reduxtk/slices/productSlice"
import { useNavigate, Navigate } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';
import './css/cart.css'
import {faStar, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {loadStripe} from '@stripe/stripe-js';

export const Cart =()=>{
    const cart=useSelector((state)=>state.product.cart)
    const prod=useSelector((state)=>state.product.prod)
    let sts=useSelector((state)=>state.user.status)
    const dispatch=useDispatch();


    // if(!sts){
    //   alert('you need to log in first!!')
    //   navigate('/')
    // }
 
    const makePayment= async ()=>{
    
  
const stripe = await loadStripe('pk_test_51OTQ7VSJvPvbVDI9L26RBez5dHEDVaDj4aQRuusXPy3fKC8AcjUB7DdsPYa4rjBb47y669i221p7ROFoSDDQLBa500puY8hc6v');


    let arr=[]

    for(let i in cart){
      let s={}
      if(cart[i]>0){
    for(let j of prod){
      if(j.id==i){
s[j.id]=cart[i]
  arr.push(j)
      }
    }
      }
    }
   
    let newArray=[]
    for(let i in cart){
      if(cart[i]>0 ){
        console.log(i)
          for(let j=0; j<arr.length;j++){
            if(i==arr[j].id){
              newArray=[...newArray,{...arr[j],"cartQuant":cart[i]}]
            }
           
          }
      }
      }
   
   
  console.log(newArray)
   
    const body={
      product:newArray,
    
    }
    const headers={
      "Content-Type":"application/json"
    }
    const res= await fetch("http://localhost:3001/pay",{
      method:"POST",
     headers,
     body:JSON.stringify(body)
    })
    const session = res.json()
    const result= stripe.redirectToCheckout({
      sessionId:session.id,
    })
    if(result.error){
      console.log(result.error)
    }
    }

    const addToCart =(i)=>{  
      dispatch(addCart(i))
    }

  const removefromCart =(i)=>{
    dispatch(removeCart(i))
  }

  let totalPrice=0;
  let totalItem=0;
  //console.log(prod, cart)
  
       let cartitem= prod.map((el)=>{
        for(let i in cart){
         if(cart[i]>0 && el.id==i){
          totalPrice+=cart[i]*el.price;
          totalItem+=cart[i]
             return <div key={el.id} className="cartInnerDiv">
                <div><img src={el.image} alt="" height='150px' width='150px' /></div>
                <div className="cartTitlePrice">
                <div className="cartTitle">{el.title}</div>  
              <div className="cartPrice">price: {el.price} $</div> 
              <div >rating: {el.rating.rate} <FontAwesomeIcon icon={faStar} /> </div> 
              <button onClick={()=>addToCart(el.id)} className='addCartBtn'>add to Cart({cart[el.id]})</button>
              <button onClick={()=>removefromCart(el.id)} className="cartRemoveBtn"><FontAwesomeIcon icon={faTrash} /></button>
              
                </div>
             
                </div>
         }
        }
    })
    
    return <div className="cartDiv">
{sts==false?<div><Navigate to={'/'} /></div> :<div>
 <br />

   <div className="cartParentDiv"> 
   <div className="cartCard">{cartitem}</div> 
   
    <div className="advert">Total Price: {totalPrice.toFixed(0)} $
    <button onClick={makePayment} className='addCartBtn'  > Buy Now</button>
     
    </div> 
    
          
    </div>  </div> }


    </div>
}