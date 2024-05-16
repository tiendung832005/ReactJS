import React, { useState } from 'react'

export default function Exercises03() {
    const [value, setValue]=useState<string>("");

    const handChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setValue(event.target.value);
    }
  return (
    <div>
        <h3>Thời gian: {value}</h3>
        <input type="date" onChange={handChange}/>
    </div>
  )
}
