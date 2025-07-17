
import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('');
  
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
  }

  return (
  <div className='App'>
   <h1>Nested Comments</h1>
   {/** input box */}
   <div>
      <input type='text' placeholder='Your Comments...' className='input-box'
      onChange={handleInputChange} value={input}/>
   </div>

   {/** Handle Button */}
   <div>

   </div>

   {/** Nested Comments */}
   <div>

   </div>
  </div>
  )
}

export default App
