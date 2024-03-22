// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import TodoItems from './components/TodoItems';
import './style.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    event.preventDefault();

    setTodos([...todos, todoInput]);
    setTodoInput('');
  };

  function deleteTodo(index) {
    setTodos([...todos.filter((value, i) => index !== i)]);
  }

  return (
    <div className="container">
      <div className="box">
        <div className="particular-items">
          <h2 className="the-project">Tasks</h2>
        </div>

        <div className="tasks" id="theTasks">
          <form id="addTasks" onSubmit={handleKeyPress}>
            <input
              className="task-prompt"
              type="text"
              maxLength="30"
              placeholder="+ Add a task, press Enter to save."
              value={todoInput}
              onChange={handleInputChange}
              required
            />
          </form>
          {todos.map((todo, index) => (
            <TodoItems
              key={index}
              value={todo}
              onDelete={() => deleteTodo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
