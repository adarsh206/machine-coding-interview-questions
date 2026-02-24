
import './App.css'
import 'animate.css'
import { AlarmCheck, Plus, Trash2 } from 'lucide-react'
import { Button, DatePicker, Form, Input, message, Modal, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { useAlarm } from './zustand/useAlarm';
import { nanoid } from 'nanoid';
import moment from 'moment';

const audio = new Audio("/sounds/alarm.mp3");
audio.loop = true;


function App() {

  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const { alarms, setAlarm, deleteAlarm, updateAlarm} = useAlarm();
  const [updateCount, setUpdateCount] = useState(0);

  const createAlarm = (values) => {
    values.datetime = values.datetime.toDate();
    values.id = nanoid();
    values.status = "on"
    values.triggered = false
    setAlarm(values);
    message.success("Alarm set successfully!");
    handleClose();
    setUpdateCount(updateCount + 1);
    console.log(values);
  }
  

  const handleClose = () => {
    setOpen(false);
    form.resetFields();
  }

  const onOffAlarm = (value, id) => {
    const payload = {
      status : value ? "on" : "off"
    }
    updateAlarm(id, payload)
    
  }

  useEffect(() => {

    if(alarms.length === 0){
      return
    }
    const interval = setInterval(() => {
      const now = moment();
     alarms.forEach((alarm) => {
        if(alarm.status === "on" && !alarm.triggered && moment(alarm.datetime).isSameOrBefore(now)){
          audio.play();
          updateAlarm(alarm.id, {
            triggered : true,
            status : "off"
          })
        }
     });
    }, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [updateCount])

  return (
  <div className='bg-gray-200 min-h-screen'>
    <div className='bg-white w-7/12 mx-auto shadow-lg animate__animated animate__fadeIn'>
      <img src='/images/banner.png' />

      <div className='p-8 space-y-6'>
        <div className='flex justify-between items-center bg-slate-900 p-4 rounded-lg'>
          <h1 className='text-3xl font-bold text-white'>Alarms</h1>
          <button onClick={() => setOpen(true)} className='flex items-center justify-center px-8 py-2 bg-green-500 hover:bg-green-600 transition duration-300 active:scale-80 gap-1 text-white rounded font-medium'>
            <Plus className='w-4 h-4'/>Add Alarm
          </button>
        </div>
   
        <div className='grid grid-cols-2 b-gray-100 p-6 rounded-lg gap-6'>
          {
            alarms.map((item, index) => (
              <div key={index} className='bg-white rounded-lg p-4 shadow'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-2xl font-bold'>{moment(item.datetime).format('hh:mm:ss A')}</h1>
                  <Switch defaultChecked={item.status === "on"} checkedChildren="ON" unCheckedChildren="OFF" onChange={(v) =>onOffAlarm(v, item.id)}/>
                </div>
                <div>
                  <p className='text-gray-600 text-[13px]'>{moment(item.datetime).format('MMM DD, YYYY')}</p>
                </div>
                <div className='flex items-center justify-between mt-4'>
                  <h1>{item.title}</h1>
                  <Button onClick={() =>deleteAlarm(item.id)} type='primary' danger icon={<Trash2 className='w-3 h-3' />}>Delete</Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

    <Modal open={open} footer={null} title="New Alarm" onCancel={handleClose}>
      <Form layout='vertical' onFinish={createAlarm} form={form}>
        <Form.Item name="title" rules={[{ required : true }]} className='font-medium'>
          <Input placeholder='Medicine Reminder' size='large'/>
        </Form.Item>

         <Form.Item name="datetime" rules={[{ required : true }]} className='font-medium'>
          <DatePicker showTime size='large' className='w-full'/>
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' size='large'>Submit</Button>
        </Form.Item>
      </Form>
    </Modal>

    <Modal open footer={null}>
        <div className='flex flex-col items-center'>
         <AlarmCheck className='w-48 h-48 animate__animated animate__pulse animate__infinite'/>
         <h1 className='text-4xl font-bold'>Medicine Reminder</h1>
         <Button type='primary' danger size='large' className='px-8! mt-5!'>Close</Button>
        </div>
    </Modal>
  </div>
  )
}


export default App
