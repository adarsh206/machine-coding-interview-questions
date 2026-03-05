
import JSZip from 'jszip'
import './App.css'
import { saveAs } from 'file-saver';

function App() {
 
  // const createZip = async () => {
  //   const zip = new JSZip();
  //   zip.file("demo.txt", "hello")
  //   zip.file("sample.json", JSON.stringify({ name : "hello", salary : 1000 }, null, 2)) // 2 means it will take 2 tap space & null means it will follow proper alignment
  //   const blob = await zip.generateAsync({ type: "blob"});
  //   saveAs(blob, "files.zip")
  // }

  const createZip = async (e) => {
    try {
      const zip = new JSZip();
      const files = e.target.files;
      Array.from(files).forEach((file) => {
        zip.file(file.name, file)
      })
      const blob = await zip.generateAsync({ type : "blob"})
      saveAs(blob, "new-compressed.zip");

    } catch (error) {
      console.log("Error - ", error.message)
    }
  }

  return (
   <div className='bg-gray-200 h-screen flex items-center justify-center'>
    <div className='bg-white shadow-lg rounded-2xl p-8 w-lg text-center'>
      <h1 className='text-4xl font-bold'>Create Zip</h1>
      <input type='file' multiple className='bg-blue-500 text-white font-medium rounded-lg p-3 mt-4 hover:bg-blue-600 active:scale-80 transition duration-300'
      onChange={createZip}/>
    </div>
   </div>
  )
}

export default App
