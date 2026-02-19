
import './App.css'
import { Select } from 'antd'
import { Trash2 } from 'lucide-react'
import 'animate.css'

function App() {
 

  return (
   <div className='py-16 min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900'>
    <div className='animate__animated animate__fadeIn w-9/12 mx-auto p-8 bg-slate-800 min-h-[2000px] border border-slate-600 rounded-xl overflow-y-auto'>
      <h1 className='text-white/60 text-5xl font-bold text-center'>Book Library</h1>
      
      <div className='grid grid-cols-3 gap-8 mt-8'>
        
        <div className='bg-slate-900 border border-slate-600 p-4 rounded-lg overflow-hidden'>
            <h1 className='text-orange-600 text-4xl font-bold'>Unread</h1>
            <p className='text-white text-9xl font-bold animate__animated animate__slideInUp'>12</p>
        </div>

        <div className='bg-slate-900 border border-slate-600 p-4 rounded-lg'>
            <h1 className='text-green-500 text-4xl font-bold'>Reading</h1>
            <p className='text-white text-9xl font-bold'>1</p>
        </div>

        <div className='bg-slate-900 border border-slate-600 p-4 rounded-lg'>
            <h1 className='text-amber-500 text-4xl font-bold'>Completed</h1>
            <p className='text-white text-9xl font-bold'>40</p>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 mt-8'>
        {
          Array(20).fill(0).map((item, index) => (
            <div key={index} className='bg-slate-900 border border-slate-600 p-4 rounded-lg'>
              <img src='/book1.jpg'  className='w-full h-[170px] object-cover rounded-lg'/>
              <h1 className='text-white text-lg font-medium mt-2'>The lean startup</h1>
              <label className='text-gray-500 text-white/60'>19 February 2026, 10:00 AM</label>
              <div className='flex justify-between items-center mt-3'>
                <Select className='w-[100px]' defaultValue="unread">
                  <Select.Option value="unread">Unread</Select.Option>
                  <Select.Option value="reading">Reading</Select.Option>
                  <Select.Option value="completed">Completed</Select.Option>
                </Select>
                <Trash2 className="text-rose-500 active:scale-80 duration-300 hover:scale-125" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
   </div>
  )
}

export default App
