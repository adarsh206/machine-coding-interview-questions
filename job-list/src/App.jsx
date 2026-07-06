
import './App.css'
import { Bookmark, BriefcaseBusiness, Cpu, Edit, EyeOff, Globe, IndianRupee, MapPin, Notebook, NotebookText, Save, Star, UserRound } from 'lucide-react';

function App() {
  
  return (
    <div className='mx-auto w-full max-w-6xl px-4'>
      <h1 className="text-3xl font-bold text-center mt-2">Job List</h1>
      <div className='my-10 flex gap-5'>
        
        {/** left side */}
        <div className='sm:w-[70%] gap-2 w-full'>
             {/** 1st Card */}
          <div className='shadow-lg rounded-xl mb-5 p-5 bg-white pl-10 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300'>
          <div>
            <div className='flex justify-between'>
            <div>
              <div className='flex gap-2'>
                <span className='-ml-3.5'>•</span>
                <div><h1 className='font-bold'>Senior Software Engineer</h1></div>
              </div>
              <div className='flex gap-2'>
                <h2 className='font-semibold text-gray-700'>Allegis Global Solutions (AGS)</h2>
                <div className='flex items-center gap-1 px-3 text-sm'>
                  <Star color='orange' size={12}/>3.1
                  <div className='sm:w-0 sm:h-4 h-8 border border-gray-400'></div>
                  <p className='text-gray-500 text-sm'>118 Reviews</p>
                  </div>
              </div>
              
              <h2 className='font-semibold text-gray-700'>Posted by Allegis Global Solutions (AGS)</h2>
            </div>

            <div className='border border-gray-300 mr-4 h-16 items-center justify-center rounded-sm mt-1 p-2'>
              <img className='w-12 h-10' src="https://img.naukimg.com/logo_images/groups/v1/1938868.gif"></img>
            </div>      
          </div>

          <div className='mt-2 sm:flex flex-column items-center gap-2 py-2 overflow-auto'>
            <div className='flex items-center gap-2 sm:border-r sm:border-gray-200' >
              <BriefcaseBusiness size={18}/>
              <p className='mr-5'>5-7 Yrs</p>
            </div>

            <div className='flex items-center sm:border-r sm:border-gray-200' >
              <IndianRupee size={18}/>
              <p className='mr-5'>15 - 20 Lpa</p>
            </div>

            <div className='flex sm:items-center gap-1' >
              <MapPin size={18} className='mt-1'/>
              <p>Hyderabad, Pune, Noida, Gurgaon</p>
            </div>   
          </div>

          <div className='flex items-center gap-1'>
            <NotebookText size={18}/>
            <h1 className='font-semibold'>Role:</h1>
            <p>Senior Full Stack Developer</p>
          </div>

          <div className='flex items-center gap-1 mt-1'>
            <UserRound size={18}/>
            <h1 className='font-semibold'>Experience:</h1>
            <p>5 - 7 Yrs</p>
          </div>

          <div className='flex sm:items-center gap-1 mt-1'>
            <MapPin size={18} className='mt-1'/>
            <h1 className='font-semibold'>Job Location:</h1>
            <p className='sm:ml-0'>Hyderabad, Chennai, Noida, Gurgaon, Pune.</p>
          </div>

          <div className='flex items-center gap-1 mt-1'>
            <Globe size={18}/>
            <h1 className='font-semibold'>Work Mode:</h1>
            <p>Remote, Office, Hybrid.</p>
          </div>

          <div className='flex  sm:items-center gap-1 mt-1'>
            <Cpu size={18} className='mt-1'/>
            <h1 className='font-semibold'>Tech Stack:</h1>
            <p className='sm:ml-0'>• Fast API • Javascript • Node.js • React.js • Python • AWS</p>
          </div>

          <div className='flex items-center gap-1 mt-4 justify-between mx-1'>
            <p className='font-semibold text-gray-500 text-sm items-start'>1 Days Ago</p>
            <div className='flex gap-2 mr-3'>
               <div className='flex items-center gap-1 text-sm'>
                <EyeOff size={15}/>
                <p>Hide</p>
              </div>
              <div className='flex items-center gap-1 text-sm'>
                <Bookmark size={15}/>
                <p>Save</p>
              </div>
            </div>
          </div>       
          </div>
          
          </div>

          {/** 2nd Card */}
          <div className='shadow-lg rounded-xl mb-5 p-5 bg-white pl-10 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300'>
          <div>
            <div className='flex justify-between'>
            <div>
              <div className='flex gap-2'>
                <span className='-ml-3.5'>•</span>
                <div><h1 className='font-bold'>Full Stack Developer</h1></div>
              </div>
              <div className='flex gap-2'>
                <h2 className='font-semibold text-gray-700'>Movate Technologies</h2>
                <div className='flex items-center gap-1 px-3 text-sm'>
                  <Star color='orange' size={12}/>4.3
                  <div className='sm:w-0 sm:h-4 h-8 border border-gray-400'></div>
                  <p className='text-gray-500 text-sm'>3480 Reviews</p>
                  </div>
              </div>
              <h2 className='font-semibold text-gray-700'>Posted by Movate Technologies</h2>
            </div>

            <div className='border border-gray-300 mr-4 h-16 items-center justify-center rounded-sm mt-1 p-2'>
              <img className="w-12 h-10" src="https://img.naukimg.com/logo_images/groups/v1/508530.gif"></img>
            </div>      
          </div>

          <div className='mt-2 sm:flex flex-column items-center gap-2 py-2 overflow-auto'>
            <div className='flex items-center gap-2 sm:border-r sm:border-gray-200' >
              <BriefcaseBusiness size={18}/>
              <p className='mr-5'>3-8 Yrs</p>
            </div>

            <div className='flex items-center sm:border-r sm:border-gray-200' >
              <IndianRupee size={18}/>
              <p className='mr-5 w-full'>10 - 30 Lpa</p>
            </div>

            <div className='flex sm:items-center gap-1' >
              <MapPin size={18} className='mt-1'/>
              <p className='overflow-auto'>Chennai, Hyderabad, Pune, Noida, Gurgaon.</p>
            </div>   
          </div>

          <div className='flex items-center gap-1'>
            <NotebookText size={18}/>
            <h1 className='font-semibold'>Role:</h1>
            <p>Senior Full Stack Developer</p>
          </div>

          <div className='flex items-center gap-1 mt-1'>
            <UserRound size={18}/>
            <h1 className='font-semibold'>Experience:</h1>
            <p>3 - 8 Yrs</p>
          </div>

          <div className='flex sm:items-center gap-1 mt-1'>
            <MapPin size={18} className='mt-1'/>
            <h1 className='font-semibold'>Job Location:</h1>
            <p className='sm:ml-0'>Hyderabad, Chennai, Noida, Gurgaon, Pune.</p>
          </div>

          <div className='flex items-center gap-1 mt-1'>
            <Globe size={18}/>
            <h1 className='font-semibold'>Work Mode:</h1>
            <p>Remote, Office, Hybrid.</p>
          </div>

          <div className='flex sm:items-center gap-1 mt-1'>
            <Cpu size={18} className='mt-1'/>
            <h1 className='font-semibold'>Tech Stack:</h1>
            <p className='sm:ml-0'>• Express.js • CSS  • Javascript • Node.js • React.js • Azure</p>
          </div>

          <div className='flex items-center gap-1 mt-4 justify-between mx-1'>
            <p className='font-semibold text-gray-500 text-sm items-start'>3 Days Ago</p>
            <div className='flex gap-2 mr-3'>
               <div className='flex items-center gap-1 text-sm'>
                <EyeOff size={15}/>
                <p>Hide</p>
              </div>
              <div className='flex items-center gap-1 text-sm'>
                <Bookmark size={15}/>
                <p>Save</p>
              </div>
            </div>
          </div>
          
           
          </div>
          
          </div>

             {/** 3rd Card */}
          <div className='shadow-lg rounded-xl mb-5 p-5 bg-white pl-10 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300'>
          <div>
            <div className='flex justify-between'>
            <div>
              <div className='flex gap-2'>
                <span className='-ml-3.5'>•</span>
                <div><h1 className='font-bold'>React Native Developer</h1></div>
              </div>
              <div className='flex gap-2'>
                <h2 className='font-semibold text-gray-700'>Procedure Technologies</h2>
                <div className='flex items-center gap-1 px-3 text-sm'>
                  <Star color='orange' size={12}/>4.9
                  <div className='sm:w-0 sm:h-4 h-8 border border-gray-400'></div>
                  <p className='text-gray-500 text-sm'>4803 Reviews</p>
                  </div>
              </div>
              <h2 className='font-semibold text-gray-700'>Posted by Procedure Technologies</h2>
            </div>

            <div className='border border-gray-300 mr-4 h-16 items-center justify-center rounded-sm mt-1 p-2'>
              <img className="w-12 h-10" src="https://img.naukimg.com/logo_images/groups/v1/12024099.gif"></img>
            </div>      
          </div>

          <div className='mt-2 sm:flex flex-column items-center gap-2 py-2 overflow-auto'>
            <div className='flex items-center gap-2 sm:border-r sm:border-gray-200' >
              <BriefcaseBusiness size={18}/>
              <p className='mr-5'>4-9 Yrs</p>
            </div>

            <div className='flex items-center sm:border-r sm:border-gray-200' >
              <IndianRupee size={18}/>
              <p className='mr-5 w-full'>15 - 35 Lpa</p>
            </div>

            <div className='flex sm:items-center gap-1' >
              <MapPin size={18} className='mt-1'/>
              <p className='overflow-auto'>Noida, Hyderabad, Pune.</p>
            </div>   
          </div>

          <div className='flex items-center gap-1'>
            <NotebookText size={18}/>
            <h1 className='font-semibold'>Role:</h1>
            <p>React Native Developer</p>
          </div>

          <div className='flex items-center gap-1 mt-1'>
            <UserRound size={18}/>
            <h1 className='font-semibold'>Experience:</h1>
            <p>4 - 9 Yrs</p>
          </div>

          <div className='flex sm:items-center gap-1 mt-1'>
            <MapPin size={18} className='mt-1'/>
            <h1 className='font-semibold'>Job Location:</h1>
            <p className='sm:ml-0'>Hyderabad, Chennai, Noida, Gurgaon, Pune.</p>
          </div>

          <div className='flex items-center gap-1 mt-1'>
            <Globe size={18}/>
            <h1 className='font-semibold'>Work Mode:</h1>
            <p>Remote, Hybrid.</p>
          </div>

          <div className='flex sm:items-center gap-1 mt-1'>
            <Cpu size={18} className='mt-1'/>
            <h1 className='font-semibold'>Tech Stack:</h1>
            <p className='sm:ml-0'>• React Native • Javascript • Node.js • React.js • AWS</p>
          </div>

          <div className='flex items-center gap-1 mt-4 justify-between mx-1'>
            <p className='font-semibold text-gray-500 text-sm items-start'>2 Days Ago</p>
            <div className='flex gap-2 mr-3'>
               <div className='flex items-center gap-1 text-sm'>
                <EyeOff size={15}/>
                <p>Hide</p>
              </div>
              <div className='flex items-center gap-1 text-sm'>
                <Bookmark size={15}/>
                <p>Save</p>
              </div>
            </div>
          </div>          
          </div>
          
          </div>
        </div>
        

        

        {/** right side */}
        <div className='w-[30%] max-h-150 sm:block border hidden p-2 border-gray-200 rounded-xl'>
          <h1>Add preferences to get matching jobs</h1>
        </div>
      </div>
    </div>
  )
}

export default App
