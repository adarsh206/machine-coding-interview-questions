
import './App.css'
import "animate.css"
import { Button } from "antd"
import { Plus } from 'lucide-react'

function App() {
  

  return (
   <div className='bg-gray-200 min-h-screen py-12'>
      <div className='rounded-2xl shadow-lg p-8 bg-white w-10/12 mx-auto'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold'>Private Image Galley</h1>
          <Button size='large' type='primary' icon={<Plus className='w-4 h-4'/>}>Add Image</Button>
        </div>
      </div>
   </div>
  )
}

export default App
