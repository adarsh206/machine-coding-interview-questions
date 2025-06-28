
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
  const [opened, setOpened] = useState([]);
  const [stage, setStage] = useState('init');

  const randomNums = () => {
    const copyNums = [...nums];
    return copyNums.sort(() => Math.random() - 0.5);
  }

  const handleStart = () => {
    setStage('start');
    setNums(randomNums());
  }

  const handleClick = (num, index) => {
    if(opened.length === 2) return 
    setOpened((prev) => [...prev, index]);
  }

  console.log('opened', opened)

  return (
   <div className='App'>
    <h1>Memory Game</h1>
    {stage === 'init' && <button onClick={handleStart}>Play Game</button>}
    {
      stage === "start" && 
      <div className='game'>
        <div className='cards'>
          {
            nums.map((num, i) => (
              <div key={i} className={`card`} onClick={() => handleClick(num, i)}>
                {num}
              </div>
            ))
          }
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
