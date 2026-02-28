

import './App.css'
import { Plus, Printer } from 'lucide-react';
import { Tooltip } from 'antd'

function App() {
  

  return (
   <div className='bg-gray-200 min-h-screen'>
    <div>

    </div>

    <div className='fixed -translate-y-1/2 top-1/2 left-0 bg-white rounded-r-lg p-4 flex flex-col gap-4 shadow-lg'>
        <Tooltip title="Create a new invoice">
          <button className='bg-blue-500 text-white p-2 rounded hover:scale-105 transition duration-300 active:scale-80'>
            <Plus />
          </button>
        </Tooltip>

        <Tooltip title="Print your invoice">
          <button className='bg-blue-500 text-white p-2 rounded hover:scale-105 transition duration-300 active:scale-80'>
            <Printer />
          </button>
        </Tooltip>
  
        
     
    </div>
   </div>
  )
}

export default App
