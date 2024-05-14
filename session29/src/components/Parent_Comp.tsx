import React, { useState } from 'react'
import Children_Comp from './Children_Comp.tsx'

const Parent_Comp = () =>{
    const [name, setName] = useState("Nguyễn Văn Nam")

  return (
    <div>
        <p>Họ và tên component cha: {name}</p>
        <Children_Comp name={name}></Children_Comp>
    </div>
  );
};
export default Parent_Comp;

