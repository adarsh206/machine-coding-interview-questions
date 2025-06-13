
import { Children } from 'react'
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

const CheckBoxes = ({data}) => {

  return (
  <div>
    {
    data.map((node) => (<div>
      <input type='checkbox'/>
      <span>{node.name}</span>
      </div>))

    }
  </div>)

}


function App() {


  return (
   <div className='App'>
    <h1> Nested Checkboxes</h1>
    <CheckBoxes data={checkboxesData}/>
   </div>
  )
}

export default App
