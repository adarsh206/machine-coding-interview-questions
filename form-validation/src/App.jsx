
import { useState } from 'react'
import './App.css'

function App() {
  const defaultValues = {
    firstName: {
      id: 'firstName',
      label: 'First Name',
      type: 'text',
      placeholder: 'First Name...',
      value: '',
      isError: false,
      errorMsg: "First Name can't be empty"
    },
    lastName: {
      id: 'lastName',
      label: 'Last Name',
      type: 'text',
      placeholder: 'Last Name...',
      value: '',
      isError: false,
      errorMsg: "Last Name can't be empty"
    },
    email: {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Email...',
      value: '',
      isError: false,
      errorMsg: "Email Name can't be empty"
    },
    password: {
      id: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Password...',
      value: '',
      isError: false,
      errorMsg: "Password can't be empty"
    },
    confirmPassword: {
      id: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm Password...',
      value: '',
      isError: false,
      errorMsg: "Confirm Password can't be empty"
    }
  }

  const [formData, setFormData] = useState(defaultValues);

  const handleInput = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    console.log(key, value)
  }

  return (
  <div className='App'>
    <h1>Form Validation</h1>
    <div className="container">
      <form>
        <div className="form-item">
         {
          Object.keys(formData).map((key) => {
            const { id, label, type, placeholder, value, isError, errorMsg } = formData[key];
            return <div className='form-item'>
              <label>{label}</label>
              <input onChange={handleInput}
              id={id} placeholder={placeholder} type={type} value={value}/>
              {
                isError && 
                <span className='error'>{errorMsg}</span>
              }
              {
                key === 'confirmPassword' && 
                <span className='error'>Password does not match</span>
              }
            </div>
          })
         }
         <div className='form-item'>
          <button>Submit</button>
         </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default App
