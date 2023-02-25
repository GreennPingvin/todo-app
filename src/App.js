import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [todoList, setTodoList] = useState([])
  function addTodoHandler(text) {
    const todo = {
      id: uuidv4(),
      text,
      isCompleted: false,
    }
    console.log(todo)
    setTodoList([...todoList, todo])
  }
  function deleteTodoHandler(todoId) {
    setTodoList(todoList.filter((todo) => todo.id !== todoId))
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todoList={todoList} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
