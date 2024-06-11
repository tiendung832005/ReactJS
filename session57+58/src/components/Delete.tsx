import React, { useEffect } from 'react'
import axios from 'axios'
export default function Delete() {
    useEffect(()=>{
        // khi xóa phải cần truyền id của user cần xóa
        axios.delete("http://localhost:8080/users")
    },[])
  return (
    <div>Delete
        {/* 
            -DÙng thư viện axios để xóa user trong bảng users
            khi xóa thì dùng phương thức delete
        */}
    </div>
  )
}
