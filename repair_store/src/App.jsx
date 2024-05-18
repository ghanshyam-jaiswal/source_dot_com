import React from "react";
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
import Alarm from "./Card_Description/Alarm";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<Landing/>}>
            {/* <Route path="/home/alarm" element={<Alarm/>}></Route> */}
          </Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/alarm" element={<Alarm/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
