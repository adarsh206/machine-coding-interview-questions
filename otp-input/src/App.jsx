
import { useState } from 'react';
import './App.css'

const OTP_DIGITS_COUNT = 5;

function App() {

  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(""));

  const handleOnChange = (value) => {
    console.log(value)

  }

  return (
  <div className='App'>
    <h1>Validate OTP Input</h1>
    {
      inputArr.map((input, index) =>  {
       return <input key={index} type='text' className='otp-input' 
       value={inputArr[index]} 
       onChange={(e) => handleOnChange(e.target.value)}/>
})
    }
  
  </div>
  )
}

export default App
