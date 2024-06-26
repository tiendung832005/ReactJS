import React from 'react'
import Count from './components/Count'
import Todolist from './components/Todolist'
import Theme from './components/Theme'
import DisplaySlice from './components/DisplaySlice'

export default function App() {
  return (
    <div>App
      {/* 
        - Tại sao lại dùng react toolkit thay vì dùng redux
        1. Đối tượng khi khời tạo store thì trong các hàm reducer thường tách ra 
        các action, các hàm reducer sẽ tính toán trả về state mới dựa vào action truyên lên
        2. còn đối với toolkit viết code sẽ gọn hơn tại vì những action reducer sẽ dc gộp lại
        3. Khi dùng redux thường thì muốn xử lí các tác vụ bất đồng bộ (call) API, gọi tới server 
        sẽ cài thư viện redux-thunk
        4. Khi dùng Redux toolkit nó sẽ giúp xử lý dc các tác vụ bất đồng bộ bằng cách dùng createAsync Thunk

        *****************************
        1. Cấu hình setup với redux toolkit
        2. Tương tác xử lý bất đồng bộ
      */}
      <Count></Count>
      <Todolist></Todolist>
      <Theme></Theme>
      <DisplaySlice></DisplaySlice>
    </div>
  )
}
