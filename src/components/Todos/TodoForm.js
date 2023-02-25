export default function TodoForm(props) {
  const { onClick, onInputChange } = props
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter new todo"
          onChange={onInputChange}
        />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  )
}
