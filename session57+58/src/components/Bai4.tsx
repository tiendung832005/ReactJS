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
export default function Bai4() {
  const [students, setStudents] = useState<Students[]>([])
  useEffect(()=>{
  const removeById = async (id: number)=>{
    const res = await axios.delete(`http://localhost:8080/students/${id}`);
    console.log(res.data);
    setStudents(students.filter(item => item.id !== id));
  }
},[])
  return (
    <div>Bai4</div>
  )
}
