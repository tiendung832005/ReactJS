import React from 'react'
interface User {
    id: number;
    name: string;
    address: string;
    email: string;
  }
  
  interface ChildProps {
    users: User[];
  }
  const Child1: React.FC<ChildProps> = ({ users }) => {
    return (
        <div>
          {users.map((item) => (
            <div key={item.id}>
              <p>Họ và tên: {item.name}</p>
              <p>Địa chỉ: {item.address}</p>
              <p>Email: {item.email}</p>
            </div>
          ))}
        </div>
      );
}

export default Child1