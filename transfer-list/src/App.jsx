
import { useState } from 'react'
import './App.css'
import { data } from "./data";

function App() {
  
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);

  const checkedList = (list, id, checked) => {
    return list.map((item) => {
      if(id === item.id){
        return {
          ...item,
          checked: !checked
        }
      }
      return item;
    })
  }

  const handleClick = (id, checked, direction) => {
    if(direction === 'LEFT'){
      let copyList = [...leftItems];
      copyList = checkedList(copyList, id, checked);
      setLeftItems(copyList);
    }
    else{
      let copyList = [...rightItems];
      copyList = checkedList(copyList, id, checked);
      setRightItems(copyList);
    }
  }

  return (
  <div className='App'>
    <h1>Transfer List</h1>
    <div className="container">
      <div className="box">
        {/** left section */}
        {
          leftItems.map(({ title, id, checked }) => (
            <div className="item" id={id} key={id} onClick={() => handleClick(id, checked, 'LEFT')}>
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
          rightItems.map(({ title, id, checked }) => (
            <div className="item" id={id} key={id} onClick={() => handleClick(id, checked, 'RIGHT')}>
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
