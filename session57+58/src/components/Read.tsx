import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
interface User {
    id: number;
    name: string;
}
export default function Read() {
    const [users, setUser] = useState<User[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/users")
            .then(response=>{
                console.log("giá trị trả về", response.data)
                setUser(response.data)
        })
            .catch(err=>console.log(err))
    },[])
  return (
    <div>Read
        {/* 
            - Dùng thư viện axios để lấy thông tin 
            + Khi lấy dữ liệu dùng phương thức get(theo chuẩn resfull API)
        */}
        <p>Danh sách user ở trong bảng users</p>
        <ul>
            {users.map((item)=>{
                return <li key={item.id}>{item.name}</li>
            })}

        </ul>
    </div>
  )
}
