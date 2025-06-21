
import './App.css'

function App() {
 

  return (
  <div className='App'>
    <div className='action-btn'>
      <button>Undo</button>
      <button>Redo</button>
    </div>

    <div className='user-action'>
    {
      [-100, -10, -1].map((btn) => {
        return (
          <button>{btn}</button>
        )
      })
    }
    <div>0</div>
     {
      ['+1', '+10', '+100'].map((btn) => {
        return (
          <button>{btn}</button>
        )
      })
    }
    </div>
  </div>
  )
}

export default App
