import {useDispatch,useSelector} from 'react-redux'

import { productDetails } from '../reduxtk/slices/productSlice'
import { Link } from 'react-router-dom'
import { filterProduct,getProduct,addCart } from '../reduxtk/slices/productSlice'
import './css/product.css'


export const Product =()=>{

    let prod=useSelector((state)=>state.product.prod)
    let filterProd=useSelector((state)=>state.product.filteredProd)

    const dispatch=useDispatch();


  const productDetail =(item)=>{
    dispatch(productDetails(item))
  }
  const addToCart =(i)=>{  
    dispatch(addCart(i))
  }
 
  
  const handleSort =()=>{
   let value=document.querySelector('#sort').value;
    if(filterProd.length>0){
      if(value=='lth'){
        prod= prod.slice().sort((a,b)=>{
           return a.price-b.price
         })
        }else {
         prod= prod.slice().sort((a,b)=>{
           return b.price-a.price
         })
        }
          
        dispatch(filterProduct(prod))
    }
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


    return <div className='prodDiv'>
      <div>
      <select name="sort" id="sort" onChange={()=>handleSort()} defaultValue={'default'}>
        <option value={'default'} disabled >sort</option>
        <option value="lth">lth</option>
        <option value="htl">htl</option>
      </select>
      <select name="filter" id="filter" onChange={()=>handlefilter()} defaultValue={'default'}>
        <option value={'default'} disabled>filter</option>
        <option value="four">four and above</option>
        <option value="three">three and above</option>
        <option value="all">all</option>
      </select> 

      </div>
    {filterProd.length>0?<div className='filterDiv'>
      {filterProd.map((el)=>(
     <div key={el.id} >  
    <Link to={'/productDetails'} style={{textDecoration:"none"}}>
    <div onClick={()=>productDetail(el)} className='imgTitle'> 
     <img src={el.image} alt="" height='100px' width='100px' />
     <div className='priceTitle'>
     <div className='title'>{el.title}</div> 
       <span >price: {el.price} $</span> <span className='rate'>{el.rating.rate} *</span>

     </div>
      
       </div>
        </Link> 
        <div>  <button onClick={()=>addToCart(el.id)} className='priceBtn'>add to Cart</button></div>
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
       <span >price: {el.price} $</span> <span className='rate'>{el.rating.rate} *</span>
     </div>
      
       </div>
        </Link> 
        <div>  <button onClick={()=>addToCart(el.id)} className='priceBtn'>add to Cart</button></div>
     </div>
    ))}</div>}
      
    </div>
}