
import './App.css'
import Notification from './components/notification'
import useNotification from './hooks/use-notification'

function App() {

  // custom hook - useNotification(position)
  const { NotificationComponent, triggerNotification } = useNotification("top-right")

  return (
    <div className='app'>
      <h1>Toast Notification</h1>
      <button onClick={() => triggerNotification({
        type : "success",
        pos : "top-left",
        message : "File sent successfully!",
        duration : 3000,
      })}>Trigger Success</button>

      <button onClick={() => triggerNotification({
        type : "error",
        pos : "top-right",
        message : "File did not sent successfully!",
        duration : 3000,
      })}>Trigger Error</button>

      <button onClick={() => triggerNotification({
        type : "warning",
        pos : "bottom-left",
        message : "File is too large!",
        duration : 3000,
      })}>Trigger Warning</button>

      <button onClick={() => triggerNotification({
        type : "info",
        pos : "bottom-right",
        message : "File contains sensitive information.",
        duration : 3000,
      })}>Trigger Info</button>
      {NotificationComponent}
    </div>
  )
}

export default App
