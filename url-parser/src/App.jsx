
import { useState } from 'react'
import './App.css'

function App() {

  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);

  const parseUrl = (e) => {
    e.preventDefault();
    const u = new URL(url);
    const hostParts = u.hostname.split(".");

    console.log(u);

    let subdomain = "";
    let domain = "";

    if(hostParts.length > 2){
      subdomain = hostParts[0];
      domain = hostParts.slice(1).join(".");
    }
    else{
      domain = u.hostname;
    }

    const query = {};
    u.searchParams.forEach((value, key) => {
      query[key] = value;
    })

    const payload = {
      protocol : u.protocol.replace(":", ""),
      subdomain,
      domain,
      path : u.pathname,
      query,
      host : u.host,
      hostname : u.hostname
    }
    console.log(payload);
  }

  return (
  <div className='bg-gray-200 min-h-screen'>
    <div className='bg-white w-6/12 mx-auto p-12'>
      <h1 className='text-3xl font-bold'>URL Parser</h1>
      <form className='mt-4' onSubmit={parseUrl}>
        <input onChange={(e) => setUrl(e.target.value)}
        type='url' required className='border border-gray-300 rounded p-3 w-full' placeholder='https://www.example.com'/>
        <button className='mt-4 bg-blue-500 cursor-pointer text-white font-medium rounded px-8 py-3 hover:bg-blue-600 active:scale-80 transition duration-300'>Submit</button>
      </form>
    </div>
  </div>
  )
}

export default App
