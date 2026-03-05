
import { Card, Tabs } from 'antd';
import './App.css'
import "animate.css";
import Converter from './components/Converter';

function App() {
 
  const items = [
    {
      key : 1,
      label : "Converter",
      children : <Converter />
    }
  ]

  return (
   <div className='bg-gray-200 min-h-screen py-12'>
    <div className='w-7/12 mx-auto'>
      <Card title={<h1 className='text-2xl font-medium'>Image Converter</h1>}>
        <Tabs items={items}/>
      </Card>
    </div>
   </div>
  )
}

export default App
