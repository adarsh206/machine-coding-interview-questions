
import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [products, setProducts] = useState([]);
 
  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    json.products;
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
  <div className='App'>
    Hello
  </div>
  )
}

export default App
