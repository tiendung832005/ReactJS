import React, { useState } from 'react'

export default function Bai4() {
    const [progress, setProgress] = useState<number>(0);
    const [submittedProgress, setSubmittedProgress] = useState<any>(null);

    const handleSubmit = () => {
        setSubmittedProgress(progress);
      };
  return (
    <div>
    <header >
      <form onSubmit={handleSubmit}>
        <label>
          <h2>Tiến độ hoàn thành: {submittedProgress}%</h2>
          <input
            type="range"
            value={progress}
            min="0"
            max="100"
          />
        </label>
        <span>{progress}%</span>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedProgress !== null && (
        <div>
        </div>
      )}
    </header>
  </div>
  )
}
