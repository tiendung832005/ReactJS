import React, { useState } from 'react'

export default function Bai4() {
    const [display, setDisplay] = useState<boolean>(false);

    const handleClick = () => {
        setDisplay(!display);
    };
  return (
    <div>
        <button onClick={handleClick}>{display ? 'Ẩn' : 'Hiện'}</button>
        {display && <p>Tiêu đề văn bản</p>}
    </div>
  )
}
