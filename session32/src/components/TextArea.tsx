import React, { useState } from 'react'

export default function TextArea() {
    const [feedback, setFeedback] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log("giá trị: ", e.target.value)
        setFeedback(e.target.value);
    }
  return (
    <div>TextArea
        <textarea onChange={handleChange} name="" id="">
        </textarea>
    </div>
  )
}
