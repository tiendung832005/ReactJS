import React, { useState, useEffect } from 'react';

interface ITodoList {
  id: number;
  name: string;
  completed: boolean;
}

const TodoList = () => {
  const [todolist, setTodolist] = useState<ITodoList[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const data = localStorage.getItem("todolist");
    if (data) {
      setTodolist(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  const createJob = () => {
    if (inputValue.trim() === "") {
      alert("Không được để trống tên.");
      return;
    }

    const newJob: ITodoList = {
      id: Math.floor(Math.random() * 9999999999999),
      name: inputValue,
      completed: true
    };

    setTodolist([...todolist, newJob]);
    setInputValue("");
  };

  const deleteJob = (id: number) => {
    const confirmed = window.confirm(`Bạn có xác nhận xóa công việc không?`);
    if (confirmed) {
      setTodolist(todolist.filter(job => job.id !== id));
    }
  };

  return (
    <div>
      <input 
        id="input" 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={createJob}>Add</button>
      <div id="body">
        {todolist.map((job) => (
          <div key={job.id} className="check-box">
            <input 
              type="checkbox" 
              checked={job.completed} 
              readOnly 
            /> {job.name}
            <span className="material-symbols-outlined icon pen" onClick={() => alert("Feature to update job")}>edit</span>
            <span className="material-symbols-outlined delete" onClick={() => deleteJob(job.id)}>delete</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
