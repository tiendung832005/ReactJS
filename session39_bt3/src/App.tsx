import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ConfirmModal from './components/ConfirmModal';
import WarningModal from './components/WarningModal';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Quét nhà', completed: true },
    { id: 2, text: 'Giặt quần áo', completed: false },
  ]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const addTodo = (text: string) => {
    if (text.trim() === '') {
      setShowWarningModal(true);
      return;
    }
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = () => {
    if (selectedTodo !== null) {
      setTodos(todos.filter(todo => todo.id !== selectedTodo.id));
      setShowConfirmModal(false);
      setSelectedTodo(null);
    }
  };


  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <TodoForm addTodo={addTodo} />
                  {/* <TodoList></TodoList> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showConfirmModal && selectedTodo && (
          <ConfirmModal 
            todo={selectedTodo} 
            onCancel={() => setShowConfirmModal(false)} 
            onConfirm={deleteTodo} 
          />
        )}
        {showWarningModal && <WarningModal onClose={() => setShowWarningModal(false)} />}
      </section>
    </div>
  );
}
