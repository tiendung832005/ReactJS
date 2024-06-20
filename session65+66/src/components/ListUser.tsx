import React from 'react'
import { useSelector } from 'react-redux';
interface User {
    id: number;
    userName: string;
    gender: string;
    dateBirth: string;
    address: string;
}
  interface RootState {
    users: User[];
}
export default function ListUser() {
    const ListUser = () => {
        const users = useSelector((state: RootState) => state.users);
    }
  return (
    <div>
        <h1>Danh sách người dùng</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p><strong>ID:</strong> {user.id}</p>
                        <p><strong>UserName:</strong> {user.userName}</p>
                        <p><strong>Gender:</strong> {user.gender}</p>
                        <p><strong>Date of Birth:</strong> {user.dateBirth}</p>
                        <p><strong>Address:</strong> {user.address}</p>
                    </li>
                ))}
            </ul>
    </div>
  )
}
