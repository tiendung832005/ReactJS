import React from 'react'
import ThemeContext from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'

export default function App() {
  const theme = "blue"
  return (
    <div>
      <ThemeContext.Provider value="theme">
      <div>
        <Bai2 />
        <Bai3></Bai3>
        <Bai4></Bai4>
      </div>
    </ThemeContext.Provider>
    <Bai5></Bai5>
    <Bai6></Bai6>
    </div>
  )
}
