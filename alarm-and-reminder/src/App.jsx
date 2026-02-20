
import './App.css'
import 'animate.css'
import { Plus } from 'lucide-react'

function App() {
  

  return (
  <div className='bg-gray-200 min-h-screen py-12'>
    <div className='bg-white w-7/12 mx-auto shadow-lg rounded-xl animate__animated animate__fadeIn'>
      <img src='/images/banner.png'/>
      <div className='p-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl font-bold'>Coding Alarm</h1>
          <button className='flex items-center justify-center px-8 py-2 bg-rose-500 hover:bg-rose-600 transition duration-300 active:scale-80 gap-1 text-white rounded font-medium'>
            <Plus className='w-4 h-4'/>Add Alarm
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
