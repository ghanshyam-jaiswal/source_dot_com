import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Nav = ({count}) => {
  return (
    <>
      <div className="nav">
        <div className="nav-logo"></div>
        <div className="nav-links">
          <NavLink to={"/home"} className={(e)=>{return e.isActive?"red":" "}} >Home</NavLink>
          <NavLink to={"/category"} className={(e)=>{return e.isActive?"red":" "}} >Category</NavLink>
          {/* <NavLink to={"/signup"} className={(e)=>{return e.isActive?"red":" "}}>Sign Up</NavLink> */}
          <NavLink to={"/login"} className={(e)=>{return e.isActive?"red":" "}} >Login</NavLink>
          <NavLink to={"/contact"} className={(e)=>{return e.isActive?"red":" "}} >Contact</NavLink>
          <NavLink to={"/about"} className={(e)=>{return e.isActive?"red":" "}} >About</NavLink>
          <NavLink to={"/cart"}  className="nav-cart"  ><FaShoppingCart />{count}</NavLink>
          <NavLink to={"/profile"}><CgProfile className="nav-profile" /></NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
