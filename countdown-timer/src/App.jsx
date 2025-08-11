
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {

    if(hours < 0 || minutes < 0 || seconds < 0){
      alert("Invalid Input");
      return;
    }
    else{
      setIsStart(true);
    }

  }

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours, timerId);
  }

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId)
  }

  const handleReset = () => {
    setIsStart(false);
    resetTimer();
    
  }

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
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

  const runTimer = (sec, min, hr, tid) => {
    if(sec > 0){
      setSeconds((s) => s - 1);
    }
    else if(sec === 0 && min > 0){
      setMinutes((m) => m - 1);
      setSeconds(59);
    }
    else{
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if(sec === 0 && min === 0 && hr === 0){
      handleReset();
      alert("Timer is finished");
      clearInterval(tid);
      return
    }
  }

  useEffect(() => {
    let tid;
    if(isStart){
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid)
      }, 1000)
      setTimerId(tid)
    }

    return () => {
      clearInterval(tid);
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
            <div>{hours < 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
            <span>:</span>
            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
          </div>

          <div className="action-box">
            {
              !isPaused && <button className='timer-button' onClick={handlePause}>Pause</button>
            }
             {
              isPaused && <button className='timer-button' onClick={handleResume}>Resume</button>
            }
            
            <button className='timer-button' onClick={handleReset}>Reset</button>
          </div>
        </div>
      )
     }

    </div>
  )
}

export default App
