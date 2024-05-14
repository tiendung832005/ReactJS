import React from 'react'
import Child from './Child'
interface Props{
  a: string,
  b: number,

}
export default function Parent(props: Props) {
  return (
    <div>
      <p>xin chào {props.a} năm nay {props.b} tuổi</p>
      <Child></Child>
    </div>
  )
}