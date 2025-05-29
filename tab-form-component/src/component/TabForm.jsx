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

  const ActiveTabComponent = tabs[activeTab].component

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
    </div>
  )
}

export default TabForm