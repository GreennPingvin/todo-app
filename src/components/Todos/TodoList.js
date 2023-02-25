import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList(props) {
  const { todoList, deleteTodo } = props
  return (
    <div className={styles.todoListContainer}>
      {!todoList.length && <h2>Todo list is empty</h2>}
      {todoList.map((todo) => (
        <Todo todo={todo} key={todo.id} onDoubleClick={deleteTodo} />
      ))}
    </div>
  )
}
