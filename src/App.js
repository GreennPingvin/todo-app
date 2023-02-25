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
    setTodoList([...todoList, todo])
  }
  function deleteTodoHandler(todoId) {
    setTodoList(todoList.filter((todo) => todo.id !== todoId))
  }

  function toggleTodoHandler(todoId) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo },
      ),
    )
  }
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  )
}

export default App
