import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Outlet></Outlet>
        {/* 
            Khi những route cha lồng route con
            muốn hiển thị route con thì thêm <Outlet></Outlet> ở component cha
        */}
    </div>
  )
}
