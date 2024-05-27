import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Login = () => {

  let [username,setUserName]=useState('')
  let [password,setPassword]=useState('')

  let handleSubmit=(e)=>{
    e.preventDefault()

    if(isValidate()){
      fetch('http://localhost:4000/users/'+username).then((res)=>{
        return  res.json();
      }).then((resp)=>{
         console.log(resp)
      }).catch((error)=>{
        alert('Login failed due to : '+error)
      })
      // alert('successful')
    }
   
  }

  let isValidate=()=>{
    let proceed=true;
    if(username===''|| username===null){
      proceed=false
      alert('Enter Name')
    }
    if(password===''|| password===null){
      proceed=false
      alert('Enter Password')
    }
    
    return proceed;
  }

  

  return (
    <div>
      <h1>Login</h1><br/><br/>

      <form action="" onSubmit={handleSubmit}>

        <input type="text" placeholder='Name' value={username} onChange={e=>setUserName(e.target.value)}/><br/><br/>
        <input type="password" placeholder='Password'  value={password} onChange={e=>setPassword(e.target.value)}/><br/><br/>
        <button type='submit'>submit</button>
      </form>
     
      
    </div>
  )
}

export default Login
