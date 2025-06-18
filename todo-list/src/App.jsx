
import { useState } from 'react';
import './App.css'

function App() {

  const [input, setInput] = useState('');
  const [todoList, setTodosList] = useState([]);

  const addTodoItem = () => {
    if(input.trim() === "") return;

    const item = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false
    }
    setTodosList((prev) => [...prev, item]);
    setInput('');
  }

  const toggleCompleted = (id) => {

    setTodosList(
      todoList.map(t => {
        if(t.id === id){
          return {
            ...t,
            completed: !t.completed,
          }
        }
        else{
          return t;
        }
      })
    )
    
  }

  const deleteTodo = (id) => {

    setTodosList(
      todoList.filter((t) => (t.id !== id))
    )
  }

  return (
  <div className='App'>
    <h1>Todo List</h1>
    <input className='input' type='text' placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)}/>
    <button className='button' onClick={() => addTodoItem()}>Add</button>
    <ul>
      {
        todoList.map((todo) => <li key={todo.id} className='list'>
          <input type='checkbox' checked={todo.completed} onChange={() => toggleCompleted(todo.id)}/>
          <span className={todo.completed ? "strikeThrough" : ""}>{todo.text}</span>
          <button className='delete' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>)
      }
    </ul>
  </div>
  )
}

export default App
