function TodoItems({ value, onDelete }) {
  return (
    <div className="to-do">
      <input type="checkbox" />
      <input type="text" maxLength="100" value={value} />
      <img src="close.svg" alt="Delete the task" onClick={() => onDelete()} />
    </div>
  );
}

export default TodoItems;
