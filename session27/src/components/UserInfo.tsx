
import React from 'react'

export default function userInfo() {
  const userInfo = {
    fullname: "Nguyễn Văn A",
    gen: "nam",
    date: "06/03/2024",
    email: "nva@gmail.com",
    address: "Thanh Xuân, Hà Nội",
  };
  return (
    <div>
      <div>
      <h2>Thông tin cá nhân</h2>;
      <p>Họ và tên: {userInfo.fullname}</p>
      <p>Giới tính: {userInfo.gen}</p>
      <p>Ngày sinh: {userInfo.date}</p>
      <p>Email: {userInfo.email}</p>
      <p>Địa chỉ: {userInfo.address}</p>
    </div>
    </div>
  )
}
