import React from 'react'

const Profile = ({ data, setData}) => {

  const { name, email, age, interests, theme } = data;

  const handleDataChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item] : e.target.value
    }))
  }

  return (
    <div className='profile'>
      <div className='profile-name'>
        <label>Name : </label>
        <input className='input-name' type='text' placeholder='write about yourself' value={name} onChange={(e) => handleDataChange(e, "name")}/>
      </div>
      <div className='profile-name'>
        <label>Age : </label>
        <input className='input-name' type='number' placeholder='write about yourself' value={age} onChange={(e) => handleDataChange(e, "age")}/>
      </div>
      <div className='profile-name'>
        <label>Email : </label>
        <input className='input-name' type='email' placeholder='write about yourself' value={email} onChange={(e) => handleDataChange(e, "email")}/>
      </div>
      <div className='profile-name'>
        <label>Interests : </label>
        <input className='input-name' type='text' placeholder='write about yourself' value={interests} onChange={(e) => handleDataChange(e, "interests")}/>
      </div>
      <div className='profile-name'>
        <label>Theme : </label>
        <input className='input-name' type='text' placeholder='write about yourself' value={theme} onChange={(e) => handleDataChange(e, "theme")}/>
      </div>
    </div>
  )
}

export default Profile