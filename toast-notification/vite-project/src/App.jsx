
import './App.css'
import Notification from './components/notification'

function App() {

  // custom hook - useNotification(position)

  return (
    <div>
      <h1>Toast Notification</h1>
      <Notification type='success' message={"Success Message"}/>
    </div>
  )
}

export default App
