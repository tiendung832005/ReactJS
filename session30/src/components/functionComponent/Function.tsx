import React, { useState } from 'react'
export default function Function() {
    const [name,setName] = useState<string>("hoa");
    /*
    Event: Sự kiện
    onclick
    onchange
    oninput
    onkeydown
    onkeyup
    ...........
    */
    // nơi khai báo các hàm
    // dùng các từ khóa khai báo: let const var
    const handlChange=()=>{
        console.log("Đã gọi vào hàm");
        // đi xử lí
        //  khi muốn cập nhật state(name)
        setName("sơn")
        // khi setName thì component re-render lại 1 lần
    };
  return (
    <div>
        <p>{name}</p>
        <button onClick={handlChange}>click</button>
    </div>
  )
}
