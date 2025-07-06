
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [twoDMatrix, setTwoDMatrix] = useState([]); // 100 cells

  const prepareTwoDMatrix = () => {

  }

  useEffect(() => {
    prepareTwoDMatrix()
  }, [])


  return (
 <div className='App'>
  <h1>Selectable Grid</h1>
  <div className="grid">
    <div className="board">

    </div>
  </div>
 </div>
  )
}

export default App
