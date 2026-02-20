
import './App.css'
import { Button, Input, Modal, Select, Form } from 'antd'
import { Plus, Trash2 } from 'lucide-react'
import 'animate.css'
import { useState } from 'react'
import { useBook } from './zustand/useBook'
import { nanoid } from 'nanoid'
import moment  from 'moment'

function App() {
 
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { books, setBook, updateStatus, deleteBook} = useBook()

  const createBook = (value) => {
    value.id = nanoid();
    value.date = new Date();
    value.status = "unread"
    setBook(value);
    handleClose();
  }

  const handleClose = () => {
    setOpen(false);
    form.resetFields();
  }


  return (
   <div className='py-16 min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900'>
    <div className='animate__animated animate__fadeIn w-10/12 mx-auto p-8 bg-slate-800 min-h-[200px] border border-slate-600 rounded-xl overflow-y-auto'>
      
      <div className='flex justify-between items-center'>
        <h1 className='text-white/60 text-5xl font-bold text-center'>Book Library</h1>
        <Button onClick={() => setOpen(true)} size='large' className='bg-rose-500! shadow-none! active:scale-80! duration-300!' type='primary' icon={<Plus />}>Add a new book</Button>
      </div>
      
      <div className='grid grid-cols-3 gap-8 mt-8'>
        
        <div className='bg-slate-900 border border-slate-600 p-4 rounded-lg overflow-hidden'>
            <h1 className='text-orange-600 text-4xl font-bold'>Unread</h1>
            <p className='text-white text-9xl font-bold animate__animated animate__slideInUp'>
              {
                books.filter(item => item.status === "unread").length
              }
            </p>
        </div>

        <div className='bg-slate-900 border border-slate-600 p-4 rounded-lg overflow-hidden'>
            <h1 className='text-green-500 text-4xl font-bold'>Reading</h1>
            <p className='text-white text-9xl font-bold animate__animated animate__slideInUp'>
              {
                books.filter(item => item.status === "reading").length
              }
            </p>
        </div>

        <div className='bg-slate-900 border border-slate-600 p-4 rounded-lg overflow-hidden'>
            <h1 className='text-amber-500 text-4xl font-bold'>Completed</h1>
            <p className='text-white text-9xl font-bold animate__animated animate__slideInUp'>
              {
                books.filter(item => item.status === "completed").length
              }
            </p>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-8 mt-8'>
        {
          books.map((item, index) => (
            <div key={index} className='bg-slate-900 border border-slate-600 p-4 rounded-lg'>
              <img src={item.poster || "/book1.jpg"}  className='w-full h-[170px] object-cover rounded-lg'/>
              <h1 className='text-white text-lg font-medium mt-2'>{item.name}</h1>
              <label className='text-white/60'>{moment(item.date).format('DD MMM YYYY, hh:mm A')}</label>
              <div className='flex justify-between items-center mt-3'>
                <Select className='w-25' defaultValue={item.status} onChange={(v) => updateStatus(item.id, v)}>
                  <Select.Option value="unread">Unread</Select.Option>
                  <Select.Option value="reading">Reading</Select.Option>
                  <Select.Option value="completed">Completed</Select.Option>
                </Select>
                <Trash2 onClick={() => deleteBook(item.id)} className="text-rose-500 active:scale-80 duration-300 hover:scale-125" />
              </div>
            </div>
          ))
        }
      </div>
    </div>

    <Modal open={open} footer={null} title="Add a new book" onCancel={handleClose}>
        <Form onFinish={createBook} form={form}>
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
