
import { useState } from 'react';
import './App.css'

function App() {

  const [inputText, setInputText] = useState('');
  const [chips, setChips] = useState([]);

  // Function to handle key down events
  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && inputText.trim() !== '') {
      // logic to add chips
      setChips((prev) => [...prev, inputText]);
      setInputText('');
    }
  }

  const handleDeleteChip = (index) => {
    // logic to delete chips
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    setChips(copyChips);
  }

  return (
  <div className='App' style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "40px 0"}}>
    <h1>Chips Input</h1>
    <input type='text' placeholder='Type a chip and press tag'
    style={{ padding: "8px", width: "200px"}}
    value={inputText}
    onChange={(e) => setInputText(e.target.value)}
    onKeyDown={(e) => handleKeyDown(e)}
    />
    <div style={{ display: "flex", flexWrap: "wrap", width: "300px", marginTop: "10px"}}>
    {
      chips.map((chip, index) => (
        <div key={index} style={{ background: 'gray', margin: "10px", padding: "10px", color: "white", 
        borderRadius: "50px", width: "fit-content", display: "flex", alignItems: "center"}}>
          {chip}
          <button style={{color: "red", marginLeft: "5px"}} onClick={() => handleDeleteChip(index)}>X</button>
          </div>
      ))
    }
    </div>
    </div>
  )
 
}

 export default App

