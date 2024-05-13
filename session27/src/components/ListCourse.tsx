import React from 'react'

export default function B2() {
  let subjects: string[] = ["HTML", "CSS", "JavaScript", "ReactJS"];
  return (
    <div>
      Bài 1
        <h2>Danh sách khóa học</h2>
        <ul>
          {subjects.map((item, index)=>{
            return <li key = {index}>{index+1}. {item}</li>
          })}
        </ul>
    </div>
  )
}
