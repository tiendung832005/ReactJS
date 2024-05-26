import React from 'react'
import B from './B'
interface Props{
    abc: string;
}
export default function A(props: Props) {
    console.log(props);
    
  return (
    <div>A
        <B abc={props.abc}></B>
    </div>
  )
}
