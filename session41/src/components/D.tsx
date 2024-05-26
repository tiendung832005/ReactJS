import React from 'react'
import E from './E'
interface Props{
    abc: string
}
export default function D(props:Props) {
  return (
    <div>D
        <E abc= {props.abc}></E>
    </div>
  )
}
