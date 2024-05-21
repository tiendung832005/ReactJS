import React, { useState } from 'react'

export default function Bai1() {
    const [name, setName] = useState<string>("Nguyễn Văn A")
  return (
    <div>Bai1
        <p>Họ và tên: {name}</p>
    </div>
  )
}
