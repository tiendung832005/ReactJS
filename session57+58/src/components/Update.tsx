import React, { useEffect } from 'react'
import axios from 'axios'
export default function Update() {
    useEffect(()=>{
        // khi update phải biết được id của user cần update
        axios.put("http://localhost:8080/users/4", {name: "huyền chang" })
    })
  return (
    <div>Update
        {/* 
            - KHi update dùng 2 phương thức put||patch
            PUT: update tất cả
            PATCH: update 1 phần còn lại giữ nguyên
        */}
    </div>
  )
}
