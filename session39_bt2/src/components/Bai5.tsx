import React, { useCallback, useState } from 'react'

export default function Bai5() {
    const [todo, setTodo] = useState<string[]>([]);
    const handleChange = useCallback((newTodo: string)=>{
        setTodo(prevTodo => [...prevTodo, newTodo]);
    },[]);

    const handlePress = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter' && e.currentTarget.value.trim() !== ' '){
            handleChange(e.currentTarget.value);
            e.currentTarget.value = '';
        } 
    }
  return (
    <div>
        <input type="text" onKeyPress={handlePress} />
        <ul>
            {todo.map((item,index)=>
            <li key={index}>{item}</li>
            )}
        </ul>
    </div>
  )
}
