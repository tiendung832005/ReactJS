import React from 'react'
import C from './C'
interface Props{
    abc: string
}
export default function B(props: Props) {
        console.log(props);      
  return (
    <div>B
        <C abc = {props.abc}></C>
    </div>
  )
}
