
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
  const [formData, setFormData] = useState({
    name: "",
    email : "",
    dob: "",
    password: ""
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(index === forms.length - 1){
      console.log("Form Submitted")
      setIsFormSubmitted(true);
    }
    else{
      setIndex((idx) => idx + 1);
    }
    
  }


  const handleBack = (e) => {
    e.preventDefault();
    setIndex((idx) => idx - 1);
  }

  const handleInputChange = (e) => {
    const id = e.target.id;
    const val = e.target.value;
    const copyFormData = {...formData};
    copyFormData[id] = val;
    setFormData(copyFormData);
  }
console.log(formData)

  return (
   <div className='App'>
   {!isFormSubmitted ? <form className='container' onSubmit={handleSubmit}>
      { index > 0 && <a href='/' onClick={handleBack}>
        Back
      </a>}
      <label>{forms[index].label}</label>
      <input onChange={handleInputChange}
      type={forms[index].inputType} id={forms[index].id} value={formData[forms[index].id]}  placeholder={forms[index].placeholder} />
      <button>{forms[index].buttonName}</button>     
    </form>
    :
    <div className='main-container'>
      <h1>Success !</h1>
      <hr />
    <div className='container'>
      <span>Name: {formData.name}</span>
      <span>Email: {formData.email}</span>
      <span>DOB: {formData.dob}</span>
       <span>Password: {formData.password}</span>
    </div>
    </div>
  }
   </div>
  )
}

export default App
