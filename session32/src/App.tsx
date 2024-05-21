import React from 'react'
import Classcomponent from './components/Classcomponent';
import Form from './components/Form';
import Bai1 from './components/Bai1';
import Bai2 from './components/Bai2';
import Bai3 from './components/Bai3';
import Bai4 from './components/Bai4';
import Bai5 from './components/Bai5';
import Bai6 from './components/Bai6';
import FormAdvanced from './components/FormAdvanced';
import TextArea from './components/TextArea';
import SelectOption from './components/SelectOption';

export default function App() {
  setTimeout(() => {
    console.log("Hàm setTimeout dc gọi");
    
  },1000000)
  let interval = setInterval(() => {
    console.log("Hàm setInterval dc gọi");
    
  },1000000)
  const handleClick = () => {
    clearInterval(interval)
  }
  return (
    <div>
      <button onClick={handleClick}>DỪng</button>
      <Form></Form>
      {/* <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6> */}
      <FormAdvanced></FormAdvanced>
      <p>**************************************************</p>
      <TextArea></TextArea>
      <p>**************************************************</p>
      <SelectOption></SelectOption>
      <p>**************************************************</p>

    </div>
  )
}
