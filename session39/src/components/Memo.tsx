import React from 'react'

export default function Memo() {
  return (
    <div>Memo
        {/* 
            Memo kp là 1 hook
            được gọi là HOC(higher order component): hàm bậc cao memo
            cơ chế hoạt động là sẽ đi ktra xem trong component
            có props nào thay đổi hay không? Nếu thay đổi thì component
            sẽ re-render, còn không thì sẽ không re-render
        */}
    </div>
  )
}
