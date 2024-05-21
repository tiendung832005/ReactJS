import React, { useState } from 'react'

export default function Bai5() {
    const [input, setInput] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }
  return (
    <div>
        <input type="text" onChange={handleChange} placeholder='Nhập nội dung' />
        <p>{input}</p>
    </div>
  )
}
