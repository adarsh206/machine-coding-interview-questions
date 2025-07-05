
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

  const onDragOver = (e) => {
    e.preventDefault();
  }

  const handleDragNDrop = (status) => {
    let copyTask = [...tasks];
    copyTask = copyTask.map((item) => {
      if(dragTask.id === item.id){
        item.status = status
      }
      return item;
    });
    setTasks(copyTask);
    setDragTask(null);
  }

  const handleOnDrop = (e) => {

    const status =  e.target.getAttribute('data-status')
    console.log('dropping', status);

    if(status == TODO){
      handleDragNDrop(TODO);
    }
    else if(status == DOING){
      handleDragNDrop(DOING);
    }
    else if(status == DONE){
      handleDragNDrop(DONE)
    }
  }

  const deleteTask = (item) => {
    let copyTask = [...tasks];
    copyTask = copyTask.filter((task) => task.id !== item.id);
    setTasks(copyTask);

  }

  const updateTask = () => {

  }

  return (
 <div className='App'>
  <h1>Task Manager</h1>
  <input type='text' onChange={handleChange} value={value} onKeyDown={handleKeyDown}/>
  <div className='board'>

    <div className="todo" data-status= {TODO} onDrop={handleOnDrop} onDragOver={onDragOver}>
      <h2 className='todo-col'>Todo</h2>
      {
        tasks.length > 0 && tasks.map((task) => (
        task.status === TODO && <div className="task-item" draggable key={task.id} onDrag={(e) => handleDrag(e, task)}>
        {task.title}
        <div className="btns">
          <span className='btn' onClick={() => updateTask(task)}>✏️</span>
          <span className='btn' onClick={() => deleteTask(task)}>❌</span>
        </div>
      </div>
        ))
      }
      
    </div>

    <div className="doing" onDrop={handleOnDrop} onDragOver={onDragOver} data-status= {DOING}>
      <h2 className='doing-col'>Doing</h2>
      {
        tasks.length > 0 && tasks.map((task) => (
        task.status === DOING && <div className="task-item" draggable  key={task.id} onDrag={(e) => handleDrag(e, task)}>
        {task.title}
        <div className="btns">
          <span className='btn'>✏️</span>
          <span className='btn' onClick={() => deleteTask(task)}>❌</span>
        </div>
      </div>
        ))
      }
    </div>

    <div className="done" data-status= {DONE} onDrop={handleOnDrop} onDragOver={onDragOver}>
      <h2 className='done-col'>Done</h2>
      {
        tasks.length > 0 && tasks.map((task) => (
        task.status === DONE && <div className="task-item" draggable key={task.id} onDrag={(e) => handleDrag(e, task)}>
        {task.title}
        <div className="btns">
          <span className='btn'>✏️</span>
          <span className='btn' onClick={() => deleteTask(task)}>❌</span>
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
