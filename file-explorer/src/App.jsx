
import { useState } from 'react'
import './App.css'
import json from "./data.json"

// Render list of objects
const List = ({list}) => {
  return (<div className='container'>
      {
        list.map((node) => (
          <div key={node.id}>
            <span>{node.name}</span>  
            {node?.children && <List list={node.children}/>}
          </div>
          
        ))
      }
   </div>)
}

function App() {

  const [data, setData] = useState(json);

  return (
    <div className='App'>
    <h1>File Explorer</h1>
    <List list={data}/>
    </div>
  )
}

export default App
