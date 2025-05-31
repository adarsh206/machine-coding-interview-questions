import React from 'react'

const Profile = ({ data, setData, errors}) => {

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
        {errors.name && <span className='error'>{errors.name}</span>}
      </div>
      <div className='profile-name'>
        <label>Age : </label>
        <input className='input-name' type='number' placeholder='write about yourself' value={age} onChange={(e) => handleDataChange(e, "age")}/>
       {errors.age && <span className='error'>{errors.age}</span>}
      </div>
      <div className='profile-name'>
        <label>Email : </label>
        <input className='input-name' type='email' placeholder='write about yourself' value={email} onChange={(e) => handleDataChange(e, "email")}/>
         {errors.email && <span className='error'>{errors.email}</span>}
      </div>     
    </div>
  )
}

export default Profile