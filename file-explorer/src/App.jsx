
import { useState } from 'react'
import './App.css'
import json from "./data.json"

// Render list of objects
const List = ({ list, addNodeToList, deleteNodeFromList }) => {

  const [isExpanded, setIsExpanded] = useState({});

  return (<div className='container'>
      {
        list.map((node) => (
          <div key={node.id}>
            {node.isFolder === true && (<span onClick={() => setIsExpanded((prev) => ({...prev, [node.name] : !prev[node.name],}))}>
              {isExpanded?.[node.name]? "- " : "+ "}</span>)}  
            <span>{node.name}</span> 
           {node?.isFolder === true &&  (<span onClick={() => addNodeToList(node.id)}><img src='https://cdn-icons-png.flaticon.com/512/4732/4732392.png' alt='icon' className='icon'/></span>)}
        <span onClick={() => deleteNodeFromList(node.id)}><img src='https://static-00.iconduck.com/assets.00/delete-icon-938x1024-q3vs1il0.png' alt='icon' className='icon'/></span>
            {isExpanded?.[node.name] && node?.children && <List list={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>}
          </div>
          
        ))
      }
   </div>)
}

function App() {

  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {

    const name = prompt("Enter Name");



    const updateTree = (list) => {
      return list.map(node => {
        if(node.id === parentId){
          return {
            ...node,
            children: [...node.children, {id: Date.now().toString(), name: name, isFolder: true, children: []},]
          }
        }
        if(node.children){
          return {...node, children: updateTree(node.children)}
        }
        return node;
      })
    }
    setData((prev) => updateTree(prev))
  }

  const deleteNodeFromList = (itemId) => {

    const updateTree = (list) => {

      return list.filter((node) => node.id !== itemId).map((node) => {
        if(node.children){
          return {...node, children: updateTree(node.children)}
        }
        return node;
      })
    }
    setData((prev) => updateTree(prev));
  }

  return (
    <div className='App'>
    <h1>File Explorer</h1>
    <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>
    </div>
  )
}

export default App
