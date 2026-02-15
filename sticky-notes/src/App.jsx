
import './App.css'
import 'animate.css'
import { Plus } from 'lucide-react'
import { Button, Form, Input, Modal } from 'antd'
import { useState } from 'react'


const colors = [
  "#fec971",
  "#fe9b71",
  "#b592fd",
  "#00d4fe",
  "#e3ee8e",
  "#7F00FF",
  "#FF0000"
]

function App() {
  
  const [selectedColor, setSelectedColor] = useState("#b592fd");

  return (
    <div className='flex items-center justify-center h-screen overflow-hidden p-12'>
      <div className='bg-white shadow-xl border border-slate-200 w-full h-full rounded-4xl flex p-8 gap-8'>
        <div className='flex items-center flex-col gap-8'>
          <button className='bg-slate-900 text-white w-12 h-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-950 active:scale-80 transition duration-200'>
            <Plus />
          </button>

          <div className='flex flex-col gap-4'>
            {
              colors.map((color, index) => (
                <button style={{background: color}}
                key={index} className='bg-slate-900 text-white w-8 h-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-950 active:scale-80 transition duration-200' />
              ))
            }
            
          </div>
        </div>

        {/* this div gives the thin separate line between two div */}
        <div className='border-r border-r-gray-200'/>

        <div className='flex-1'>
          <h1 className='text-2xl font-medium text-slate-900'>Notes</h1>
        </div>
      </div>
      <Modal open footer={null} title={"Create your note"}>
        <Form>
          <Form.Item rules={[{required : true}]} name="content">
            <Input.TextArea 
              placeholder='Your content goes here...'
              rows={3}
            />
          </Form.Item>
          
          <div className='flex gap-3 mb-8'>
             {
              colors.map((color, index) => (
                <button type='button' style={{background: color}} onClick={() => setSelectedColor(color)}
                key={index} className={`${selectedColor === color ? "scale-140 border-2 shadow" : ""} hover:scale-120 bg-slate-900 text-white w-8 h-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-950 active:scale-80 transition duration-200`} />
              ))
            }
      
          </div>

          <Form.Item>
            <Button htmlType='submit' type='primary' danger>Save</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default App
