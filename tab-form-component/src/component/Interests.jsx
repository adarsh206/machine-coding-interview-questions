import React from 'react'

const Interests = ({data, setData}) => {
  
  const { interests } = data;

  return (
    <div>
      <div>
        <label>
          <input type='checkbox' name='coding' checked={interests.includes("Coding")}/>
          Coding
        </label>
      </div>
      <div>
        <label>
          <input type='checkbox' name='programming' checked={interests.includes("Programming")}/>
          Programming
        </label>
      </div>
      <div>
        <label>
          <input type='checkbox' name='javascript' checked={interests.includes("Javascript")}/>
          Javascript
        </label>
      </div>
    </div>
  )
}

export default Interests