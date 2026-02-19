
import './App.css'
import { Button, Input, Modal, Select, Form } from 'antd'
import { Plus, Trash2 } from 'lucide-react'
import 'animate.css'
import { useState } from 'react'

function App() {
 
  const [open, SetOpen] = useState(false);

  const createBook = (value) => {
    console.log(value)
  }

  const handleClose = () => {
    
  }


  return (
   <div className='py-16 min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900'>
    <div className='animate__animated animate__fadeIn w-10/12 mx-auto p-8 bg-slate-800 min-h-[2000px] border border-slate-600 rounded-xl overflow-y-auto'>
      
      <div className='flex justify-between items-center'>
        <h1 className='text-white/60 text-5xl font-bold text-center'>Book Library</h1>
        <Button onClick={() => SetOpen(true)} size='large' className='bg-rose-500! shadow-none! active:scale-80! duration-300!' type='primary' icon={<Plus />}>Add a new book</Button>
      </div>
      
      <div className='grid grid-cols-3 gap-8 mt-8'>
        
        <div className='bg-slate-900 border border-slate-600 p-4 rounded-lg overflow-hidden'>
            <h1 className='text-orange-600 text-4xl font-bold'>Unread</h1>
            <p className='text-white text-9xl font-bold animate__animated animate__slideInUp'>12</p>
        </div>

        <div className='bg-slate-900 border border-slate-600 p-4 rounded-lg overflow-hidden'>
            <h1 className='text-green-500 text-4xl font-bold'>Reading</h1>
            <p className='text-white text-9xl font-bold animate__animated animate__slideInUp'>1</p>
        </div>

        <div className='bg-slate-900 border border-slate-600 p-4 rounded-lg overflow-hidden'>
            <h1 className='text-amber-500 text-4xl font-bold'>Completed</h1>
            <p className='text-white text-9xl font-bold animate__animated animate__slideInUp'>40</p>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-8 mt-8'>
        {
          Array(20).fill(0).map((item, index) => (
            <div key={index} className='bg-slate-900 border border-slate-600 p-4 rounded-lg'>
              <img src='/book1.jpg'  className='w-full h-[170px] object-cover rounded-lg'/>
              <h1 className='text-white text-lg font-medium mt-2'>The lean startup</h1>
              <label className='text-white/60'>19 February 2026, 10:00 AM</label>
              <div className='flex justify-between items-center mt-3'>
                <Select className='w-[100px]' defaultValue="unread">
                  <Select.Option value="unread">Unread</Select.Option>
                  <Select.Option value="reading">Reading</Select.Option>
                  <Select.Option value="completed">Completed</Select.Option>
                </Select>
                <Trash2 className="text-rose-500 active:scale-80 duration-300 hover:scale-125" />
              </div>
            </div>
          ))
        }
      </div>
    </div>

    <Modal open={open} footer={null} title="Add a new book">
        <Form onFinish={createBook}>
          <Form.Item name="name" rules={[{ required : true }]}>
            <Input placeholder='Enter a book name' size='large'/>
          </Form.Item>

          <Form.Item name="poster" rules={[{ type : 'url'}]}>
            <Input placeholder='Enter a book poster image url' size='large'/>
          </Form.Item>

          <Form.Item>
            <Button htmlType='submit' type='primary' size='large' danger>Save</Button>
          </Form.Item>
        </Form>
    </Modal>
   </div>
  )
}

export default App
