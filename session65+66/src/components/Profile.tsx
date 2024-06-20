import React from 'react'
import { useSelector } from 'react-redux';
interface Profile {
    id: number;
    userName: string;
    gender: string;
    dateBirth: string;
    address: string;
}
interface AppState {
    user: Profile;
  }
export default function Profile() {
    const user = useSelector<AppState, Profile>(state => state.user);
  return (
    <div>
            <h1>Thông tin người dùng</h1>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>UserName:</strong> {user.userName}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Date of Birth:</strong> {user.dateBirth}</p>
            <p><strong>Address:</strong> {user.address}</p>
        </div>
  )
}
