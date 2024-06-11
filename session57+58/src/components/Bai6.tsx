import axios from 'axios'
import React, { useEffect } from 'react'

export default function Bai6() {
    useEffect(()=>{
        const  updateStudentById = async (id: number, updatedStudent: object) =>{
            const res = await axios.put(`http://localhost:8080/students/${id}`, updatedStudent)
            console.log(res.data);
        }
    },[])
  return (
    <div>Bai6</div>
  )
}
