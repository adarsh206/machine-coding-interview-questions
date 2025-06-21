
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEMI] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);

    if(id === 'principle'){
      setPrinciple(value)
    }
    else if(id === 'interest'){
      setInterest(value);
    }
    else{
      setYears(value);
    }
  }

  //P(r(1+r)^n/((1+r)^n)-1)
  const calculateEMI = () => {
    let r = interest;
    if(principle && r && years){
      r = r / 12 / 100; // per month
      const calcPow = Math.pow(1+r, years * 12);
      const amount = principle * ((r * calcPow) / (calcPow - 1));
      setEMI(Math.round(amount));
      
    }
  }

  useEffect(() => {

    calculateEMI();
  }, [principle, interest, years]);

  return (
    <div className='loan-calc'>
      <h1>Emi/Mortgage Calculator</h1>

      <div className='inputes'>
        <p>Principle:</p>
        <input type='number' id='principle' onChange={handleChange}/>

        <p>Interests:</p>
        <input type='number' id='interest' onChange={handleChange}/>

        <p>Years:</p>
        <input type='number' id='years' onChange={handleChange}/>
      </div>

      <div>
        <p className='output'>Your EMI is: <span id='emi' className='emi'>₹{emi}</span></p>
      </div>
    </div>

  )
}

export default App
