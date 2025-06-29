
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {

  const [freq, setFreq] = useState(undefined);

  const fetchNumbers = async () => {
    const url = 'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    const res = await fetch(url);
    let data = await res.text();
    data = data.split('\n').filter(Boolean);
    const map = {};
    data?.forEach((item) => {
      if(map[item]){
        map[item] = map[item] + 1;
      }
      else{
        map[item] = 1
      }
    });
    setFreq(map)
   
  }
  console.log(freq);

  // preparing y-axis data
  // [40, 30, 20, 10, 0]
  useEffect(() => {
    if(freq){

    }
  } ,[freq])
  useEffect(() => {
    fetchNumbers()
  }, [])

  return (
  <div className='App'>
    <h1>Bar Chart</h1>
  </div>
  )
}

export default App
