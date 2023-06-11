
import { useState , } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { userStatus } from "../reduxtk/slices/userSlice"
import { useSelector } from "react-redux"
import './css/login.css'

export const Login=()=>{
    const [formData, setFormData] = useState({username:"", email:""})
 
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
            if(usr[i].username==formData.username && usr[i].email==formData.email){
                console.log('loggedin')
                f=1;       
                dispatch(userStatus(true))      
                navigate('/')
            }
           }
           if(f!=1){
            alert('wrong credentials')
           }
          
    }
    return <div>
              <img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png" alt="" height='70px' width='100px' className='icon_img' />
<div className="loginDiv">
        <h1 className='h1Login'>Sign in</h1>
        <h5 className="h5Login">enter name and email</h5>
        <form action="" name="register" onSubmit={()=>handleSubmit(event)} className="login_form">
        <input type="text" name="username" value={formData.username} onChange={handleChange}/><br /><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange}/><br /><br />
        <input type="submit" />
        <div>By continuing, you agree to Demo's <a href="#">Conditions of Use</a>  and <a href="">Privacy Notice.</a> </div>
         <a href="#">Need Help?</a>
        </form>
    </div>

     <hr className="hrLogin" />
    </div>

    
}