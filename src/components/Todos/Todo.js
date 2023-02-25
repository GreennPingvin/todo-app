export default function Todo(props) {
  const { todo } = props
  return (
    <>
      <p>{todo.text}</p>
    </>
  )
}
