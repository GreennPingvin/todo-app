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
      <input
        type="text"
        placeholder="Enter new tod"
        onChange={onInputChange}
      />
      <button type="submit" onClick={onButtonClick}>
        Submit
      </button>
      <TodoList todoList={todoList} />
    </div>
  )
}
