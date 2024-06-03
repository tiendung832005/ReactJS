import React, { useState } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  // const [count, setCount] = useState(0);
  // const navigate = useNavigate();
  // const handleRedirect = () =>{
  //   // chuyển hướng về home 
  //   navigate("/");
  // }
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/contact">Contact</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
        <br />
        <NavLink to="/register">Register</NavLink>
        <br />
        <NavLink to="*">Not Found</NavLink>
        
        {/* <button onClick={handleRedirect}>Chuyển về home</button> */}
      </nav> 

      {/* Khu vực định tuyến các route, không được viết HTML trong này */}
      {/* Định nghĩa các Router cho component */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

