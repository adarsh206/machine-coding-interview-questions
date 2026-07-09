
import './App.css'
import { Briefcase, IndianRupee, MapPin, Pin, Star } from 'lucide-react'

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
                    <Star size={14} color='orange' fill='orange' />
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
                <Briefcase size={16} className='text-gray-400'/>
                <p className='text-gray-600'>6 - 10 years</p>
              </div>
              <div className='h-4 flex gap-1 px-2 items-center border-l border-gray-300'>
                <IndianRupee size={12} className='text-gray-400'/>
                <p className='text-gray-600'>Not Disclosed</p>
              </div>     
            </div>
            <div className='flex items-center gap-1'>
                <Pin size={16} className='text-gray-400 items-center mt-1'/>
                <p className='text-gray-600'>Hybrid</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <MapPin size={16} className='text-gray-400 items-center mt-1'/>
                  <p className='text-gray-600'>Bengaluru</p>
                </div>
                <div>
                  <p className='text-blue-700 font-medium'>Send me jobs like this</p>
                </div>
            </div>

            <div className='w-full h-0 border border-gray-200 my-5'></div>
            
            <div className='flex justify-between lg:items-center flex-col lg:flex-row '>
              <div className='flex gap-2'>
                <div className='flex gap-1 border-r border-gray-200 pr-2'>
                  <h2 className='text-gray-500'>Posted:</h2>
                  <h2>4 days ago</h2>
                </div>
                <div className='flex gap-1 pr-2 border-r border-gray-200'>
                  <h2 className='text-gray-500'>Opening:</h2>
                  <p>1</p>
                </div>
                <div className='flex gap-1'>
                  <h2 className='text-gray-500'>Applicants:</h2>
                  <div className='flex'>
                    <p>100</p>
                    <p className='-mt-0.5'>+</p>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 mt-4 lg:mt-0'>
                <button className='cursor-pointer border border-blue-600 text-blue-600 px-4 py-2 sm:px-5 rounded-3xl'>Save</button>
                <button className='cursor-pointer bg-blue-700 text-white rounded-3xl py-2 px-4 sm:px-5'>Apply</button>
              </div>           
            </div>

            <div className='mt-3 flex gap-1'>
                <input type='checkbox' className='w-4' />
                <p className='text-sm text-gray-700'>Follow Aziro as you apply to stay updated</p>
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
