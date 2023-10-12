
import { useState, useEffect } from "react"
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
    const [dataChange, setDataChange] = useState(true)
    const navigate=useNavigate()

const dispatch= useDispatch()
const usr=useSelector((state)=>state.user)

    const handleChange=(e)=>{    
        setFormData({...formData, [e.target.name]:e.target.value})   
    }
   

    const handleSubmit =(e)=>{
        e.preventDefault()  
      // dispatch(addUser(formData))
 fetch('/api/User/Create', 
               {
                method: 'POST',
                body:JSON.stringify(formData),
                headers: {
                  'Content-Type': 'application/json',
                }}).then(res=>{})     
            setDataChange(dataChange?false:true) 
    }
console.log("dsfd")
   
    const fetchData =async ()=>{
        let data = await axios.get("/api/User/GU")
        let res = await JSON.parse(data.data)
       console.log(res)      
      }
      
      useEffect(()=>{
        console.log(dataChange)
      fetchData();     
      },[dataChange])

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
        <form action="" name="register" className="register_form" onSubmit={(event)=>handleSubmit(event)} >
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