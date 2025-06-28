
import { useState } from 'react'
import './App.css'


//[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
const getNums = () => {
  const list = [];
  for(let i = 1; i <= 8; i++){
    list.push(i);
    list.push(i);
  }
  return list;
}

function App() {

  const [nums, setNums] = useState(getNums());
  const [stage, setStage] = useState('init')

  const randomNums = () => {
    const copyNums = [...nums];
    return copyNums.sort(() => Math.random() - 0.5);
  }

  const handleStart = () => {
    setStage('start');
    setNums(randomNums())
  }

  console.log('nums', nums)
  return (
   <div className='App'>
    <h1>Memory Game</h1>
    {stage === 'init' && <button onClick={handleStart}>Play Game</button>}
    {
      stage === "start" && 
      <div className='game'>
        <div className='cards'>
          Hello
        </div>
      </div>
    }
    {
      stage === "win" && 
      <div>
        <h1>You won the Game !</h1>
        <button>Play Again</button>
      </div>
    }
   </div>
  )
}

export default App
