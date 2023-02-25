import styles from './Todo.module.css'

export default function Todo(props) {
  const { todo, onDoubleClick } = props
  return (
    <div className={styles.todo} onDoubleClick={onDoubleClick}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}
