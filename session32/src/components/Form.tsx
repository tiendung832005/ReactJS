import React, {useState} from 'react'

type Props = {

}
export default function Form({}: Props) {
    const [name, setName]=useState<string>("")
    const [email, setEmail] = useState<string>("")
    const handleClick=()=>{
        console.log("đã gọi vào hàm");
    }
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("giá trị người dùng nhập vào", e.target.value);
        // cập nhật state
        setName(e.target.value);
    }
    const changeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("giá trị người dùng nhập vào:", e.target.value);
        setEmail(e.target.value);
        
    }
  return (
    <div>
        {/* 
            Các kĩ thuật xử lí trong form
            Có 2 kĩ thuật xử lí chính
            1. controller
                + lấy dữ liệu người dùng nhập vào ô input
                + lấy dữ liệu khi người dùng nhập vào ô textarea
                + chọn select-option
                - ở trong function component muốn quản lý dữ liệu(trạng thái) 
                dùng useState
            2. uncontroller
            
        */}
        <div>
            <label htmlFor="">tên</label>
            <input 
            onChange={handleChange}
            type="text" />
            <p>tên người dùng nhập: {name}</p>
            <label htmlFor="">email</label>
            <input onChange={changeEmail} type="text" />
            <p>email người dùng nhập: {email}</p>
            <button onClick={handleClick}>login</button>
        </div>
    </div>
  )
}
