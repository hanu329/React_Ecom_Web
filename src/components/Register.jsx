
import { useState } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addUser } from "../reduxtk/slices/userSlice"
import { useSelector } from "react-redux"
import './css/register.css'

export const Register=()=>{
    const [formData, setFormData] = useState({username:"", email:""})
 
const dispatch= useDispatch()
const usr=useSelector((state)=>state.user)
    const handleChange=(e)=>{
       // console.log(e.target.value)
        setFormData({...formData, [e.target.name]:e.target.value})
      
    }
    console.log(usr)
    const handleSubmit =(e)=>{
        e.preventDefault()
      // console.log('asdf')
       dispatch(addUser(formData))
           axios.post('http://localhost:3000/user',formData).then((res)=>{
            //console.log(res)
            setFormData({username:"", email:""})
           
            alert('success!')
           })
    }
    return <div>
         <img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png" alt="" height='70px' width='100px' className='icon_img' />
 <div className="registerDiv">
 <h1 className='h1Register'>Register</h1>
        <h5 className="h5Register">enter name and email</h5>
        <form action="" name="register" className="register_form" onSubmit={()=>handleSubmit(event)}>
        <input type="text" name="username" value={formData.username} onChange={handleChange}/><br /><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange}/><br /><br />
        <input type="submit" />
        <div>By continuing, you agree to Demo's <a href="#">Conditions of Use</a>  and <a href="">Privacy Notice.</a> </div>
         <a href="#">Need Help?</a>
        </form>
    </div>
    <hr className="hrRegister" />
    </div>
    
   
}