
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {

    if(cache[input]){
      setResults(cache[input]);
      return;
    }

    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    setResults(json?.recipes);
    setCache((prev) => ({...prev, [input] : json?.recipes}))
  }

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer)
    }
  } ,[input])

  return (
    <div className='App'>
     <h1>AutoComplete Search Bar</h1>
     <div>
      <input type='text' className='search-input' value={input} 
      onFocus={() => setShowResults(true)}
      onBlur={() => setShowResults(false)}
      onChange={(e) => setInput(e.target.value)}/>
     </div>
  { showResults &&  <div className='results-container'>
      {
        results.map((r) =>(
          <span className='result' key={r.id}>{r.name}</span>
         ))
      }
     </div>}
     
    </div>
  )
}

export default App
