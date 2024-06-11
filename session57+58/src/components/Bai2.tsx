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
export default function Bai2() {
    const [students, setStudents] = useState<Students[]>([])
    useEffect(()=>{
        axios.get("http://localhost:8080/students")
        .then(response=>{
            setStudents(response.data);
        })
        .catch(err=>console.log(err));
    },[])
  return(
    <div>
        <h3>Danh sách students</h3>
        <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.student_name}</li>
                ))}
            </ul>
    </div>
  )
}
