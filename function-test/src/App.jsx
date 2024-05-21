import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Card from './Card';
import Profile from './Profile';
import Home from './Home';
import Cards from './Cards';
import Cart from './Cart';

const App = () => {

    let [cart,setCart]=useState([])

    let addToCart=(data)=>{
      
       setCart([...cart,data])
 
    //    console.log(data)
       console.log(cart)
    //    console.log(setCart)
 
   }

    useEffect(() => {
      console.log(cart.length);
    }, [cart]);


    let router= createBrowserRouter([
        {
           path:'/',
           element:<Home/>,
           children:[
            {
                path:'/cards',
                element:<Cards/>
            },
            {
                path:'/card/:name',
                element:<Card addToCart={addToCart}/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/profile',
                element:<Profile/>
            },
            {
                path:'/cart',
                element:<Cart/>
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
