import React, { useEffect, useState } from 'react'

export default function Bai1() {
    const [input, setInput] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }
    useEffect(()=>{
        document.title = input;
    }, [input])
  return (
    <div>
        <input type="text" onChange={handleChange} placeholder='Nhập nội dung' />
    </div>
  )
}
