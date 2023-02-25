import Todo from './Todo'

export default function TodoList(props) {
  const { todoList } = props
  return (
    <div>
      {todoList.map((todo, i) => (
        <Todo todo={todo} key={i} />
      ))}
    </div>
  )
}
