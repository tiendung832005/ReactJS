import React, { useState } from 'react'

export default function Function() {
    const [fullname, setFullName]=useState<string>("hoa");
    const [age, setAge]=useState<number>(13);
    const [student, setStudents] = useState<string[]>([]);
    const [isActive, setIsActive] = useState<boolean>(true)
    //  const fullName:string="hoa"
    const handleChange=()=>{
        setAge(14);
        setFullName("Hồng")
    }
  return (
    <div>Function
        {/* 
        - State: dùng để quản lý dữ liệu trong component
        Đối với function để quản lý dữ liệu dùng useState,
        đây là 1 hook sinh ra giúp function có thể quản lý dữ liệu
        state có thể thay đổi dữ liệu được
        */}
        {/* Hiển thị */}
        <p>{fullname} năm nay {age} tuổi</p>
        <button onClick={handleChange}> change age </button>
    </div>
  )
}
