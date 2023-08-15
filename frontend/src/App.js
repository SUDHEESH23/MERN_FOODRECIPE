import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import AboutUs from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<AboutUs />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Signup" element={<Signup />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;