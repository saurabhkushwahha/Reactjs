import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication=true}){
     const navigate=  useNavigate()
     const [loader,setLoader]=useState(true)
     const authService= useSelector((state)=>state.auth.status)
     useEffect( ()=>{
        /*
           if(authService == true) 
           {
             navigate("/")
           }
             else if(!authServie==true)
             {
               navigate("/login")
             }
        
        */
         if(authentication && authService !== authentication)
         {
            navigate("/login")
         }
         else if(!authentication && authService !== authentication)
         {
            navigate("/")
         }
         setLoader(false)
     },[authService,navigate,authentication])
    return loader ? <h1>Loding....</h1> : <>{children}</>
} 