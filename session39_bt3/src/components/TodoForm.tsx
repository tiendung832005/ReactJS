import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
        <div className="form-outline flex-fill">
          <input
            type="text"
            id="form2"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <label className="form-label" htmlFor="form2">Nhập tên công việc</label>
        </div>
        <button type="submit" className="btn btn-info ms-2">Thêm</button>
      </form>
    </div>
  );
}