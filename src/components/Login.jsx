
import { useState , } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { userStatus ,userDetails} from "../reduxtk/slices/userSlice"
import { useSelector } from "react-redux"
import './css/login.css'
import { faEyeSlash,faEye} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Login=()=>{
    const [formData, setFormData] = useState({email:"",password:""})
 
const navigate= useNavigate()
const dispatch= useDispatch()
const usr=useSelector((state)=>state.user)
console.log(usr)
    const handleChange=(e)=>{
       // console.log(e.target.value)
        setFormData({...formData, [e.target.name]:e.target.value})
       
    }
    
    const handleSubmit = async (e)=>{
        e.preventDefault()
       let f=0;
         let res=await axios.get('http://localhost:3000/user')
           
           let usr=res.data
           for(let i=0; i<usr.length; i++){
            if(usr[i].password==formData.password && usr[i].email==formData.email){
                console.log('loggedin')
                f=1;       
                dispatch(userStatus(true))  
                dispatch(userDetails(usr[i]))     
                navigate('/')
            }
           }
           if(f!=1){
            alert('wrong credentials')
           }
          
    }
    const handleEye =(v)=>{
        if(v==1){
          
            document.register.password.type='text'
            document.getElementById('eye').style.display='none'
        document.getElementById('eye2').style.display='inline-block'
        }
        else{
            
            document.register.password.type='password'
                document.getElementById('eye').style.display='inline-block'
            document.getElementById('eye2').style.display='none'
            
        }

    }
  
   
    // <i class="fa-regular fa-eye-slash"></i>
    return <div>
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png" alt="" height='70px' width='100px' className='icon_img' />
<div className="loginDiv">
        <h1 className='h1Login'>Sign in</h1>
        <h5 className="h5Login">enter name and email</h5>
        <form action="" name="register" onSubmit={()=>handleSubmit(event)} className="login_form">
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email"/><br /><br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password"/> <br />
        <FontAwesomeIcon icon={faEyeSlash} id='eye' onClick={()=>handleEye(1)} />
        <FontAwesomeIcon icon={faEye} id='eye2' onClick={()=>handleEye(2)}/>
        <br />
       
        <input type="submit" />
      
        <div>By continuing, you agree to Demo's <a href="#">Conditions of Use</a>  and <a href="">Privacy Notice.</a> </div>
         <a href="#">Need Help?</a>
        </form>
    </div>

     <hr className="hrLogin" />
    </div>

    
}