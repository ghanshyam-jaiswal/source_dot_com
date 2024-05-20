import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <div className='nav'>
      <Link to={'/'}>Home</Link>
      <Link to={'/cards'}>Cards</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/profile'}>Profile</Link>
      {/* <Outlet/> */}
      {/* <div>
        home
      </div> */}
    </div>
    
    
    </>
    
  )
}

export default Nav
