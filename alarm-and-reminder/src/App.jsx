
import './App.css'
import 'animate.css'
import { Plus, Trash2 } from 'lucide-react'
import { DatePicker, Form, Input, Modal, Switch } from 'antd';

function App() {
  

  return (
  <div className='bg-gray-200 min-h-screen'>
    <div className='bg-white w-7/12 mx-auto shadow-lg animate__animated animate__fadeIn'>
      <img src='/images/banner.png' />

      <div className='p-8 space-y-6'>
        <div className='flex justify-between items-center bg-slate-900 p-4 rounded-lg'>
          <h1 className='text-3xl font-bold text-white'>Alarms</h1>
          <button className='flex items-center justify-center px-8 py-2 bg-green-500 hover:bg-green-600 transition duration-300 active:scale-80 gap-1 text-white rounded font-medium'>
            <Plus className='w-4 h-4'/>Add Alarm
          </button>
        </div>
   
        <div className='grid grid-cols-2 b-gray-100 p-6 rounded-lg gap-6'>
          {
            Array(6).fill(0).map((item, index) => (
              <div key={index} className='bg-white rounded-lg p-4 shadow'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-2xl font-bold'>06 : 30 AM</h1>
                  <Switch defaultChecked checkedChildren="ON" unCheckedChildren="FF" />
                </div>
                <div>
                  <p className='text-gray-600 text-[13px]'>February 24, 2026</p>
                </div>
                <div className='flex items-center justify-between mt-4'>
                  <h1>Medicine Reminder</h1>
                  <button type='primary' danger icon={<Trash2 className='w-3 h-3' />}>Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

    <Modal open footer={null} title="New Alarm">
      <Form layout='vertical'>
        <Form.Item name="title" rules={[{ required : true }]} className='font-medium'>
          <Input placeholder='Medicine Reminder' size='large'/>
        </Form.Item>

         <Form.Item name="datetime" rules={[{ required : true }]} className='font-medium'>
          <DatePicker showTime size='large' className='w-full'/>
        </Form.Item>
      </Form>
    </Modal>
  </div>
  )
}

export default App
