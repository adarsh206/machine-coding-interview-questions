
import { useState } from 'react'
import './App.css'

function App() {

  const data = [
    {
      id: "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name..."
    },
      {
      id: "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "Your Email..."
    },
    {
      id: "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: ""
    },
    {
      id: "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: ""
    }
  ]

  const [forms, setForms] = useState(data);
  const [index, setIndex] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIndex((idx) => idx + 1);
  }


  return (
   <div className='App'>
    <form className='container' onSubmit={handleSubmit}>
      <label>{forms[index].label}</label>
      <input type={forms[index].inputType}  placeholder={forms[index].placeholder} />
      <button>{forms[index].buttonName}</button>     
    </form>
   </div>
  )
}

export default App
