import React from 'react'

const Interests = ({data, setData}) => {
  
  const { interests } = data;

  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked ? [...prevState.interests, e.target.name] : prevState.interests.filter((i) => i !== e.target.name),
    
    }))
  }
  return (
    <div>
      <div>
        <label>
          <input type='checkbox' name='Coding' checked={interests.includes("Coding")} onChange={handleDataChange}/>
          Coding
        </label>
      </div>
      <div>
        <label>
          <input type='checkbox' name='Programming' checked={interests.includes("Programming")} onChange={handleDataChange}/>
          Programming
        </label>
      </div>
      <div>
        <label>
          <input type='checkbox' name='Javascript' checked={interests.includes("Javascript")} onChange={handleDataChange}/>
          Javascript
        </label>
      </div>
    </div>
  )
}

export default Interests