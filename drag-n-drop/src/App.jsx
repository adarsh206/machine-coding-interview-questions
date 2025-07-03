
import { useState } from 'react'
import './App.css'

function App() {

  const TODO = 'TODO';
  const DOING = 'DOING';
  const DONE = 'DONE';

  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [dragTask, setDragTask] = useState(null);

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    console.log(e.keyCode);
    if(e.keyCode === 13){
      // Enter Pressed
      const obj = {
        title: value,
        status: TODO,
        id: Date.now()
      }
      setTasks((prev) => [...prev, obj]);
      setValue('')
    }
  }

  const handleDrag = (e, task) => {
    setDragTask(task)
  }

 console.log(dragTask)
 
  return (
 <div className='App'>
  <h1>Task Manager</h1>
  <input type='text' onChange={handleChange} value={value} onKeyDown={handleKeyDown}/>
  <div className='board'>
    <div className="todo">
      <h2 className='todo-col'>Todo</h2>
      {
        tasks.length > 0 && tasks.map((task) => (
        task.status === TODO && <div className="task-item" draggable key={task.id} onDrag={(e) => handleDrag(e, task)}>
        {task.title}
        <div className="btns">
          <span className='btn'>✏️</span>
          <span className='btn'>❌</span>
        </div>
      </div>
        ))
      }
      
    </div>

    <div className="doing">
      <h2 className='doing-col'>Doing</h2>
      {
        tasks.length > 0 && tasks.map((task) => (
        task.status === DOING && <div className="task-item" draggable  key={task.id}>
        {task.title}
        <div className="btns">
          <span className='btn'>✏️</span>
          <span className='btn'>❌</span>
        </div>
      </div>
        ))
      }
    </div>

    <div className="done">
      <h2 className='done-col'>Done</h2>
      {
        tasks.length > 0 && tasks.map((task) => (
        task.status === DONE && <div className="task-item" draggable key={task.id}>
        {task.title}
        <div className="btns">
          <span className='btn'>✏️</span>
          <span className='btn'>❌</span>
        </div>
      </div>
        ))
      }
    </div>
  </div>
 </div>
  )
}

export default App
