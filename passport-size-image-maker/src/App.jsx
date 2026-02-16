
import { Upload } from 'lucide-react'
import './App.css'
import { useCallback, useState } from 'react'
import Cropper from 'react-easy-crop';

function App() {
  
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({x : 0, y : 0});
  const [pixels, setPixels] = useState(null)

  const onCropComplete = useCallback((_, pixels) => {
    setPixels(pixels)
  }, [])

  return (
   <div className='bg-gray-200 min-h-screen p-10'>
      <div className='relative h-[420px] bg-black rounded-xl overflow-hidden max-w-xl mx-auto'>
        {
          !image &&
        <div className='flex flex-col items-center justify-center h-full'>
          <Upload className='w-12 h-12 text-white'/>
          <h1 className='text-white text-xl'>Choose an image</h1>
          <input type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])}
          className='opacity-0 absolute top-0 left-0 w-full h-full rounded-xl'/>
        </div>
        }
        {
          image &&
          <Cropper image={URL.createObjectURL(image)} aspect={35 / 45} crop={crop} onCropChange={setCrop} onCropComplete={onCropComplete}/>
        }
      </div>
   </div>
  )
}

export default App
