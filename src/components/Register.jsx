
import { useState } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addUser } from "../reduxtk/slices/userSlice"
import { useSelector } from "react-redux"
import './css/register.css'
import { useNavigate } from "react-router-dom"
import { faEyeSlash,faEye} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Register=()=>{
    const [formData, setFormData] = useState({username:"", email:"", password:''})
 
const dispatch= useDispatch()
const usr=useSelector((state)=>state.user)
    const handleChange=(e)=>{
       // console.log(e.target.value)
        setFormData({...formData, [e.target.name]:e.target.value})
      
    }
    const navigate=useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
      // console.log('asdf')
       dispatch(addUser(formData))
           axios.post('http://localhost:3000/user',formData).then((res)=>{
            //console.log(res)
            setFormData({username:"", email:"",  password:''})
           
            alert('success!')
                    navigate('/login')
           })
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

    return <div>
         <img src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png" alt="" height='70px' width='100px' className='icon_img' />
 <div className="registerDiv">
 <h1 className='h1Register'>Register</h1>
        <h5 className="h5Register">enter name and email</h5>
        <form action="" name="register" className="register_form" onSubmit={()=>handleSubmit(event)} >
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="username"/><br /><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange}  placeholder="email"/><br /><br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password"/><br />
        <FontAwesomeIcon icon={faEyeSlash} id='eye' onClick={()=>handleEye(1)} />
        <FontAwesomeIcon icon={faEye} id='eye2' onClick={()=>handleEye(2)}/>
        <br />
        <input type="submit" />
        <div>By continuing, you agree to Demo's <a href="#">Conditions of Use</a>  and <a href="">Privacy Notice.</a> </div>
         <a href="#">Need Help?</a>
        </form>
    </div>
    <hr className="hrRegister" />
    </div>
    
   
}