import React, { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState<number>(0);
    const inscrease=()=>{
        setCount(pre => pre +1);
        setCount(a => a + 2);
        setCount(a => a + 3);
    }
    /*
        Hook là những cái hàm thôi, khi dùng hàm để ý
        đầu vào của hàm, đầu ra trả về kết quả là gì?
        useState dùng để quản lý trạng thái của dữ liệu
        useState trả về 1 mảng có 2 phần tử
            + phần tử đầu tiên
            + phần tử thứ 2 là 1 cái function 
        có thể dùng destructoring để hứng lấy giá trị
        khi cập nhật lại trạng thái của dữ liệu (setCount) thì component

    */
//    const result = useState(0);
//    console.log("Giá trị result", result);
//    let arr=[5,6];
//     let [a,b] = arr
  return (
    <div>UseState
        <p>Giá trị của biến count: {count}</p>
        <button onClick={inscrease}>tăng</button>
        <button onClick={()=>setCount(count-1)}>giảm</button>
    </div>
  )
}
