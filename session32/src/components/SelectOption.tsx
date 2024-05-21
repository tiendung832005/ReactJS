import React from 'react'

export default function SelectOption() {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        console.log("giá trị ng dùng chọn: ", e.target.value);
        
    }
  return (
    <div>SelectOption
        <select name="" id="">
            <option value="">Chọn tỉnh/thành phố</option>
            <option value="HN">Hà Nội</option>
            <option value="HCM">HCM</option>
            <option value="QN">Quảng Ninh</option>
        </select>
    </div>
  )
}
