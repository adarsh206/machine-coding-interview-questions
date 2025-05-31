import React, { useState } from 'react'
import Profile from './Profile'
import Interests from './Interests'
import Settings from './Settings'


const TabForm = () => {

  const [data, setData] = useState({
    name: "Adarsh",
    age : "27",
    email : "adarsh2061998@gmail.com",
    interests : ["Coding", "Programming"],
    theme : "dark"
  })

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile
    },{
      name: "Interests",
      component: Interests
    },{
      name: "Settings",
      component: Settings
    }
  ]

  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    setActiveTab((prev) => prev + 1 )
  }

   const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1 )
  }

  const handleSubmitClick = () => {

  }

  return (
    <div>
      <div className='heading-container'>
        {
          tabs.map((t, index) =>  (
          <div key={index} className={`heading ${activeTab === index ? 'selected' : ''}`} onClick={() => setActiveTab(index)}>
            {t.name}
          </div>
        ))
        }
      </div>
      <div className='tab-body'>
        <ActiveTabComponent data={data} setData={setData}/>
      </div>
      <div className='navigation'>
        {activeTab > 0 && <button className='submit' onClick={handlePrevClick}>Prev</button> }
        {activeTab < tabs.length - 1 && <button className='submit' onClick={handleNextClick}>Next</button> }
        {activeTab === tabs.length - 1 && <button className='submit' onClick={handleSubmitClick}>Submit</button> }
      </div>
    </div>
  )
}

export default TabForm