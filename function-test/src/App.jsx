import React, { useState } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Nav from './Nav';
import Body from './Body';
import Login from './Login';
import Card from './Card';
import Profile from './Profile';
import Home from './Home';
import Cards from './Cards';

const App = () => {

    let [product,setProduct]=useState([
        {
            name:"gk",
            email:"gk@gmail.com"
        }
    ])
    let router= createBrowserRouter([
        {
           path:'/',
           element:<Home/>,
           children:[
            {
                path:'/cards',
                element:<Cards check={product}/>
            },
            {
                path:'/card',
                element:<Card/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/profile',
                element:<Profile/>
            },
           ]
        }
        
      
    ])
   
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
