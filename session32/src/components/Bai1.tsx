import React, { useState } from 'react'

export default function Bai1() {
    const [email, setEmail] = useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleClick = () => {
        console.log("email: ", email);
        
    }
  return (
    <div>
        <label htmlFor="">email</label>
            <input onChange={handleChange} type="text" />
            <p>email người dùng nhập: {email}</p>
            <button onClick={handleClick}>submit</button>
    </div>
  )
}
