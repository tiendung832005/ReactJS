import React, { useState } from 'react'

export default function Bai3() {
    const [birthday, setBirthday] = useState<string>("");

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBirthday(e.target.value);
      };
  return (
    <div>
        <h1>Ngày sinh: {birthday}</h1>
        <input onChange={handleSubmit} type="date" />
        <button >Submit</button>
    </div>
  )
}
