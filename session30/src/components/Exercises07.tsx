import React, { useState } from 'react'

export default function Exercises07() {
    const [number, setNumber] = useState<number[]>([]);
    const handClick = () => {
        //  tạo ra số ngẫu nhiên
        const random = Math.floor(Math.random()*9);
        number.push(random)
        setNumber([...number]);
    }
    /*
        Các bước làm:
        1. Tạo ra mảng rỗng để chứa các phần tử
        2. Tạo ra 1 button click và bắt sự kiện click 
        3. Tạo ra số ngẫu nhiên Math.random();
        4. push cái số ngẫu nhiên vào mảng
    */
  return (
    <div>
    <p>Hiển thị mảng: {number}</p>
    <button onClick={handClick}>addNumber</button>
    
    </div>
  )
}
