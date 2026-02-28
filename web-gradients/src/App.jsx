
import { useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify'

function App() {
 
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");
  const [gradients, setGradients] = useState([]);

  const getHexColorCode = () => {
    const rgb =  255 * 255 * 255;
    const random = Math.random() * rgb;
    const int = Math.floor(random);
    const hexCode = int.toString(16);
    const colorHex = hexCode.padStart(6, '0')  // it will add '0' to the left till the length of hexCode did not get 6
    return `#${colorHex}`
  }

  const generateGradient = () => {
    const colors = [];

    for(let i = 0; i < num; i++){
      const color1 = getHexColorCode();
      const color2 = getHexColorCode();
      const color3 = getHexColorCode();
      const degree = Math.floor(Math.random() * 360);
      const degreeString = `${degree}deg`
      if(type === 'linear'){
        colors.push({
          gradient : `linear-gradient(${degreeString}, ${color1}, ${color2}, ${color3})`,
          css : `background : 'linear-gradient(${degreeString}, ${color1}, ${color2}, ${color3})'`,
        })
      }
      else if(type === "radial"){
        colors.push({
          gradient : `radial-gradient(circle, ${color1}, ${color2})`,
          css : `background : 'radial-gradient("circle", ${color1}, ${color2})'`,
        })
      }
      else{
        colors.push({
          gradient : `conic-gradient(${color1}, ${color2}, ${color3})`,
          css : `background : 'conic-gradient(${color1}, ${color2}, ${color3})'`,
        })
      }
    }
    setGradients(colors)
  }

  const onCopy = (css) => {
    navigator.clipboard.writeText(css);
    toast.success("Gradient code copied", {position : 'top-center'})
  }

  useEffect(() => {
    generateGradient();
  }, [num, type])

  return (
   <div className='min-h-screen bg-white py-12'>
      <div className='w-9/12 mx-auto space-y-8'>
        <div style= {{ background: `linear-gradient(to right, ${getHexColorCode()}, ${getHexColorCode()})` }}
        className='flex justify-between p-4 rounded-xl'>
          <h1 className='text-3xl font-bold'>🎨 Gradient Generator - {type}</h1>
          <div className='flex gap-4'>
            <input placeholder='12' onChange={(e) => setNum(Number(e.target.value))} value={num}
            className='border border-slate-300 bg-white rounded-lg w-[100px] p-2'/>
            
            <select value={type} className='border border-slate-300 bg-white rounded-lg w-[100px] p-2' onChange={(e) => setType(e.target.value)}>
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
              <option value="conic">Conic</option>
            </select>
            <button onClick={generateGradient}
            className='px-16 py-2 bg-rose-500 text-white rounded font-medium'>Generate</button>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-4'>
          {
            gradients.map((item, index) => (
              <div key={index} className='h-[180px] rounded-xl relative' style={{
                background : item.gradient
              }}>
                <button onClick={() => onCopy(item.css)}
                className='bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 py-1 px-2 text-[10px]'>
                  COPY
                </button>
              </div>
            ))
          }
        </div>
      </div>
      <ToastContainer />
   </div>
  )
}

export default App
