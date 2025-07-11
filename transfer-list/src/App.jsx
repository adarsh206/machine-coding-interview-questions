
import { useState } from 'react'
import './App.css'
import { data } from "./data";

function App() {
  
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);

  return (
  <div className='App'>
    <h1>Transfer List</h1>
    <div className="container">
      <div className="box">
        {/** left section */}
        {
          leftItems.map(({ title, id, checked }) => (
            <div className="item" id={id} key={id}>
              {title}
            </div>
          ))
        }
      </div>

      <div className="actions">
        {/** buttons */}
        <button>Left</button>
        <button>Right</button>
      </div>

      <div className="box">
        {/** right section */}
        {
          leftItems.map(({ title, id, checked }) => (
            <div className="item" id={id} key={id}>
              {title}
            </div>
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default App
