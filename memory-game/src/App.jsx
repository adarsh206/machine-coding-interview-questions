
import { useState } from 'react'
import './App.css'

function App() {

  const [stage, setStage] = useState('init')

  return (
   <div className='App'>
    <h1>Memory Game</h1>
    {stage === 'init' && <button>Play Game</button>}
   </div>
  )
}

export default App
