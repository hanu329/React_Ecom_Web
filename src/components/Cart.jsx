import { useSelector, useDispatch } from "react-redux"
import { removeCart } from "../reduxtk/slices/productSlice"
import { useNavigate, Navigate } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';
import './css/cart.css'

export const Cart =()=>{
    const cart=useSelector((state)=>state.product.cart)
    const prod=useSelector((state)=>state.product.prod)
    let sts=useSelector((state)=>state.user.status)
    const dispatch=useDispatch();


    // if(!sts){
    //   alert('you need to log in first!!')
    //   navigate('/')
    // }
 

  const removefromCart =(i)=>{
    dispatch(removeCart(i))
  }

  let totalPrice=0;
  let totalItem=0;
  //console.log(prod, cart)
  
       let cartitem= prod.map((el)=>{
        for(let i in cart){
         if(cart[i]>0 && el.id==i){
          totalPrice+=el.price;
          totalItem+=cart[i]
             return <div key={el.id} className="cartInnerDiv">
                <div><img src={el.image} alt="" height='100px' width='100px' /></div>
                <div>
                <div>{el.title}</div>  
              <div>price: {el.price} $</div> 
              <div>Qty: {cart[el.id]} </div> 
              <button onClick={()=>removefromCart(el.id)}>remove</button>

                </div>
             
                </div>
         }
        }
    })
    
    return <div className="cartDiv">
{sts==false?<div><Navigate to={'/'} /></div> :<div>
Total Price: {totalPrice.toFixed(0)} $ <br />

   <div className="cartParentDiv"> <div className="cartCard">{cartitem}</div>  <div className="advert">sfds</div> </div>  </div> }


    </div>
}