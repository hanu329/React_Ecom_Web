import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
export const UserProfile =()=>{
    let sts=useSelector((state)=>state.user.status)
   
   return <div>
    {sts==false?<div><Navigate to={'/'} /></div> :'this is profile page'}
    </div>
}