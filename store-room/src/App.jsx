
import './App.css'
import { Input } from 'antd'

function App() {
  

  return (
    <div className='bg-gray-200 min-h-screen py-12'>
      <div className='w-10/12 bg-white rounded-4xl shadow-lg p-8 mx-auto'>
        <div className='flex justify-between items-center'>
          <h1>Store Room</h1>
          <Input size='large' placeholder='Search this store'
          className='!w-lg'/>
        </div>
      </div>
    </div>
  )
}

export default App
