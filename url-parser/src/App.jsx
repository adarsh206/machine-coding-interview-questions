
import { useState } from 'react'
import './App.css'

function App() {

  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);

  const parseUrl = (e) => {
    e.preventDefault();
    const u = new URL(url);
    const hostParts = u.hostname.split(".");


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
      host : u.host,
      hostname : u.hostname,
      query
    }
    console.log(payload);
    setData(payload);
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

      <div className='grid grid-cols-2 gap-8 mt-6'>
      {
        data && Object.keys(data).map((item, index) => {

          const type = typeof data[item];
          const newData = type === "string" ? data[item] : JSON.stringify(data[item], null, 2);

          return type === "string" ? (
             <div key={index} className='bg-white shadow border border-gray-200 rounded-lg p-4'>
              <h1 className='text-lg font-medium capitalize'>{item}</h1>
              <p className='text-gray-500'>{newData}</p>
            </div>
          ) 
          :
          (
            <div className='bg-white shadow border border-gray-200 rounded-lg p-4 col-span-2'>
              <h1 className='text-lg font-medium capitalize mb-4'>{item}</h1>
              <textarea className='text-gray-600 w-full border border-gray-200 shadow rounded-lg p-4 h-[300px]'>
                {newData}
            </textarea>
            </div>
            
          )      
})
      }
      </div>
    </div>
  </div>
  )
}

export default App
