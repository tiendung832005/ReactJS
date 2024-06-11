import React, { useEffect } from 'react'
import axios from 'axios'
export default function Bai5() {
    useEffect(()=>{
        const createStudent = async () =>{
            let newStudent= {
                id: 6,
                student_name: "vinh",
                email: "vinh@gmail.com",
                address: "hà nội",
                phone: "03332131662",
                status: true,
                created_at: "11/12/2024"
            }
            const res = await axios.post("http://localhost:8080/students",newStudent)
            console.log(res.data);
            
        }
    },[])
  return (
    <div>Bai5</div>
  )
}
