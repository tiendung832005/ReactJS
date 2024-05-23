import React, { useCallback, useState } from 'react'

export default function Bai1() {
    const [count, setCount] = useState<number>(0);
    const inscrease=useCallback(()=>{
       setCount((prevCount) => prevCount+1);
    },[])
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={inscrease}>Increase</button>
    </div>
  )
}
