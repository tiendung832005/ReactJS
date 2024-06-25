import React from 'react'
import Cart from './components/cart/Cart'
import Product from './components/cart/products/Product'
import "./App.css"
export default function App() {
  return (
    <div className='container'>
      <Cart></Cart>
      <Product></Product>
    </div>
  )
}
