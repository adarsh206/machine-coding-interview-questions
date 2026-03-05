
import JSZip from 'jszip'
import './App.css'
import { saveAs } from 'file-saver';

function App() {
 
  const createZip = async () => {
    const zip = new JSZip();
    zip.file("demo.txt", "hello")
    const blob = await zip.generateAsync({ type: "blob"});
    saveAs(blob, "files.zip")
  }


  return (
   <div>
    <button onClick={createZip}>Create Zip</button>
   </div>
  )
}

export default App
