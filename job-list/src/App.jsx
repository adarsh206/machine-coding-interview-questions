
import './App.css'

function App() {
  
  return (
    <div className='mx-auto w-full max-w-6xl px-4'>
      <h1 className="text-3xl font-bold text-center mt-2">Job List</h1>
      <div className='my-10 flex gap-5'>
        
        {/** left side */}
        <div className='sm:w-[70%] w-full shadow-lg rounded-xl bg-white pl-10 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300'>
          <div className='flex justify-between'>
            <div>
              <div className='flex gap-2'>
                <span className='-ml-3.5'>•</span>
                <div><h1 className='font-bold'>Senior Software Engineer</h1></div>
              </div>
              <h2 className='font-semibold text-gray-700'>Allegis Global Solutions (AGS)</h2>
              <h2 className='font-semibold text-gray-700'>Posted by Allegis Global Solutions (AGS)</h2>
            </div>

            <div className='border border-gray-300 mr-4 h-16 items-center justify-center rounded-sm mt-1 p-2'>
              <img className='w-12 h-10' src="https://img.naukimg.com/logo_images/groups/v1/1938868.gif"></img>
            </div>  
            
          </div>
          
        </div>

        {/** right side */}
        <div className='w-[30%] sm:block border hidden p-2 border-gray-200 rounded-xl'>
          <h1>Add preferences to get matching jobs</h1>
        </div>
      </div>
    </div>
  )
}

export default App
