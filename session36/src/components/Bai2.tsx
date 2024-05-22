import React, { useEffect, useState } from 'react'

export default function Bai2() {
    const [count, setCount] = useState<number>(0);
    const inscrease=()=>{
       setCount(count+1);
    }
    useEffect(()=>{
        document.title = count.toString();
    }, [count])
  return (
    <div>
        <button onClick={inscrease}>Click để tăng số lần click</button>
    </div>
  )
}