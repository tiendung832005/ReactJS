import React from 'react';

interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: TodoType;
  toggleTodo: (id: number) => void;
  confirmDeleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, confirmDeleteTodo }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded" style={{ backgroundColor: '#f4f6f7' }}>
      <div>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.completed ? <s>{todo.text}</s> : <span>{todo.text}</span>}
      </div>
      <div className="d-flex gap-3">
        <i className="fas fa-pen-to-square text-warning"></i>
        <i className="far fa-trash-can text-danger" onClick={() => confirmDeleteTodo(todo.id)}></i>
      </div>
    </li>
  );
};

export default TodoItem;

