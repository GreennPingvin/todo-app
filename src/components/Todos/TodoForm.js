import { useState } from 'react'
import TodoList from './TodoList'

export default function TodoForm() {
  const [inputText, setInputText] = useState('')
  const [todoList, setTodoList] = useState([])
  function onInputChange(e) {
    setInputText(e.target.value)
  }
  function onButtonClick() {
    setTodoList([...todoList, { text: inputText }])
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter new todo"
          onChange={onInputChange}
        />
        <button type="submit" onClick={onButtonClick}>
          Submit
        </button>
      </form>
      <TodoList todoList={todoList} />
    </div>
  )
}
