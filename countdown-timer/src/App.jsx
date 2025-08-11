
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    setIsStart(true);
  }

  const handleReset = () => {
    setIsStart(false);
  }

  const handleInput = (e) => {
    
    const value = parseInt(e.target.value);
    const id = e.target.id;

    if(id === 'hours'){
      setHours(value);
    }
    else if(id === 'minutes'){
      setMinutes(value);
    }
    else{
      setSeconds(value);
    }
  }

  useEffect(() => {
    let tid;
    if(isStart){
      tid = setInterval(() => {

      }, 1000)
      setTimerId(tid)
    }
  }, [isStart, hours, minutes, seconds])

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      {
        !isStart && (
          <div className="input-container">
        <div className="input-box">
          <input id='hours' placeholder='HH' onChange={handleInput}/>
          <input id='minutes' placeholder='MM' onChange={handleInput}/>
          <input id='seconds' placeholder='SS' onChange={handleInput}/>
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
            <button className='timer-button' onClick={handleReset}>Reset</button>
          </div>
        </div>
      )
     }

    </div>
  )
}

export default App
