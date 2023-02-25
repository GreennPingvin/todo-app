import { useState } from 'react'
import styles from './TodoForm.module.css'

export default function TodoForm(props) {
  const { addTodo } = props
  const [text, setText] = useState('')
  const [warning, setWarning] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (text) {
      addTodo(text)
      setText('')
      setWarning(false)
    } else {
      setWarning(true)
    }
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder={'Enter new todo'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {warning && <div>Enter new todo</div>}
    </div>
  )
}
