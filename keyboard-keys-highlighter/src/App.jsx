
import { useEffect } from 'react'
import './App.css'

const keys = [
  [
    { label : "1", code : "Digit1" },
    { label : "2", code : "Digit2" },
    { label : "3", code : "Digit3" },
    { label : "4", code : "Digit4" },
    { label : "5", code : "Digit5" },
    { label : "6", code : "Digit6" },
    { label : "7", code : "Digit7" },
    { label : "8", code : "Digit8" },
    { label : "9", code : "Digit9" },
    { label : "0", code : "Digit0" },
    {},
]
]

function App() {

  const onkeyDown = (e) => {
    console.log(e.code)
  }

  useEffect(() => {
    window.addEventListener("keydown", onkeyDown)
  }, [])

  return (
  <div className='text-center text-2xl font-bold'>
    <h1>Keyboard Keys Highlighter</h1>
  </div>
  )
}

export default App
