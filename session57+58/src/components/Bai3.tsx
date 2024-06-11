import React, { useEffect, useState } from 'react'
import axios from 'axios'
interface Students {
    id: number;
    student_name: string;
    email: string;
    phone: string;
    address: string;
    status: boolean;
    created_at: string;
}
export default function Bai3() {
    const [studentDetail, setStudentDetail] = useState<Students|null>(null)
    useEffect(()=>{
        const getStudentById = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:3000/students/${id}`);
        const student = response.data;
        if (student) {
            setStudentDetail(student);
            console.log(student);
        } else {
            console.log("không thấy bản ghi");
        }
    } catch (err) {
        console.log("không thấy bản ghi");
    }
};
    })
  return (
    <div>
        Bài 3
    </div>
  )
}
