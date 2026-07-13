
import './App.css'
import { Briefcase, CircleCheck, CircleX, IndianRupee, MapPin, Pin, Star } from 'lucide-react'

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

          <div className='bg-white mx-auto shadow-2xl rounded-2xl mt-5 p-6'>
              <div className='bg-gray-100 p-5 my-5 rounded-2xl'>
                  <h1 className='font-semibold'>Job Highlights</h1>
                  <div className='my-3 px-5'>
                    <li className='text-gray-700'>3+ years hands-on Node.js and AWS experience with expertise in ECS, Lambda, Step Functions, RDS, DynamoDB</li>
                    <li className='text-gray-700'>Design and develop scalable O2Ps platform, manage AWS-based DevOps, ensure quality and reliability, support production, mentor global teams</li>
                  </div>

                  <div className='mt-5'>
                    <h1 className='font-semibold'>Job match score</h1>
                    <div className='flex items-center gap-2 py-2'>
                      <div className='flex items-center gap-1 justify-center'>
                        <CircleX size={14} className='mt-0.5'/>
                        <p className='text-gray-700 font-medium'>Early Applicant</p>
                      </div>
                      <div className='flex items-center gap-1 justify-center'>
                        <CircleCheck size={18} className='mt-0.5 text-white' fill='green'/>
                        <p className='text-gray-700 font-medium'>Keyskills</p>
                      </div>
                      <div className='flex items-center gap-1 justify-center'>
                        <CircleCheck size={18} className='mt-0.5 text-white' fill='green'/>
                        <p className='text-gray-700 font-medium'>Location</p>
                      </div>
                      <div className='flex items-center gap-1 justify-center'>
                        <CircleX size={14} className='mt-0.5'/>
                        <p className='text-gray-700 font-medium'>Work experience</p>
                      </div>
                    </div>
              </div>
              </div>

              <h1 className='font-bold mx-2 text-xl'>Job Description</h1>
              <div className='mx-2 mt-5'>
                <h1 className='font-bold'>Role Overview</h1>
                <ul className='mx-5 list-disc ml-7 mt-4'>
                  <li className='text-gray-500'>
                    <div className='flex gap-1 items-start'>
                      <span className='text-black whitespace-nowrap font-semibold'>Position:</span>
                      <p className='text-gray-800'>NodeJs Developer III(Contingent)</p>
                    </div>
                  </li>
                  <li className='mb-2 text-gray-500'>
                    <div className='flex gap-1 items-start'>
                      <span className='text-black whitespace-nowrap font-semibold'>Experience:</span>
                      <p className='text-gray-800'>5- 8 years(higher experience acceptable if handson)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='mx-2 mt-10'>
                <h1 className='font-bold'>Mandatory Skill Requirements (Non- Negotiable)</h1>
                <h1 className='font-bold'>Backend/Programming</h1>
                <ul className='mx-5 list-disc ml-7 mt-4'>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Strong <span className='font-bold text-black'>Node.js</span> with solid <span className='font-bold text-black'>JavaScript/TypeScript </span>fundamentals.</p>            
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Minimum <span className='font-bold text-black'>3+ years of recent, handson Node.js experience</span>.</p>
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Candidate transitioning from <span className='font-bold text-black'>Java / J2EE / Spring Boot to Node.js</span>are acceptable, provided recent Node.js exposure is strong.</p>
                  </li>
                  <li className='mb-2 text-gray-500'>
                    <p className='text-gray-800'>This is a <span className='font-bold text-black'>purely handson coding role</span>.</p>               
                  </li>
                </ul>
              </div>

              <div className='mx-2 mt-10'>
                <h1 className='font-bold'>AWS (Critical)</h1>
                <ul className='mx-5 list-disc ml-7 mt-4'>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>Handson AWS experience is mandatory</span>(not just deployment exposure).</p>            
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Candidate must be able to:</p>
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Debug application issues directly in AWS.</p>
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Work with <span className='font-bold text-black'>logs, AWS workflows, and Step Functions</span>.</p>               
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Key services used:</p>               
                  </li>
                   <li className='text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>ECS, Lambda, Step Functions, RDS, DynamoDB</span>.</p>               
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>CloudWatch </span>knowledge is expected.</p>               
                  </li>
                  <li className='mb-2 text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>AWS experience: </span>Ideally 3+ years(strong candidates may be evaluated based on depth)</p>               
                  </li>
                </ul>
              </div>

              <div className='mx-2 mt-10'>
                <h1 className='font-bold'>Databases</h1>
                <ul className='mx-5 list-disc ml-7 mt-4'>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Working experience with both:</p>            
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>SQL </span>(RDS)</p>
                  </li>
                  <li className='mb-2 text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>NoSQL </span>(DynamoDB)</p>
                  </li>        
                </ul>
              </div>

              <div className='mx-2 mt-10'>
                <h1 className='font-bold'>Frontend Expectations</h1>
                <ul className='mx-5 list-disc ml-7 mt-4'>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>React.js preferred but not mandatory</span></p>            
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Strong backend candidates <span className='font-bold text-black'>open to learning/handling React (20% work)</span>are acceptable</p>
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>Angular experience </span>is also acceptable as frontend exposure</p>
                  </li>
                  <li className='mb-2 text-gray-500'>
                    <p className='text-gray-800'>Candidates must be <span className='font-bold text-black'>open to fullstack work; </span>profiles refusing frontend tasks should be avoided</p>
                  </li>         
                </ul>
              </div>

              <div className='mx-2 mt-10'>
                <h1 className='font-bold'>DevOps / CICD</h1>
                <ul className='mx-5 list-disc ml-7 mt-4'>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Exposure to<span className='font-bold text-black'> CI/CD pipelines</span></p>            
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Experience with <span className='font-bold text-black'>Jenkins </span>and AWS based deployment preferred</p>
                  </li>
                  <li className='mb-2 text-gray-500'>
                    <p className='text-gray-800'>Terraform knowledge is a plus, not mandatory</p>
                  </li>         
                </ul>
              </div> 

              <div className='mx-2 mt-10'>
                <h1 className='font-bold'>System Design</h1>
                <ul className='mx-5 list-disc ml-7 mt-4'>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>As a <span className='font-bold text-black'>Developer III (Senior) </span>role, candidates should have:</p>            
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'>Basic <span className='font-bold text-black'>system design </span>and <span className='font-bold text-black'>distributed systems </span>understanding</p>
                  </li>
                  <li className='mb-2 text-gray-500'>
                    <p className='text-gray-800'>Considered a baseline expectation</p>
                  </li>         
                </ul>
              </div>

              <div className='mx-2 mt-10'>
                <h1 className='font-bold'>Location & Work Model (Strict)</h1>
                <ul className='mx-5 list-disc ml-7 mt-4'>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>Location: </span>Bangalore only</p>            
                  </li>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>Remote candidates are NOT acceptable </span></p>
                  </li>       
                </ul>
              </div>

              <div className='mx-2 mt-10'>
                <h1 className='font-bold'>Hiring Notes & Submission Instructions </h1>
                <ul className='mx-5 list-disc ml-7 mt-4'>
                  <li className='text-gray-500'>
                    <p className='text-gray-800'><span className='font-bold text-black'>Immediate joiners / short notice candidates are strongly preferred </span></p>
                  </li>       
                </ul>
              </div> 
          </div>
        </div>


        {/** Right side */}
        <div className='sm:w-[30%] md:block hidden mx-auto mt-4'>
                                                                                                                                                                                                            
        </div>
      </div>
      
      


      
    </div>
  )
}

export default App
