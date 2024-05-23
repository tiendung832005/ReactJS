import React, { useMemo, useState } from 'react'

export default function Bai4() {
    const [random, setRandom] = useState<number>(0);

    const getRandom = () => {
        return Math.floor(Math.random() *100)+1;
    };
    const newNumber = useMemo(()=> getRandom(),[]);

    const handleChange = () =>{
        setRandom(newNumber);
    }
  return (
    <div>
        <p>Number Random: {random}</p>

        <button onClick={handleChange}>Generate</button>
    </div>
  )
}
