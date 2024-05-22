import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState<string>("");
    const [name, setName] = useState<string>("minh thu")

    useEffect(()=>{
        console.log("useEffect dc gọi!!");
        
    }, [])
    const handleClick=()=>{
        setCount(count+1);
    }
    
  return (
    <div>UseEffect
        {/* 
            UseEffect: là 1 hook
            useEffect là 1 cái hàm
            sinh ra để làm j?
                - Giải quyết các vấn đề side effect (tác dụng phụ bên cạnh tác vụ chính)
            CÚ PHÁP
            3 cú pháp useEffect
            1. Nhận vào 1 tham số là callback fuction (arrow fuction)
                - Khi component dc mount vào  Dom thì useEffect dc gọi
                - Khi mỗi lần component re-render thì useEffect dc gọi
            2. Nhận vào 1 tham số là callback fuction (arrow fuction) và tham số thứ 2 là
                một mảng rỗng []
                - Khi component dc mount vào Dom thì useEffect dc gọi
                - Khi mỗi lần component re-render thì useEffect không dc gọi
            3. Nhận vào 1 tham số là callback fuction (arrow fuction) và tham số thứ 2 là
                một mảng [dependency] (sự phụ thuộc)
                - useEffect dc gọi khi component dc mount vào Dom
                - Khi dependency thay đổi thì useEffect dc gọi

        */}
        <p>Giá trị biến count: {count}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
