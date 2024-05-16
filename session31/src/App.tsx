import React, { useState } from 'react'
import ClassComponent from './components/ClassComponent'
import A from './components/A'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'


export default function App() {
  const [active,setActive]=useState<boolean>(false)
  const removeComponent=()=>{
    console.log("đã gọi vào hàm remove");
    setActive(!active)
    
  }
   return (
    <div>
      {/* 
        lifecycle: vòng đời của classcomponent
        functional component không có vòng đời
        class component nó cũng có vòng đời riêng của nó
        4 giai đoạn
          giai đoạn 1: khởi tạo
            + đi khởi tạo props và state
          giai đoạn 2: mounting (gắn vào UI)
            + thì chạy các phương thức sau
              1. componentWillMount()
              2. render()
                không nên setState ở trong phương thức render này vì sao?
              3. componentDidMount()
              ==> thực thi 1 lần
          giai đoạn 3: updating(cập nhật)
            ==> có thể thực thi nhiều lần
            - khi nào xảy ra update
            ==> khi dữ liệu props nhận về thay đổi hoặc dữ liệu state thay đổi thì
            giai đoạn updating xảy ra
            ==> Cung cấp các phương thức sau
            1. ComponentShouldUpdate()
            2. ComponentWillUpdate()
            3. render()
            4. componentDidUpdate()
          giai đoạn 4: unmounting(hủy)  
            ==> thực hiện 1 lần
      */}
     {/* <ClassComponent name="minh thu" age={25} loading={true}></ClassComponent> */}



    
     <Bai1 name="minh thu"></Bai1>
     <Bai2></Bai2>
     <Bai3></Bai3>
     <Bai4></Bai4>
     <Bai5></Bai5>
     <Bai6></Bai6>
    </div>
    
  )
}
