import React from 'react'
import Profile from './Profile'
import Interests from './Interests'
import Settings from './Settings'


const TabForm = () => {

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

  return (
    <div>
      <div>
        {
          tabs.map((t) =>  (
          <div>{t.name}</div>
        ))
        }
      </div>
    </div>
  )
}

export default TabForm