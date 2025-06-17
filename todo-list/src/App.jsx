
import { useState } from 'react';
import './App.css'

function App() {

  const [input, setInput] = useState('');
  const [todoList, setTodosList] = useState([]);

  const addTodoItem = () => {
    const item = {
      id: 0,
      text: input,
      completed: true
    }
    setTodosList((prev) => [...prev, item]);
    setInput('');
  }

  const toggleCompleted = (id) => {

    
  }

  return (
  <div className='App'>
    <h1>Todo List</h1>
    <input type='text' placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)}/>
    <button onClick={() => addTodoItem()}>Add</button>
    <ul>
      {
        todoList.map((todo) => <li key={todo.id}>
          <input type='checkbox' checked={todo.completed} onChange={() => toggleCompleted(todo.id)}/>
          <span className={todo.completed ? "strikeThrough" : ""}>{todo.text}</span>
          <button>Delete</button>
        </li>)
      }
    </ul>
  </div>
  )
}

export default App
