import React from 'react';
import './App.css'
import Todos from './components/Todos';
import Input from './components/Input';

function App() {
  const [todos,setTodos]=React.useState(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  })
  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div>
      <h3>Todo list app</h3>
      <Input setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
