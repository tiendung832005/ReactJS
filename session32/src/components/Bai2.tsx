import React, { useState } from 'react'

export default function Bai2() {
    const [color, setColor] = useState<string>("")
    const [displayColor, setDisplayColor] = useState<string>("");

    const handleSubmit = () => {
        setDisplayColor(color);
    };
  return (
    <div className="App">
      <h1>Color: </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="colorInput">Color: </label>
        <input
          type="text"
          id="colorInput"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div
        id="colorDisplay"
        style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', display: 'inline-block', backgroundColor: displayColor }}
      >
        {displayColor && `Mã màu: ${displayColor}`}
      </div>
    </div>
  )
}