import React from 'react'
import Child1 from './Child1'
interface User {
    id: number;
    name: string;
    address: string;
    email: string;
  }
  const Parent1: React.FC = () => {
    const users: User[] = [
      { id: 1, name: 'Nguyễn Minh Sơn', address: 'Hà Nội', email: "son@gmail.com" },
      { id: 2, name: 'Nguyễn Minh An', address: 'HCM', email: "an@gmail.com" },
      { id: 3, name: 'Nguyễn Minh Hoàng', address: 'Đà Nẵng', email: "hoang@gmail.co" },
    ];

  return (
    <div>

        <Child1 users={users}></Child1>
    </div>
  )
}

export default Parent1