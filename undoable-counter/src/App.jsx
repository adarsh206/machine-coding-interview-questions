
import { useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);

  const maintainHistory = (key, prev, curr) => {
    console.log(key, prev, curr)
    const obj = {
      action: key,
      prev,
      curr
    }
    const copyHistory = [...history];
    copyHistory.unshift(obj);
    setHistory(copyHistory);
  }
 
  const handleClick = (key) => {
    const val = parseInt(key)
    console.log(key);
    maintainHistory(key, value, val + value);
    setValue((existingValue) => existingValue + val);
  }

  const handleUndo = () => {
    // Stack LIFO
  }

  return (
  <div className='App'>
    <h1>Undoable Counter</h1>
    <div className='action-btn'>
      <button onClick={handleUndo}>Undo</button>
      <button>Redo</button>
    </div>

    <div className='user-action'>
    {
      [-100, -10, -1].map((btn) => {
        return (
          <button onClick={() => handleClick(btn)}>
            {btn}
          </button>
        )
      })
    }
    <div style={{ fontSize: 40 }}>
      {value}
    </div>
     {
      ['+1', '+10', '+100'].map((btn) => {
        return (
          <button onClick={() => handleClick(btn)}>
            {btn}
          </button>
        )
      })
    }
    </div>
    <div className='history'>
      {
        history.map((item) => {
          return <div className='row'>
            <div>{item.action}</div>
            <div>
              {
                `[${item.prev} → ${item.curr}]`
              }
            </div>
          </div>
        })
      }
    </div>
  </div>
  )
}

export default App
