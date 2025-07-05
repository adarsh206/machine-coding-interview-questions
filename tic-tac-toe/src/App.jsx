
import { useState } from 'react'
import './App.css'

function App() {

  const [matrix, setMatrix] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleUserClick = (e) => {
    const pos = e.target.id;
    console.log(pos)
    // X, O, X, O
  }

  return (
   <div className='App'>
    <h1>Tic Tac Toe</h1>
    <div className='board' onClick={handleUserClick}>
      {
        matrix.map((item, index) => (
          <div key={index} id={index} className='box'>
            {item}
          </div>
        ))
      }
    </div>
    <div className='game-info'>
        <button>Reset</button>
        <div className='next-player'>Next Player: X</div>
        <div className='winner'>Player X won the game</div>
    </div>
   </div>
  )
}

export default App
