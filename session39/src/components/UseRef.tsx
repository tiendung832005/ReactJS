import React, { useRef, useState } from 'react'

export default function UseRef() {
    const [count,setCount] = useState<number>(0)
    let index = 0;
    const refCurrent = useRef<HTMLInputElement>(null);
    refCurrent.current?.focus(); // toans tử 
   /*
        useRef là 1 hàm nhận vào tham số là giá trị khởi tạo truyền vào

        useRef() trả về 1 đối tượng là 1 object, bên trong object này
        sẽ có 1 key(current) với giá trị là giá trị tham số truyền vào
        Khi mỗi lần component re-render thì useRef sẽ không tạo ra tham chiếu mới
        Khi muốn focus vào ô input khi muốn nhập dữ liệu
    
   */
    const handleClick=()=>{
        // refCurrent.current=refCurrent.current+1;
        index++;
        console.log("Giá trị index khi click: ", index);
        setCount(count+1);
    }
    console.log("Giá trị index: ", index);
    
  return (
    <div>UseRef
        <p>Gía trị count: {count}</p>
        <button onClick={handleClick}>Click</button>
        <input type="text" ref={refCurrent} />

    </div>
  )
}
