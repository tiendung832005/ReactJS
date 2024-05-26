import React from 'react'
import D from './D'
interface Props{
    abc:string;
}
export default function C(props: Props) {
  return (
    <div>C
        <D abc={props.abc}></D>
    </div>
  )
}
