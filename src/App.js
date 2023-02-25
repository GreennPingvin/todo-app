import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

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
  function resetTodosHandler() {
    setTodoList([])
  }

  function deleteCompletedTodosHandler() {
    setTodoList(todoList.filter((todo) => !todo.isCompleted))
  }
  const completedTodosCount = todoList.filter(
    (todo) => todo.isCompleted,
  ).length
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todoList.length > 0 && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 &&
        (completedTodosCount === 1 ? (
          <h2>You have completed 1 todo</h2>
        ) : (
          <h2>You have completed {completedTodosCount} todos</h2>
        ))}
    </div>
  )
}

export default App
