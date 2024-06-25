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
                
                    
                
            </ul>
    </div>
  )
}
