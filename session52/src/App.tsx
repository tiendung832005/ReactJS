import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Admin from './components/admin/Admin'

export default function App() {
  return (

    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
        <br />
        <NavLink to="/admin">Admin</NavLink>
        <br />
        <NavLink to="/register">Register</NavLink>
        <br />
        <NavLink to="*">Not Found</NavLink>
      </nav> 
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
    </div>
  )
}
