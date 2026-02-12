
import './App.css'
import Notification from './components/notification'
import useNotification from './hooks/use-notification'

function App() {

  // custom hook - useNotification(position)
  const { NotificationComponent, triggerNotification } = useNotification("top-right")

  return (
    <div>
      <h1>Toast Notification</h1>
      <button onClick={() => triggerNotification({
        type : "success",
        message : "File sent successfully!",
        duration : 3000,
      })}>Trigger Success</button>
      {NotificationComponent}
    </div>
  )
}

export default App
