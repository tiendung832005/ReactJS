import React, { useMemo } from 'react'

export default function Bai2() {
    const user = [
         {
             id:1,
             name: "minh thu",
             age: 19,
             gender: "female"
         },
         {
             id:2,
             name: "minh",
             age: 25,
             gender: "male"
         },
         {
             id:3,
             name: "dung",
             age: 22,
             gender: "female"
         }
    ];

    const filterUser = useMemo(()=>{
        return user.filter(item => item.age>19);
    },[user])
  return (
    <div>
        <h3>Danh sách đã lọc</h3>
        <ul>
            {filterUser.map(item=>(
                <li key={item.id}>{item.name} (Age: {item.age}) (Gender: {item.gender})</li>
            ))}
        </ul>
    </div>
  )
}
