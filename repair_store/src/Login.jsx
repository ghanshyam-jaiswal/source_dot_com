import React from 'react'
import "../css/login.css"
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {

  let navigate=useNavigate()

  let handleCreateAccount=()=>{
    navigate('/signup')
  }

  let handleLogin=()=>{
    navigate('/home')
  }  

  return (
    <section className='login-parent'>
    <div className='login'>
    <h1>Login </h1>
    <form>
      <input type='text' placeholder='Name'/><br/><br/>
      <input type='text' placeholder='Email'/><br/><br/>
      {/* <input type='submit' value='Login' className='submit-btn' /> */}
      <button className='submit-btn' onClick={()=>handleLogin()}>Login</button>
      <button className='submit-btn' onClick={()=>handleCreateAccount()}>Create Account</button>
      {/* <input type='submit' value='create account' className='submit-btn' /> */}
      {/* <Link t={'/signup'}>create account</Link> */}
      
    </form>
  </div>
  </section>
  )
}

export default Login
