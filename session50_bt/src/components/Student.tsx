import React from 'react'
import { useParams } from 'react-router-dom'

export default function Student() {
    const {name} = useParams();
  return (
    <div>Student
        <p>Name: {name}</p>
    </div>
  )
}
