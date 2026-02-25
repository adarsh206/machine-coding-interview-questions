
import { useState } from 'react'
import './App.css'

function App() {
 
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");

  return (
   <div className='min-h-screen bg-white'>
      <div className='w-9/12 mx-auto'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>🎨 Gradient Generator</h1>
          <div className='flex gap-4'>
            <input placeholder='12'
            className='border border-slate-300 bg-white rounded-lg w-[100px] p-2'/>
            
            <select className='border border-slate-300 bg-white rounded-lg w-[100px] p-2'>
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
        </div>
      </div>
   </div>
  )
}

export default App
