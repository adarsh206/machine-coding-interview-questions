
import { useEffect } from 'react'
import './App.css'

function App() {

  const fetchNumbers = async () => {
    const url = 'https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    const res = await fetch(url);
    const data = await res.text();
    console.log(data)
  }

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
