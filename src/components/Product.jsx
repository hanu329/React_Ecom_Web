import {useDispatch,useSelector} from 'react-redux'

import { productDetails } from '../reduxtk/slices/productSlice'
import { Link } from 'react-router-dom'
import { filterProduct,getProduct,addCart, removeCart } from '../reduxtk/slices/productSlice'
import './css/product.css'
import { faStar, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState, useEffect ,useContext} from 'react'
import { DataContext } from '../context/DataContext'

export const Product =()=>{
      const [flag, setFlag]=useState(0)
    let prod=useSelector((state)=>state.product.prod)
    let cart=useSelector((state)=>state.product.cart)
    let usr=useSelector((state)=>state.user.userDetail)
    let filterProd=useSelector((state)=>state.product.filteredProd)

    const {f,handleF}=useContext(DataContext)
  
    const dispatch=useDispatch();
useEffect(()=>{
handleF(0)
  return ()=>{
    handleF(1)
   }
},[])
  const productDetail =(item)=>{
    dispatch(productDetails(item))
  }
  const addToCart =(i)=>{ 
    dispatch(addCart(i))
  }

  const removefromCart =(i)=>{
    dispatch(removeCart(i))
  }
 
  
  const handleSort =()=>{
   let value=document.querySelector('#sort').value;
    if(filterProd.length>0){
      if(value=='lth'){
        filterProd= filterProd.slice().sort((a,b)=>{
           return a.price-b.price
         })
        }else {
          filterProd= filterProd.slice().sort((a,b)=>{
           return b.price-a.price
         })
        }
          
        dispatch(filterProduct(filterProd))
    }
    else{
      if(value=='lth'){
        prod= prod.slice().sort((a,b)=>{
           return a.price-b.price
         })
        }else {
         prod= prod.slice().sort((a,b)=>{
           return b.price-a.price
         })
        }
          
        dispatch(getProduct(prod))
    }
  
    
  }

const handlefilter =()=>{
    let value=document.querySelector('#filter').value;
  

    let ans=prod.slice().filter((el)=>{
      if(value=='four'){
        return el.rating.rate>=4
      }else if(value=='three'){
        return el.rating.rate>=3
      }else{
        return el
      }
     
    })     
    
  dispatch(filterProduct(ans))  
   }
let adimg=['https://st2.depositphotos.com/2219414/9517/v/600/depositphotos_95177406-stock-illustration-banner-advertising-for-marketing.jpg',
'https://www.shutterstock.com/image-vector/3d-vector-conceptual-illustration-mobile-260nw-1828126133.jpg',
'https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg']

let i=1;

// setInterval(()=>{
//   console.log(i)
//   document.querySelector('#adImg').src=adimg[i]
//   if(i==2){
//     i=-1
//   } 
// i++
// },5000)
    

    return <div className='prodDiv'>
    
     
    
      <div className='selectDiv'>
      <select name="sort" id="sort" onChange={()=>handleSort()} defaultValue={'default'}>
        <option value={'default'} disabled >sort</option>
        <option value="lth">price: low to high</option>
        <option value="htl">Price: high to low</option>
      </select>
      <select name="filter" id="filter" onChange={()=>handlefilter()} defaultValue={'default'}>
        <option value={'default'} disabled>filter</option>
        <option value="four">four and above</option>
        <option value="three">three and above</option>
        <option value="all">all</option>
      </select> 
          <div className="ads">
            <img src='https://st2.depositphotos.com/2219414/9517/v/600/depositphotos_95177406-stock-illustration-banner-advertising-for-marketing.jpg' id='adImg' alt="" height='60%' width='100%' />
          </div>
      </div>
    {filterProd.length>0?<div className='filterDiv'>
      {filterProd.map((el)=>(
     <div key={el.id} >  
    <Link to={'/productDetails'} style={{textDecoration:"none"}}>
    <div onClick={()=>productDetail(el)} className='imgTitle'> 
     <img src={el.image} alt="" height='100px' width='100px' />
     <div className='priceTitle'>
     <div className='title'>{el.title}</div> 
       <span >price: {el.price} $</span> <span className='rate'>{el.rating.rate} <FontAwesomeIcon icon={faStar} /></span>

     </div>
      
       </div>
        </Link> 
        {cart[el.id]>0? <div> 
         
         <button onClick={()=>addToCart(el.id)} className='priceBtn'>add to Cart({cart[el.id]})</button>
         <button onClick={()=>removefromCart(el.id)} className="cartRemoveBtn"><FontAwesomeIcon icon={faTrash} /></button>
         </div>: <div> 
         
         <button onClick={()=>addToCart(el.id)} className='priceBtn'>add to Cart</button>
         
         </div>}      
     </div>
    ))}
    </div>:
    
    <div className='normDiv'> {prod.map((el)=>(
     <div key={el.id} >  
    <Link to={'/productDetails'} style={{textDecoration:"none"}}>
    <div onClick={()=>productDetail(el)} > 
     <img src={el.image} alt="" height='100px' width='100px' className='prodImg' />
     <div className='priceTitle'>
     <div className='title'>{el.title}</div> 
       <span >price: {el.price} $</span> <span className='rate'>{el.rating.rate} <FontAwesomeIcon icon={faStar} /></span>
     </div>
      
       </div>
        </Link> 
        {cart[el.id]>0? <div> 
         
         <button onClick={()=>addToCart(el.id)} className='priceBtn'>add to Cart({cart[el.id]})</button>
         <button onClick={()=>removefromCart(el.id)} className="cartRemoveBtn"><FontAwesomeIcon icon={faTrash} /></button>
         
         </div>: <div> 
         
         <button onClick={()=>addToCart(el.id)} className='priceBtn'>add to Cart</button>
         
         </div>}      
     </div>
    ))}</div>}
      
    </div>
}



