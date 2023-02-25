import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'

export default function Todo(props) {
  const { todo, onDoubleClick} = props
  return (
    <div
      className={styles.todo}
      onDoubleClick={() => onDoubleClick(todo.id)}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
    </div>
  )
}
