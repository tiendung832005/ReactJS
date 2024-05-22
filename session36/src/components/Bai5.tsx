import React, { useEffect, useState } from 'react'

export default function Bai5() {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId =setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    },[]);

    const formatTime = (date: any) =>{
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        return `${hours} : ${minutes} : ${seconds}`
    }
  return (
    <div>
        <p>{formatTime(time)}</p>
    </div>
  )
}

