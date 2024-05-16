import React from 'react'
import "../css/login.css"
const Login = () => {
  return (
    <section className='login-parent'>
    <div className='login'>
    <h1>Login </h1>
    <form>
      <input type='text' placeholder='Name'/><br/><br/>
      <input type='text' placeholder='Email'/><br/><br/>
      <input type='submit' value='Login' className='submit-btn' />
      
    </form>
  </div>
  </section>
  )
}

export default Login
