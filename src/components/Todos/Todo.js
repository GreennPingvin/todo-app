import { RiTodoFill } from 'react-icons/ri'
import styles from './Todo.module.css'

export default function Todo(props) {
  const { id, todo, onDoubleClick } = props
  return (
    <div
      id={id}
      className={styles.todo}
      onDoubleClick={() => onDoubleClick(id)}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
    </div>
  )
}
