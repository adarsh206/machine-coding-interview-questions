
import { useState } from 'react'
import './App.css'

function App() {

  const [isStart, setIsStart] = useState(false);

  const handleStart = () => {
    setIsStart(true);
  }

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      {
        !isStart && (
          <div className="input-container">
        <div className="input-box">
          <input id='hours' placeholder='HH' />
          <input id='minutes' placeholder='MM' />
          <input id='seconds' placeholder='SS' />
        </div>
        <button className='timer-button' onClick={handleStart}>Start</button>
      </div>
        )
      }

     {
      isStart && (
        <div className="show-container">
          <div className="timer-box">
            <div>10</div>
            <span>:</span>
            <div>11</div>
            <span>:</span>
            <div>12</div>
          </div>

          <div className="action-box">
            <button className='timer-button'>Pause</button>
            <button className='timer-button'>Reset</button>
          </div>
        </div>
      )
     }

    </div>
  )
}

export default App
