import React, { useContext } from 'react'
import { Context } from './UseContext';
interface Props{
    abc: string;
}
export default function E(props: Props) {
    let result = useContext(Context)
    console.log(result);
    
  return (
    <div>E</div>
  )
}
