
import { useState } from 'react';
import './App.css'
import { items } from './item.js';

function App() {
  
  const filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];
  const [filteredData, setFilteredData] = useState(items);
  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterClick = (e) => {
    const category = e.target.id;
    console.log(category);
    if(activeFilters.includes(category)){ // toggle false
      const filters =  activeFilters.filter((el) => el !== category );
      setActiveFilters(filters)
    }
    else{ // toggle true
      setActiveFilters([...activeFilters, category])
    }
  }
  console.log('activeFilters', activeFilters)
  
  return (
   <div className="App">
    <h1>Products Filter</h1>
    <div className="filters" onClick={handleFilterClick}>
      {
        filters.map((item, idx) => (
          <button key={idx} id={item}>
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
