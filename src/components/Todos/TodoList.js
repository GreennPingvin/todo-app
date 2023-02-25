import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList(props) {
  const { todoList } = props
  return (
    <div className={styles.todoListContainer}>
      {!todoList.length && <h2>Todo list is empty</h2>}
      {todoList.map((todo, i) => (
        <Todo todo={todo} key={i} />
      ))}
    </div>
  )
}
