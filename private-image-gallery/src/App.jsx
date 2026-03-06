
import './App.css'
import "animate.css"
import { Button, Form, Input, message, Modal } from "antd"
import { Plus, Lock, Unlock } from 'lucide-react'
import { useState } from 'react'
import { useImage } from './zustand/useImage'
import { nanoid } from 'nanoid'
import moment from 'moment';


function App() {
  
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [file, setFile] = useState(null);
  const { images, setImage} = useImage();
  const [passwordModal, setPasswordModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null)
  const [isUnlocked, setIsUnlocked] = useState(false);


  const closeModal = () => {
    setOpen(false);
    form.resetFields()
  }

  const addImage = (values) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      values.image = fileReader.result
      values.date = new Date()
      values.id = nanoid();
      setImage(values);
      closeModal();
      console.log(values);
    }
  }

  const unlockImage = (id) => {
    setIsUnlocked(false);
    setCurrentImage(id);
    setPasswordModal(true)
  }

  const tryToUnlock = (values) => {
    const password = values.password;
    const check = images.some((image) => image.id === currentImage && image.password === password)
    
    if(!check){
      message.error("Incorrect Password");
      return
    }
    setIsUnlocked(check);
    closePasswordModal();
  }

  const lockImage = () => {
    setCurrentImage(null);
    setIsUnlocked(false)
  }

  const closePasswordModal = () => {
    setPasswordModal(false);
    passwordForm.resetFields();
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
            images.map((item, index) => (
              <div key={index} className='bg-white shadow-lg rounded-2xl p-4 border border-gray-200 animate__animated animate__fadeIn'>
                {
                  (currentImage === item.id && isUnlocked) ?
                  <img src={item.image} className='w-full h-[160px] object-cover rounded-2xl'/>
                  :
                  <div className='w-full h-[160px] bg-gray-100 rounded-2zl flex items-center justify-center'>
                    <Lock className='w-16 h-16'/>
                  </div>

                }
                
                <div className='mt-3'>
                  <h1 className='text-lg font-medium'>{item.name}</h1>
                  <p className='text-gray-600 text-sm mb-3'>{moment(item.date).format('DD MMM YYYY')}</p>
                  {
                    (currentImage === item.id && isUnlocked) ?
                    <Button icon={<Lock className='w-4 h-4'/>} variant='solid' color='purple' onClick={() => lockImage(item.id)}>Lock</Button>
                    :
                    <Button icon={<Unlock className='w-4 h-4'/>} variant='solid' color='magenta' onClick={() => unlockImage(item.id)}>Unlock</Button>
                  }
                </div>
              </div>      
            ))
          }
        </div>
      </div>

      {/* // New Image Section */}
      <Modal open={open} footer={null} title="New Image" onCancel={closeModal}>
          <Form form={form} onFinish={addImage}>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Enter image name" size='large' />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password placeholder="Password" size='large' />
            </Form.Item>

             <Form.Item name="image" rules={[{ required: true }]}>
              <Input type='file' size='large' accept='image/*' onChange={(e) => setFile(e.target.files[0])}/>
            </Form.Item>

            <Form.Item name="image" rules={[{ required: true }]}>
              <Button htmlType='submit' type='primary' size='large'>Submit</Button>
            </Form.Item>
          </Form>
      </Modal>

      {/* //Unlock Password Section */}
       <Modal open={passwordModal} footer={null} title="Unlock Image" onCancel={closePasswordModal}>
          <Form onFinish={tryToUnlock} form={passwordForm}>

            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password placeholder="Password" size='large' />
            </Form.Item>
        
            <Form.Item>
              <Button htmlType='submit' type='primary' size='large'>Unlock</Button>
            </Form.Item>
          </Form>
      </Modal>
   </div>
  )
}

export default App
