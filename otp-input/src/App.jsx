
import { useEffect, useRef, useState } from 'react';
import './App.css'

const OTP_DIGITS_COUNT = 5;

function App() {

  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(""));

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, [])

  const handleOnChange = (value, index) => {

    if(isNaN(value)) return;

    console.log(value)
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index + 1]?.focus();
  }

  const handleKeyDown = (e, index) => {
    if(!e.target.value && e.key === "Backspace"){
      refArr.current[index - 1]?.focus();
    }
  }

  return (
  <div className='App'>
    <h1>Validate OTP Input</h1>
    {
      inputArr.map((input, index) =>  {
       return <input key={index} type='text' className='otp-input' 
       value={inputArr[index]} 
       ref={(input) =>(refArr.current[index] = input)}
       onChange={(e) => handleOnChange(e.target.value, index)}
       onKeyDown={(e) => handleKeyDown(e, index)}
       />
})
    }
  
  </div>
  )
}

export default App
