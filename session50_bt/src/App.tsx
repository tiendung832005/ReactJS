import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Student from './components/Student'
import Employee from './components/Employee'
import Login from './components/Login'
import PrivateRouter from './components/PrivateRouter'
import Account from './components/Account'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/product/:id' element={<ProductDetail/>}></Route>
        <Route path='/product/:name' element={<Student/>}></Route>
        <Route path='/student' element={<Employee/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<PrivateRouter/>} ></Route>
        <Route path='/' element={<Account/>} ></Route>
      </Routes>
    </div>
  )
}
