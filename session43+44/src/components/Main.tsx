import React from 'react'
import { Container } from 'react-bootstrap'
import './header.scss'
import Button from 'react-bootstrap/Button';
import { IoMdHome } from "react-icons/io";
export default function Main() {
  return (
    <div >
      <div className='header'>
        <span className='header-left'>
        <IoMdHome />
        <a href="" className=''>Home</a>
        <a href="" className=''>Content</a>
        <a href="" className=''>Categories</a>
        <a href="" className=''>Settings</a>
        </span>
        <span className='header-right'>
        <img src="" alt="" className=''/>
           Admin
        </span>
      </div>
        <div>
        
        </div>
    </div>
  )
}
