
import './App.css'
import 'animate.css'
import { Plus } from 'lucide-react'

function App() {
  

  return (
    <div className='flex items-center justify-center h-screen overflow-hidden p-12'>
      <div className='bg-white shadow-xl border border-slate-200 w-full h-full rounded-4xl flex p-8 gap-8'>
        <div>
          <button className='bg-slate-900 text-white w-12 h-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-950 active:scale-80 transition duration-200'>
            <Plus />
          </button>
        </div>

        {/* this div gives the thin separate line between two div */}
        <div className='border-r border-r-gray-200'/>

        <div className='flex-1'>
          <h1 className='text-2xl font-medium'>Notes</h1>
        </div>
      </div>
    </div>
  )
}

export default App
