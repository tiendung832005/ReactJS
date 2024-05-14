import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Cart from './Cart'
import Navigation from './Navigation'
import Article from './Article'


 
export default function UserLayout() {
  return (
    <div>
        <Header></Header>
        <Menu></Menu>
        <Cart></Cart>
        <Navigation></Navigation>
        <Article></Article>
    </div>
  )
}
