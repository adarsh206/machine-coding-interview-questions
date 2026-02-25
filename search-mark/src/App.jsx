
import { useState } from 'react'
import './App.css'

function App() {
  
  const [content, setContent] = useState('');
  const [search, setSearch] = useState('');


  return (
    <div className='bg-gray-200 min-h-screen'>
      <div className='sticky top-0 left'>
        <input className='p-6 w-full bg-white focus:outline-none text-lg'
        placeholder='Search content here'
        value={search} onChange={(e) => setSearch(e.target.value.trim())}/>
      </div>

      <div className='w-8/12 mx-auto p-12 space-y-6'>
      <h1 className='text-3xl font-bold'>Content Finder</h1>
        <textarea rows={3} className='bg-white rounded-lg w-full p-6 focus:outline-none'
        value={content} placeholder='Paste your content here...' onChange={(e) => setContent(e.target.value.trim())}/>
        <div className='w-full bg-white rounded-lg p-6 min-h-[1000px]'>
          <p className='text-gray-600 text-justify'>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default App
