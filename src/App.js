import { useState } from 'react'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [todoList, setTodoList] = useState([])
  function onInputChange(e) {
    setInputText(e.target.value)
  }
  function onButtonClick(e) {
    e.preventDefault()
    setTodoList([...todoList, { text: inputText }])
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm
        onClick={onButtonClick}
        onInputChange={onInputChange}
      />
      <TodoList todoList={todoList} />
    </div>
  )
}

export default App
