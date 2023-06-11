import { useSelector, useDispatch } from "react-redux"
import { addCart } from '../reduxtk/slices/productSlice'
import './css/prodDetail.css'

export const ProductDetails =()=>{
    const prod=useSelector((state)=>state.product.productDetails)
    const dispatch = useDispatch();
    const addToCart =(i)=>{  
        dispatch(addCart(i))
      }
      //console.log(prod)
    return <div className="mainprodDetail">
      <div className="advt"></div>
<div className="prodDetail"> 
     
      <div><img src={prod.image} alt="" height='100px' width='100px' /></div>
      <div>
      <div>{prod.title}</div>
      <div>  <button onClick={()=>addToCart(prod.id)}>addtoCart</button></div> 
      </div>
      
    
    </div>

    </div>
    
    
}