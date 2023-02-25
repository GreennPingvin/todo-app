import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todoList, setTodoList] = useState([])
  function addTodoHandler(text) {
    setTodoList([...todoList, text])
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App
