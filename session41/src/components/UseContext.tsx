import React, { createContext, useState } from 'react'
import A from './A'
export const Context = createContext("");
export default function UseContext() {
    const [name, setName] = useState<string>("dũng")
    // dùng props để gửi dữ liệu name(Trang)
    // component E nhận giá trị Trang
  return (
    <div>UseContext
        {/* 
            Sinh ra giúp cho việc truyền dữ liệu giữa các components có quan hệ cha 
            con được nhanh hơn, dễ dàng hơn không phải truyền theo kiểu props 
            bình thường
            - Các component phải có quan hệ cha con
            - tạo 1 biến gán = createContext("")
            export biến ra
            -  Dùng biến này bọc component 
            <Biến.Provider value={}>
            - Component con muốn nhận data
            import biến đồ vào
            useContext(Biến bên trên export)
        */}
        <Context.Provider value={name}>
            <A abc=''></A>
        </Context.Provider>
    </div>
  )
}
