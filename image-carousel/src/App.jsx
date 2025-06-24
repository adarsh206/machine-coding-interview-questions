
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const url = 'https://www.reddit.com/r/aww/top/.json?t=all';
    const res  = await fetch(url);
    const result = await res.json();
    const data = result.data.children;
    console.log(result)
    const list = data.filter((item) => 
      item.data.url_overridden_by_dest.includes('.jpg'))
    .map((item) => item.data.url_overridden_by_dest)
    setImages(list);
  }

  useEffect(() => {
    fetchImages();
  }, [])


  return (
   <div className='App'>
    <button>
      {"<"}
    </button>
    <img src='' alt='not-found'/>
    <button>
      {">"}
    </button>
   </div>
  )
}

export default App
