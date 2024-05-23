import React, {useCallback, useState} from 'react'
import UseRef from './components/UseRef'
import Header from './components/Header'
import Main from './components/Main'

export default function App() {
  const [active, setActive] = useState<boolean>(false)
  const [count,setCount] = useState<number>(0);
  const handleClick = () => {
    setActive(!active)
    setCount(count+1);
  }
  const getIdProduct = () => {

  }
let result = useCallback(()=>{
  const getIdProduct = () => {

  }
  return getIdProduct;
},[])
  console.log(("component App re-render khi click"));
  
  /*
      Khi component App dc re-render thì các component con 
      cũng re-render theo
  */
  /*
      Nếu active là true thì hiển thị thẻ p  với nội dung là xin chào!
      nếu active là false thì không hiển thị gì cả

      
  */
  return (
    <div>App
      {active ? <p>xin chào</p>:""}
      <UseRef></UseRef>
      <Header count={count}></Header>
      <Main getIdProduct={result}></Main>
      <button onClick={handleClick}>click active</button>
    </div>
  )
}
