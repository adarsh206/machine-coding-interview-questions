
import './App.css'
import { Briefcase, IndianRupee, Star } from 'lucide-react'

function App() {
  

  return (
    <div className='mt-3'>
      <h1 class="text-3xl font-bold text-center">
        Job Page
      </h1>

      <div className='flex gap-3 sm:max-w-6xl mx-auto'>
        {/** Left Side */}
        <div className='sm:w-[70%] mx-auto mt-5'>
          <div className='bg-white shadow-2xl p-2 rounded-2xl px-5'>
            <div className='flex items-center justify-between'>
              <div>
                <div className='mt-3'>
                  <h1 className='font-bold text-xl'>Senior Node Js Developer</h1>
                </div>
                <div className='flex items-center gap-2 mt-1'>
                  <h1>Aziro</h1>
                  <div className='flex items-center gap-1'>
                    <Star size={14} color='orange'/>
                    <p>3.6</p>
                  </div>
                  <div className='w-0 h-3 border border-gray-400'></div>
                  <p className='text-gray-500'>233 Reviews</p>
                </div>
              </div>
              <div className='mt-3'>
                  <img alt="Company Logo" loading="lazy" className="w-15 h-15 border border-gray-400 rounded-2xl" src="https://img.naukimg.com/logo_images/groups/v1/4610259.gif">
                  </img>
              </div>
            </div>

            <div className='flex gap-4 mt-4 items-center'>
              <div className='flex gap-2 items-center justify-center'>
                <Briefcase size={16} className='text-gray-500'/>
                <p className='text-gray-500'>6 - 10 years</p>
              </div>
              <div className='h-4 flex gap-1 px-2 items-center border-l border-gray-300'>
                <IndianRupee size={12} className='text-gray-500'/>
                <p className='text-gray-500'>Not Disclosed</p>
              </div>
            </div>
            
          </div>
        </div>


        {/** Right side */}
        <div className='sm:w-[30%] md:block hidden mx-auto mt-5 border border-gray-200 rounded-2xl'>
          <h1>Right Side</h1>
        </div>
      </div>
      
      


      
    </div>
  )
}

export default App
