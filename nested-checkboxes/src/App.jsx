
import { Children, useState } from 'react'
import './App.css'

const checkboxesData = [
  {
  id: 1,
  name: "Fruits",
  Children: [
    {
      id: 2,
      name: "Citrus",
      Children: [
       { 
        id: 3,
        name: "Orange",
      },
      {
        id: 4,
        name: "Lemon",
      },
      ],
    },
    {
      id: 5,
      name: "Berries",
      Children: [
        {
          id: 6,
          name: "Strawberry",
        },
        {
          id: 7,
          name: "Blueberry",
        }
      ]
    },
  
  ]
  },
  {
    id: 8,
    name: "Tropical",
    Children: [
      {
        id: 9,
        name: "Mango",
      },
      {
        id: 10,
        name: "Banana",
      },
    ],
  },
  {
    id: 11,
    name: "Apple",
  },
]

const CheckBoxes = ({ data, checked, setChecked }) => {

  const handleChange = (isChecked, node) => {
    setChecked((prev) =>{
      const newState = {...prev, [node.id] : isChecked};

      // if children are present, add all of them to new state
      const updateChildren = (node) => {
        node.Children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.Children && updateChildren(child);
        })
      }
      updateChildren(node);

      // if all children are checked, mark the parent as checked
      const verifyChecked = (node) => {
        if(!node.Children) return newState[node.id] || false;

        const allChildrenChecked = node.Children.every((child) => verifyChecked(child));
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      }

      checkboxesData.forEach((node) => verifyChecked(node));
      return newState;
    })
  }

  console.log(checked)
  return (
  <div>
    {
    data.map((node) => (<div key={node.id} className='parent'>
      <input type='checkbox' checked={checked[node.id] || false} onChange={(e) => handleChange(e.target.checked, node)}/>
      <span>{node.name}</span>
      {
        node.Children && (<CheckBoxes data={node.Children} checked={checked} setChecked={setChecked}/>)
      }
      
      </div>))

    }
  </div>)

}


function App() {

  const [checked, setChecked] = useState({});

  return (
   <div className='App'>
    <h1> Nested Checkboxes</h1>
    <CheckBoxes data={checkboxesData} checked={checked} setChecked={setChecked} />
   </div>
  )
}

export default App