import React from 'react'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Products from './components/products/Products'
import ProductDetail from './components/ProductDetail/ProductDetail'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home></Home>}>
          <Route path='/home/header' element={<Header/>}></Route>
        </Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/ProductDetail/:productId' element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  )
}
