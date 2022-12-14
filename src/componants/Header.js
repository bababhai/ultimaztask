import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
<div className='logo'>
Ultimaz Task
</div>
        <div className='menu'>
        <NavLink exact activeClassName="active" to="/login">
      Login
    </NavLink>
    <NavLink exact activeClassName="active" to="/registration">
      Register
    </NavLink>
        </div>
    
  </div>

  )
}

export default Header