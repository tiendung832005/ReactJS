import React from 'react'
import Count from './components/Count'

export default function App() {
  return (
    <div>
      {/* 
        Redux: là 1 thư viện bên thứu 3 giúp cho react có thể quản lí dữ liệu tập trung
        giúp tạo 1 cái kho chưas dữ liệu tập trung 
        các components muốn tương tác với dữ liệu thì tương tác trực tiếp 
        không cần phải truyền dữ liệu giữ các components
        redux là 1 thư viện, reactjs cũng là thư viện 
        redux có thể kết hợp với nhiều thư viện khác, có thể kết hợp với js thuần.
        1. cài đặt được kho chứa dữ liệu trong bảng redux
        redux sẽ tạo ra 1 cái kho chứa dữ liệu tập trung
          -xem các bước cài đặt ntn
          - nhờ thứ tự luồng chạy của nó
          B1: Cài đặt 2 thư viện
          -  react-redux
          - redux
          sau khi cài xong vào package.json xem có chưa
          B2: Thiết lập store
          - Bên trong store chứa nhiều reducer
          - reducer là gì?
            + reducer bản chất là những cái hàm, fuction thôi
            + nhiệm vụ của reducer là tính toán, xử lý trả về state mới
            - Bên trong store chứa nhiều reducer
            - reducer là gì?
            + reducer bản chất là những cái hàm, fuction thôi
            + nhiệm vụ của reducer là tính toán, xử lý trả về state mới
            B3: tạo store
            - import createStore from "redux"
          2. Tương tác dữ liệu với kho chứa đấy
          
            1. lấy ra state dùng thì dùng useSelector
            2. bắn action, hành động thì dùng useDispatch
      */}
      <Count>
        
      </Count>
    </div>
  )
}
