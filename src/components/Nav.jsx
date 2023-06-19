
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userStatus } from "../reduxtk/slices/userSlice"
import { useSelector } from "react-redux"
import { faCartShopping ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import './css/nav.css'
 
export const Nav=()=>{
 const dispatch = useDispatch()
 const navigate=useNavigate()
 let status;
 let sts=useSelector((state)=>state.user.status)
 let cart=useSelector((state)=>state.product.cart)
 let user=useSelector((state)=>state.user.userDetail)

   //status=JSON.parse(localStorage.getItem('status'))

  const logOut =()=>{
      console.log(233)
       dispatch(userStatus(false))
  }
  let c=0;
  for(let i in cart){
    if(cart[i]>0){
      c+=cart[i]
    }
  }
    return <div className="navDiv">
       <div>
       <img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png" alt="" height='50px' width='70px' className='icon_nav' />
       </div>
       <div>
        <input type="text" /><FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
       </div>
       <div>

        
       <Link to='/'  style={{margin:"10px",textDecoration:"none"}}>Products</Link>
        <Link to='/product/cart' style={{margin:"10px",textDecoration:"none"}} onClick={()=>{
         // console.log(sts)
          if(sts==false){
            console.log(1334)
            alert("didn't logged in")           
          }
        }}><FontAwesomeIcon icon={faCartShopping} />
          <span style={{paddingLeft:"5px"}}>{c}</span>
        
        </Link>
        {sts?"":<span> <Link to='/register'  style={{margin:"10px",textDecoration:"none"}}>Register</Link>
        <Link to='/login' style={{margin:"10px",textDecoration:"none"}} >Log in</Link></span>}
  
  
  {sts?<span>
          <Link to='/'  style={{margin:"10px",textDecoration:"none"}} onClick={()=>logOut()}>Log out</Link>
          {/* <select name="" id="" onChange={location=this.value}>
            <option value="">{user.username}</option>
            <option value="">
              Profile
            </option>
            <option value="/">
              <span onClick={()=>logOut()}>log out</span>
              </option>  */}
            {/* <Link to='/'  style={{margin:"10px",textDecoration:"none"}} onClick={()=>logOut()}>
         
            Log out </Link>*/}
          {/* </select> */}


    
     
     </span>:""}
       
        
       </div>


    </div>
}