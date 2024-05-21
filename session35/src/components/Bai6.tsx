import React, { useState } from 'react'

export default function Bai6() {
    const [count, setCount] = useState<number>(0);
    const inscrease=()=>{
       setCount(count+1);
    }
  return (
    <div>
        <p>Bạn đã click {count} lần</p>
        <button onClick={inscrease}>Click để tăng số lần click</button>
    </div>
  )
}
