import React, { useState, ChangeEventHandler } from 'react'

export default function Exercises04() {
    const [value, setValue] = useState<string>("");

    const handChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
        setValue(event.target.value);
    }
  return (
    <div>
        <h3>Tỉnh thành phố: {value}</h3>
        <select name="" id="" onChange={handChange}>
            <option value="">Chọn tỉnh thành phố</option>
            <option value="">Hà Nội</option>
            <option value="">HCM</option>
            <option value="">Hà Nam</option>
            <option value="">Đà Nẵng</option>
        </select>
    </div>
  )
}