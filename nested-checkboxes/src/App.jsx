
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

  const handleChange = (e, id) => {
    setChecked((prev) =>{
      const newState = {...prev, [id] : e.target.checked};
      return newState;
    })
  }

  console.log(checked)
  return (
  <div>
    {
    data.map((node) => (<div key={node.id} className='parent'>
      <input type='checkbox' checked={checked[node.id] || false} onChange={(e) => handleChange(e, node.id)}/>
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
