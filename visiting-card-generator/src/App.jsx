
import './App.css'
import { Download, Image } from "lucide-react"

function App() {
 

  return (
  <div className='bg-gray-200 h-screen flex items-center justify-center'>
    <div className='bg-white rounded-xl p-4 gap-x-12 grid grid-cols-4 shadow-lg gap-y-6'>
     <button className='border-blue-600 w-18 h-18 rounded-lg border-2 hover:scale-120 duration-200 flex items-center justify-center'>
      <Image className='w-8 h-8 hover:scale-120 duration-200 text-blue-600'/>
     </button> 

     <button className='text-xl font-bold text-rose-600 border-rose-600 w-18 h-18 rounded-lg border-2 flex items-center justify-center'>
        Title
     </button> 

     <button className='font-semibold text-green-400 border-green-400 w-18 h-18 rounded-lg border-2 flex items-center justify-center'>
        Subtitle
     </button> 

     <button className='text-sm font-medium text-amber-400 border-amber-400 w-18 h-18 rounded-lg border-2 flex items-center justify-center'>
        Small
     </button>

     <div className='flex items-center justify-center p-8 col-span-4 border-2 border-dashed border-gray-400 rounded-lg h-[250px]'>
        <h1 className='text-lg text-gray-500 font-medium'>Visiting Card</h1>
     </div>
     <button className='bg-blue-600 p-3 flex items-center col-span-4 rounded justify-center font-medium text-white gap-2'>
      <Download />Download
     </button>
    </div>
  </div>
  )
}

export default App
