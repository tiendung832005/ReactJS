import React, { useState } from 'react'
interface User {
    email: string;
    username: string;
    password: string;
}
export default function FormAdvanced() {
    // cách bình thường
    const [email, setEmail] = useState<string>('');
    // const [username, setUsername] = useState<string>('');


    // cách xử lí tối ưu hơn
    const [user, setUser] = useState<User>({
        email: "",
        username: "",
        password: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        let name = e.target.name;
        // console.log("giá trị value", value);
        // console.log("giá trị name", name);
        setUser({...user,[name]:value})
    }
    console.log("giá trị user", user);
    
  return (
    <div>FormAdvanced
        <br />
        <div>
            <label htmlFor="">email</label>
            <input 
                name="email" 
                onChange={handleChange} 
                type="text" /><br />
            <label htmlFor="">username</label>
            <input 
                name="username" 
                onChange={handleChange} 
                type="textbr" /><br />
            <label htmlFor="">password</label>
            <input 
                name="password" 
                onChange={handleChange} 
                type="text" /><br />
            <label htmlFor="">comfirmpassword</label>
            <input 
                name="comfirmpassword" 
                onChange={handleChange} 
                type="text" /><br />
            <button>register</button>
        </div>
    </div>
  )
}
