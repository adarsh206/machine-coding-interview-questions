
import { useState } from 'react';
import './App.css'

const OTP_DIGITS_COUNT = 5;

function App() {

  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(""));

  const handleOnChange = (value, index) => {

    if(isNaN(value)) return;

    console.log(value)
    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);

  }

  return (
  <div className='App'>
    <h1>Validate OTP Input</h1>
    {
      inputArr.map((input, index) =>  {
       return <input key={index} type='text' className='otp-input' 
       value={inputArr[index]} 
       onChange={(e) => handleOnChange(e.target.value, index)}/>
})
    }
  
  </div>
  )
}

export default App
