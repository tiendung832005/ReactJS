import React, { useState } from 'react'

export default function Bai7() {
        const [text, setText] = useState<string>("");
        const [count, setCount] = useState<number>(0);

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{
            setText(e.target.value);
            setCount(e.target.value.length);
        }
  return (
    <div>
        <textarea name="" id="" onChange={handleChange}></textarea>
        <p>Số ký tự: {count}</p>
    </div>
  )
}
