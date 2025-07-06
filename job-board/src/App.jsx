
import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';

function App() {
 
  const [postIDs, setPostIDs] = useState([]);

  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;

    } catch (error) {
      console.log('Error:', error)
    }
  }

  const fetchPostMetaData = async (ids) => {
    const apiCalls = ids.map((id) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
      return getData(url)
    });
    const results = await Promise.all(apiCalls);
    console.log(results);
  }

  const fetchPostIDs = async () => {
    const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
    const data = await getData(url);
    const ids = data.splice(0, 9);
    setPostIDs(ids);
    fetchPostMetaData(ids);
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
