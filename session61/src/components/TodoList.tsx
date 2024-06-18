import React, {useState} from 'react'
import { FaPen, FaTrash  } from "react-icons/fa";
import "./style.scss"
const [tasks, setTasks] = useState([
  { id: 1, text: 'Quét nhà', completed: false },
  { id: 2, text: 'Giặt quần áo', completed: true },
  { id: 3, text: 'Nấu cơm', completed: false },
]);

const [inputValue, setInputValue] = useState('');
const [isEditing, setIsEditing] = useState(false);
const [editTaskId, setEditTaskId] = useState(null);
const [filter, setFilter] = useState('Tất cả');

const handleInputChange = (e:any) => {
  setInputValue(e.target.value);
};

const handleAddTask = () => {
  if (inputValue.trim()) {
    if (isEditing) {
      setTasks(tasks.map(task => 
        task.id === editTaskId ? { ...task, text: inputValue } : task
      ));
      setIsEditing(false);
      setEditTaskId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
    }
    setInputValue('');
  }
};

const handleEditTask = (id:any) => {
  const taskToEdit = tasks.find(task => task.id === id);
  if (taskToEdit) {
    setInputValue(taskToEdit.text);
    setIsEditing(true);
    setEditTaskId(id);
  }
};

const handleDeleteTask = (id: any) => {
  setTasks(tasks.filter(task => task.id !== id));
};

const handleToggleComplete = (id:any) => {
  setTasks(tasks.map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
};

const handleDeleteCompletedTasks = () => {
  setTasks(tasks.filter(task => !task.completed));
};

const handleDeleteAllTasks = () => {
  setTasks([]);
};

const handleFilterChange = (filter:any) => {
  setFilter(filter);
};

const filteredTasks = tasks.filter(task => {
  if (filter === 'Hoàn thành') return task.completed;
  if (filter === 'Đang thực hiện') return !task.completed;
  return true;
});
export default function TodoList() {
  return (
    <div className='container'>
    <h2 className='title'>Quản lý công việc</h2>
    <div className='input-group'>
      <input
        type='text'
        placeholder='Nhập tên công việc'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className='add-button' onClick={handleAddTask}>
        {isEditing ? 'Cập nhật' : 'Thêm công việc'}
      </button>
    </div>
    <div className='filter-group'>
      <button
        className={`filter-button ${filter === 'Tất cả' ? 'active' : ''}`}
        onClick={() => handleFilterChange('Tất cả')}
      >
        Tất cả
      </button>
      <button
        className={`filter-button ${filter === 'Hoàn thành' ? 'active' : ''}`}
        onClick={() => handleFilterChange('Hoàn thành')}
      >
        Hoàn thành
      </button>
      <button
        className={`filter-button ${filter === 'Đang thực hiện' ? 'active' : ''}`}
        onClick={() => handleFilterChange('Đang thực hiện')}
      >
        Đang thực hiện
      </button>
    </div>
    <ul className='todo-list'>
      {filteredTasks.map(task => (
        <li key={task.id} className='todo-item'>
          <input
            type='checkbox'
            checked={task.completed}
            onChange={() => handleToggleComplete(task.id)}
          />
          <span>{task.text}</span>
          <FaPen className='icon edit-icon' onClick={() => handleEditTask(task.id)} />
          <FaTrash className='icon delete-icon' onClick={() => handleDeleteTask(task.id)} />
        </li>
      ))}
    </ul>
    <div className='action-group'>
      <button className='delete-completed' onClick={handleDeleteCompletedTasks}>
        Xóa công việc hoàn thành
      </button>
      <button className='delete-all' onClick={handleDeleteAllTasks}>
        Xóa tất cả công việc
      </button>
    </div>
  </div>
  )
}
