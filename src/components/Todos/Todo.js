import styles from './Todo.module.css'

export default function Todo(props) {
  const { todo } = props
  return (
    <div className={styles.todo}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}
