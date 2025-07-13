
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

  const resetItems = (list) => {
    return list.map((item) => {
      return {
        ...item,
        checked: false
      }
    })
  }

  const handleTransferBtn = (dir) => {
    if(dir === 'LEFT_TO_RIGHT'){
      if(leftItems.length){
        const copyList = [...leftItems];
        const checkedList = copyList.filter(item => item.checked);
        const unCheckedList = copyList.filter(item => !item.checked);
        setRightItems(resetItems([...rightItems, ...checkedList]));
        setLeftItems(unCheckedList);
      }
    }
    else{
       const copyList = [...rightItems];
        const checkedList = copyList.filter(item => item.checked);
        const unCheckedList = copyList.filter(item => !item.checked);
        setLeftItems(resetItems([...leftItems, ...checkedList]));
        setRightItems(unCheckedList);
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
            <div className={`item ${checked && 'checked'}`} id={id} key={id} onClick={() => handleClick(id, checked, 'LEFT')}>
              {title}
            </div>
          ))
        }
      </div>

      <div className="actions">
        {/** buttons */}
        <button onClick={() => handleTransferBtn('RIGHT_TO_LEFT')}>Left</button>
        <button onClick={() => handleTransferBtn('LEFT_TO_RIGHT')}>Right</button>
      </div>

      <div className="box">
        {/** right section */}
        {
          rightItems.map(({ title, id, checked }) => (
            <div className={`item ${checked && 'checked'}`} id={id} key={id} onClick={() => handleClick(id, checked, 'RIGHT')}>
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
