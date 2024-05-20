import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import Body from './Body'

const Home = () => {
  return (
    <div className='home'>
      <Nav/>
      {/* <Body/> */}
      {/* <h1>Home</h1> */}
      <Outlet/>
    
    </div>
  )
}

export default Home
