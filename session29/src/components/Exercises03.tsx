import React, {useState} from 'react'
const [users, setUsers] = useState([
    {
        id: 1,
        name: "Nguyễn Minh Sơn",
        address: "ha noi"
    },
    {
        id: 2,
        name: "Nguyễn Minh Sĩ",
        address: "đầ nẵng"
    },
    {
        id: 3,
        name: "Hoàng Hoa Thám",
        address: "hcm"
    },
])
export default function Exercises03() {
  return (
    <div>
        {users.map(user=>(
            <div key={user.id}>
                <p>Họ và tên: {user.name}</p>
            </div>
        ))}
    </div>
  )
}
