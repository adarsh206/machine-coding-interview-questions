
import { useState } from 'react';
import './App.css'
import { items } from './item.js';

function App() {
  
  const filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];
  const [filteredData, setFilteredData] = useState(items);

  return (
   <div className="App">
    <h1>Products Filter</h1>
    <div className="filters">
      {
        filters.map((item, idx) => (
          <button key={idx}>
            {item}
          </button>
        ))
      }
    </div>
    <div className="product-list">
      {
        filteredData.map((item, idx) => (
          <div className="item" key={idx}>
            <p>{item.name}</p>
            <p className='category'>{item.category}</p>
          </div>
        ))
      }
    </div>
   </div>
  )
}

export default App
