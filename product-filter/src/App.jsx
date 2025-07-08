
import './App.css'

function App() {
  
  const filters = ['Bags', 'Watches', 'Sports', 'Sunglasses'];

  return (
   <div className="App">
    <div className="filters">
      {
        filters.map((item, idx) => (
          <button key={idx}>
            {item}
          </button>
        ))
      }
    </div>
   </div>
  )
}

export default App
