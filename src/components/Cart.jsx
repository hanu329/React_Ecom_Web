import { useSelector, useDispatch } from "react-redux"
import { removeCart } from "../reduxtk/slices/productSlice"
import { useNavigate, Navigate } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';

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
          totalItem+=car[i]
             return <div key={el.id}>
                <div><img src={el.image} alt="" height='100px' width='100px' /></div>
              <div>{el.title}</div>  
              <div>price: {el.price} $</div> 
              <button onClick={()=>removefromCart(el.id)}>remove <i className="fa-duotone fa-trash"></i></button>
                </div>
         }
        }
    })
    
    return <div>
{sts==false?<div><Navigate to={'/'} /></div> :<div>
Total Price: {totalPrice.toFixed(0)} $ <br />
Total Items: {totalItem} <br /> <br />
  {cartitem}</div> }

{console.log(sts)}

    </div>
}