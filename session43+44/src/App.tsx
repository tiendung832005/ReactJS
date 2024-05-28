import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/login/Login.tsx'
import ReactBoostrap from './components/ReactBoostrap.tsx'

export default function App() {
  return (
    <div>
      App
      {/* <Header></Header> */}
      {/* <Main></Main> */}
      <Login></Login>
      <ReactBoostrap></ReactBoostrap>
    </div>
  )
}
