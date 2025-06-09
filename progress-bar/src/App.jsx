
import './App.css'


const ProgressBar = ({progress}) => {
  return <div className='outer'>
    <div className='inner' style={{width: `${progress}%`}}>{progress}%</div>
  </div>
}


function App() {
 
  const bars = [5, 10, 30, 50, 70, 90, 100]

  return (
    <div className='App'>
     <h1>Progress Bar</h1>
     {
      bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))
     }
     
    </div>
  )
}

export default App
