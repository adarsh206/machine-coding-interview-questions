
import { useRef, useState } from 'react'
import './App.css'
import { Download, Image, Subtitles } from "lucide-react"
import html2canvas from 'html2canvas'


function App() {

   const divRef = useRef(null);
   const [inputType, setInputType] = useState(null);
   const [card, setCard] = useState({
      image : null,
      title : null,
      subtitle : null,
      small : null
   })

 const addImage = (e) => {
   const input = e.target
   const file = input.files[0];
   const url = URL.createObjectURL(file);
   setCard({
      ...card,
      image : url
   })
   
}


const addText = (type) => {
   setInputType(inputType === type ? null : type);
}


const onSubmit = (e) => {
   e.preventDefault();
   const value = e.target[0].value.trim()
   console.log(inputType);
   console.log(value);
   setCard({
      ...card,
      [inputType] : value
   })
}


const download = async () => {
   const div = divRef.current;
   const canvas = await html2canvas(div, 3)
   const url = canvas.toDataURL("image/png")
   const a = document.createElement('a');
   a.href = url
   a.target = "_blank"
   a.download = "card.png"
   a.click()
}


const onDragEnd = (e) => {

}

  return (
  <div className='bg-gray-200 h-screen flex items-center justify-center'>
    <div className='bg-white rounded-xl p-4 gap-x-12 grid grid-cols-4 shadow-lg gap-y-6'>
      {
         inputType && 
         <form onSubmit={onSubmit} className='flex col-span-4 gap-3'>
               <input 
                  className='border border-gray-300 rounded py-2 px-3 flex-1'
                  placeholder='Enter content here'
                  required
               />
               <button className='px-6 py-2 rounded text-white bg-violet-600'>Add</button>
         </form>
      }
     
     <button className='relative border-blue-600 w-18 h-18 rounded-lg border-2 hover:scale-120 duration-200 flex items-center justify-center'>
      <Image className='w-8 h-8 hover:scale-120 duration-200 text-blue-600'/>
      <input type='file' className='w-18 h-18 absolute top-0 left-0 opacity-0' onChange={addImage} accept='image/*'/>
     </button> 

     <button onClick={() => addText("title")} className='text-xl font-bold text-rose-600 border-rose-600 w-18 h-18 rounded-lg border-2 flex items-center justify-center'>
        Title
     </button> 

     <button onClick={() => addText("subtitle")} className='font-semibold text-green-400 border-green-400 w-18 h-18 rounded-lg border-2 flex items-center justify-center'>
        Subtitle
     </button> 

     <button onClick={() => addText("small")} className='text-sm font-medium text-amber-400 border-amber-400 w-18 h-18 rounded-lg border-2 flex items-center justify-center'>
        Small
     </button>

     <div ref={divRef}
     style={{
      border : (card.image || card.title || card.subtitle || card.small) ? undefined : '1px dashed #ccc'
     }}
     className='overflow-hidden relative flex items-center justify-center p-8 col-span-4 rounded-lg h-[250px]'>
        {
         (card.image || card.title || card.subtitle || card.small) ?
         <>
            <img src={card.image} className='w-full h-full absolute top-0 left-0 object-cover rounded-lg'/>
            <h1 onDragEnd={onDragEnd} draggable className='cursor-move absolute top-3 left-5 text-white font-semibold text-2xl'>{card.title}</h1>
            <h1 onDragEnd={onDragEnd} draggable className='cursor-move absolute top-12 left-12 text-white font-semibold text-lg'>{card.subtitle}</h1>
            <h1 onDragEnd={onDragEnd}draggable className='cursor-move absolute top-24 left-16 text-white text-base'>{card.small}</h1>
         </>
         :
         <h1 className='text-lg text-gray-500 font-medium'>Visiting Card</h1>
        }  

     </div>
     <button onClick={download}
      className='bg-blue-600 p-3 flex items-center col-span-4 rounded justify-center font-medium text-white gap-2'>
      <Download />Download
     </button>
    </div>
  </div>
  )
}

export default App
