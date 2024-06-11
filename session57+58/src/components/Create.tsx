import React, { useEffect } from 'react'
import axios from 'axios'
export default function Create() {
    useEffect(() =>{
        let newUser={
            name: "trang",
            email: "trang@gmail.com",
        }
        axios.post("http://localhost:8080/users")
    },[])
  return (
    <div>Create
        {/* 
            -Tiến hành thêm dữ liệu vào bảng users
            khi thêm dữ liệu thì dùng phương thức POST

        */}
    </div>
  )
}
