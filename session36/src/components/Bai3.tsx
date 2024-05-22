import React, { useState } from 'react'

export default function Bai3() {
    const [active, setActive] = useState<string>("home");
    const handleClick = (tab: any) => {
        setActive(tab);
    }
    const tabStyle = {
        cursor: 'pointer',
        border: '1px solid #ccc',
    };

    const activeTabStyle = {
        ...tabStyle,
        backgroundColor: '#555',
        color: 'white',
    };
  return (
    <div>
        <div style={active === "home" ? activeTabStyle : tabStyle}
        onClick={()=> handleClick("home")}
        >
            Trang chủ
        </div>
        <div style={active === "home" ? activeTabStyle : tabStyle}
        onClick={()=> handleClick("products")}
        >
            Sản phẩm
        </div>
        <div style={active === "home" ? activeTabStyle : tabStyle}
        onClick={()=> handleClick("about")}
        >
            Giới thiệu
        </div>
        <div style={active === "home" ? activeTabStyle : tabStyle}
        onClick={()=> handleClick("contact")}
        >
            Liên hệ
        </div>
    </div>
  )
}
