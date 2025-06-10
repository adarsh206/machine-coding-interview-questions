
import './App.css'


const ProgressBar = ({progress}) => {
  return <div className='outer'>
    <div className='inner' style={{
      // width: `${progress}%`, 
      transform: `translateX(${progress - 100}%)`,
      color: progress < 5 ? "black" : "white"}}
    role='progressbar'
    aria-valuenow={progress}
    aria-valuemax="100"
    aria-valuemin="0"
    >{progress}%</div>
  </div>
}


function App() {
 
  const bars = [0, 5, 10, 30, 50, 70, 90, 100]

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
