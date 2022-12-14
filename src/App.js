import React from "react";
import Dashboard from "./componants/Dashboard";
import Login from "./componants/Login";
import Registration from "./componants/Registration";
import "./assets/style/style.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./componants/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
