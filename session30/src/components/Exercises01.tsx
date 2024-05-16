import React from 'react'

export default function Exercises01() {
    const handlClick=()=>{
        console.log("clicked")
    }
  return (
    <div>
        <button onClick={handlClick}>Click me</button>
    </div>
  )
}
