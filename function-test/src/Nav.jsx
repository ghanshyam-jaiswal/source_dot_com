import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { PiShoppingCartDuotone } from "react-icons/pi";

const Nav = () => {
  return (
    <>
    <div className='nav'>
      <Link to={'/'}>Home</Link>
      <Link to={'/cards'}>Cards</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/profile'}>Profile</Link>
      <Link to={'/cart'}><PiShoppingCartDuotone style={{fontSize:'30'}}/></Link>
      {/* <Outlet/> */}
      {/* <div>
        home
      </div> */}
    </div>
    
    
    </>
    
  )
}

export default Nav
