import React from 'react'
import Function from './components/Function'
import Exercises01 from './components/Exercises01'
import Exercises02 from './components/Exercises02'
import Exercises03 from './components/Exercises03'
import Parent_Comp from './components/Parent_Comp'
import Parent from './components/Parent'
import Parent1 from './components/Parent1'

export default function App() {
  return (
    <div>
      {/* <Function></Function> */}
      <Exercises01></Exercises01>
      <Exercises02></Exercises02>
      <Exercises03></Exercises03>
      <Parent_Comp></Parent_Comp>
      <Parent></Parent>
      <Parent1></Parent1>
    </div>
  )
}
