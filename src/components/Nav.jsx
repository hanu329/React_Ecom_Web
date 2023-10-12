
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { userStatus } from "../reduxtk/slices/userSlice"
import { useSelector } from "react-redux"
import { productDetails } from "../reduxtk/slices/productSlice"
import { faCartShopping ,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import './css/nav.css'
 import { useState, useEffect } from "react"
 
export const Nav=()=>{
  const [title, setTitle]= useState([])
  const [inputText, setInputText]= useState("")
  const [inputFlag,setInputFlag]=useState(true)
  const [f2, setF2]=useState(1)

 const dispatch = useDispatch()
 const navigate=useNavigate()

    let prod=useSelector((state)=>state.product.prod)
 let sts=useSelector((state)=>state.user.status)
 let cart=useSelector((state)=>state.product.cart)
 let user=useSelector((state)=>state.user.userDetail)

 const getFilterData=()=>{
  console.log(inputText)
   let data= prod.filter((el)=>{

     return el.title.toLowerCase().includes(inputText)
   })
   
   setTitle(data)

 }

  const handleInput=(e)=>{
   //setInputFlag(inputFlag?false:true)
      setInputText(e.target.value)
  }
  useEffect(()=>{
    getFilterData()
    setF2(0)
  },[inputText])

  const handleNavClick=(i)=>{

   let data= prod.filter((el)=>el.id==i)
   dispatch(productDetails(data[0]))
   setF2(2)
   setInputText('') 
   navigate('/productDetails')
  }
 //new comment to check in new branch
console.log(title)
  let elem=title.map((el)=>{{
    return <div key={el.id} onClick={()=>handleNavClick(el.id)}>{el.title}</div>
  }})
  
  const logOut =()=>{
     
       dispatch(userStatus(false))
  }

const handleChange=()=>{
   let el=document.querySelector('select')
  
   if(el.value=='logout'){
    logOut()

   }else if(el.value=='prof'){
   
    navigate('/userprofile')
   }
  
}

  let c=0;
  for(let i in cart){
    if(cart[i]>0){
      c+=cart[i]
    }
  }
    return <div >
      {/* className="navDiv" */}
       {/* <div>
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
          
            alert("didn't logged in")           
          }
        }}><FontAwesomeIcon icon={faCartShopping} />
          <span style={{paddingLeft:"5px"}}>{c}</span>
        
        </Link>
        {sts?"":<span> <Link to='/register'  style={{margin:"10px",textDecoration:"none"}}>Register</Link>
        <Link to='/login' style={{margin:"10px",textDecoration:"none"}} >Log in</Link></span>}
  
  
  {sts?<span>
          {/* <Link to='/'  style={{margin:"10px",textDecoration:"none"}} onClick={()=>logOut()}>Log out</Link> */}
          {/* <select name="" id="" onChange={handleChange}  style={{margin:"10px",border:'none', outline:'none'}} className="selectNav">
            <option value="" >{user.username}</option>
            <option value="prof">
              Profile
            </option>
            <option value="logout">log out */}
              {/* <span onClick={()=>logOut()}>log out</span> */}
              {/* </option>  */}
            {/* <Link to='/'  style={{margin:"10px",textDecoration:"none"}} onClick={()=>logOut()}>
         
            Log out </Link> */}
          {/* </select> */}
     {/* </span>:""} */}
       
        
       {/* </div> */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png" alt="" height='50px' width='70px' className='icon_nav' />
     </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item active">
      <input type="text" value={inputText}  onChange={(e)=>{ handleInput(e) }} /><FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/> 
      </li>
      <li className="nav-item active">
      <Link to='/'  style={{margin:"10px",textDecoration:"none"}}>Products</Link>
        <Link to='/product/cart' style={{margin:"10px",textDecoration:"none"}} onClick={()=>{
         // console.log(sts)
          if(sts==false){
          
            alert("didn't logged in")           
          }
        }}><FontAwesomeIcon icon={faCartShopping} />
          <span style={{paddingLeft:"5px"}}>{c}</span>
        
        </Link> </li>
      {/* <li className="nav-item"> 
      {sts?"":""}
  
      </li> */}
      {/* <Link to='/'  style={{margin:"10px",textDecoration:"none"}} onClick={()=>logOut()}>Log out</Link> */}
      {/* <li className="nav-item">
      {sts?<span> */}
        {/* className="selectNav" */}
            {/* <select name="" id="" onChange={handleChange}  style={{marginBottom:"10px",padding:"5px", border:'none', outline:'none', color:"green", backgroundColor:"#fdf6e3"}} >
            <option value="" >{user.username}</option>
            <option value="prof">
              Profile
            </option>        
          </select> 
           </span>:""}
      </li> */}

      <li className="nav-item" > 
        {sts? <div style={{position:"relative",left:"650px",background:"red"}} className="btn-group bg-info" role="group" aria-label="Button group with nested dropdown" bis_skin_checked="1">
  <button type="button" className="btn btn-success">{user.username}</button>
  <div className="btn-group" role="group" bis_skin_checked="1">
    <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" bis_skin_checked="1">
      <a className="dropdown-item" href="#">{user.username}</a>
       <Link to={"/userprofile"} className="dropdown-item">Profile</Link>   
       <Link to={"/"}  onClick={()=>logOut()} className="dropdown-item">LogOut</Link> 
    </div>
  </div>
</div>:<span> <Link to='/register'  style={{margin:"10px",textDecoration:"none"}}>Register</Link>
        <Link to='/login' style={{margin:"10px",textDecoration:"none"}} >Log in</Link></span>}
     
      </li>
    </ul>
   
   
  </div>
</nav>

    <div className="pos" >{elem.length>7 || f2==2?'':elem}</div> 
    </div>
}