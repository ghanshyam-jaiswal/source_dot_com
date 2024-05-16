import React from 'react'
import '../css/signup.css'
const Signup = () => {
  return (
    <div className='signup'>
      <form>
        <h1>Sign Up</h1>
        <div className='signup-div'>
          <div className="signup-fullname">
            <label htmlFor="name">Full Name</label><br/><br/>
            <input type="text" id="name" placeholder='First Name' />
            <input type="text" id="name" placeholder='Last Name' />
          </div>
          <div className="signup-email">
            <label htmlFor="email">Email</label><br/><br/>
            <input type="email" id="email" placeholder='eg: shyam@gmail.com'/>
          </div>
          <div className="signup-contact">
            <label htmlFor="contact">Contact</label><br/><br/>
            <input type="tel" id="contact" placeholder=' '/>
          </div>
          <div className="signup-address">
            <label htmlFor="address">Address</label><br/><br/>
            <input type="text" id="address" placeholder='Street Address 1'/>
            <input type="text" placeholder='Street Address 2'/>
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='state'/>
            <input type="number" placeholder='Postal / Zip Code'/>
            <input type="text" placeholder='Country'/>
          </div>
          <div className="signup-submit">
            <input type="submit" value={'Sign up'} style={{backgroundColor:'rgb(81, 81, 222)',color:'white'}}/>
          </div>
          
        </div>
      </form>
    </div>
  )
}

export default Signup
