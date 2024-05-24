import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import Signup from "./Signup";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Cart from "./Cart";
import UserProfile from "./UserProfile";
import Landing from "./Landing";
import Card from "./Card";
import Payment from "./Payment";
import ThankYou from "./ThankYou";


const App = () => {

  let [cart,setCart]=useState([])

  let addToCart=(data)=>{

    cart.find(card => card.name === data.name) ? alert('already exists') : setCart([...cart,data])

     console.log(cart)
  //    console.log(data)
  //    console.log(setCart)

 }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home count={cart.length}/>}>
          <Route path="/home" element={<Landing />}>
            {/* <Route path="/home/alarm" element={<Alarm/>}></Route> */}
          </Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/card/:name" element={<Card/>}></Route>
          <Route path="/payment" element={<Payment addToCart={addToCart}/>}></Route>
          <Route path="/thankyou" element={<ThankYou/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
