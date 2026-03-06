
import './App.css'
import "animate.css"
import { Button, Form, Input, Modal } from "antd"
import { Plus, Lock, Unlock } from 'lucide-react'
import { useState } from 'react'

function App() {
  
  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false);
  }

  return (
   <div className='bg-gray-200 min-h-screen py-12'>
      <div className='rounded-2xl shadow-lg p-8 bg-white w-10/12 mx-auto'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold'>Private Image Galley</h1>
          <Button size='large' type='primary' icon={<Plus className='w-4 h-4'/>} onClick={() => setOpen(true)}>Add Image</Button>
        </div>

        <div className='grid grid-cols-4 gap-6 mt-6'>
          {
            Array(20).fill(0).map((item, index) => (
              <div key={index} className='bg-white shadow-lg rounded-2xl p-4 border border-gray-200 animate__animated animate__fadeIn'>
                <img src='/image.jpg' className='w-full h-[160px] object-cover rounded-2xl'/>
                
                <div className='mt-3'>
                  <h1 className='text-lg font-medium'>Sample Image</h1>
                  <p className='text-gray-600 text-sm mb-3'>06 March 2026</p>
                  <Button icon={<Lock className='w-4 h-4'/>} variant='solid' color='purple'>Lock</Button>
                  <Button icon={<Unlock className='w-4 h-4'/>} variant='solid' color='magenta'>Unlock</Button>
                </div>
              </div>      
            ))
          }
        </div>
      </div>

      <Modal open={open} footer={null} title="New Image" onCancel={closeModal}>
          <Form>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Enter image name" size='large' />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password placeholder="Password" size='large' />
            </Form.Item>

             <Form.Item name="image" rules={[{ required: true }]}>
              <Input type='file' size='large' accept='image/*'/>
            </Form.Item>

            <Form.Item name="image" rules={[{ required: true }]}>
              <Button htmlType='submit' type='primary' size='large'>Submit</Button>
            </Form.Item>
          </Form>
      </Modal>
   </div>
  )
}

export default App
