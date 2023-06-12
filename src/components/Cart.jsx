import { useSelector, useDispatch } from "react-redux"
import { removeCart ,addCart} from "../reduxtk/slices/productSlice"
import { useNavigate, Navigate } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';
import './css/cart.css'
import {faStar, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Cart =()=>{
    const cart=useSelector((state)=>state.product.cart)
    const prod=useSelector((state)=>state.product.prod)
    let sts=useSelector((state)=>state.user.status)
    const dispatch=useDispatch();


    // if(!sts){
    //   alert('you need to log in first!!')
    //   navigate('/')
    // }
 
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

   <div className="cartParentDiv"> <div className="cartCard">{cartitem}</div>  <div className="advert">Total Price: {totalPrice.toFixed(0)} $</div> </div>  </div> }


    </div>
}