
import { useEffect } from 'react';
import './App.css'

function App() {
 
  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;

    } catch (error) {
      console.log('Error:', error)
    }
  }

  const fetchPostIDs = async () => {
    const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
    const data = await getData(url);
    console.log(data)
  }

  useEffect(() => {
    fetchPostIDs();
  }, [])



  return (
  <div className='App'>
    <h1>Job Board</h1>
  </div>
  )
}

export default App
