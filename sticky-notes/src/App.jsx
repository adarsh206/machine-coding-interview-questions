
import './App.css'
import 'animate.css'
import { Plus } from 'lucide-react'
import { Button, Form, Input, Modal } from 'antd'
import { useState } from 'react'
import { useNotes } from './zustand/useNotes'
import { nanoid } from "nanoid";
import moment from "moment";

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
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const {notes, setNotes} = useNotes();
  const [filtered, setFiltered] = useState(notes);


  const createNote = (values) => {
    values.color = selectedColor
    values.date = new Date();
    values.id = nanoid();
    setNotes(values);
    setFiltered(notes);
    handleModalClose();
  }

  const handleModalClose = () => {
    setOpen(false);
    setSelectedColor("#b592fd");
    form.resetFields();
  }

  const filterNotes = (color) => {
    const data = color === "all" ? notes : notes.filter(item => item.color === color);
    setFiltered(data);
  }

  return (
    <div className='flex items-center justify-center h-screen overflow-hidden p-12'>
      <div className='overflow-auto animate__animated animate__fadeIn bg-white shadow-xl border border-slate-200 w-full h-full rounded-4xl flex p-8 gap-8'>
        <div className='flex items-center flex-col gap-8'>
          <button onClick={() => setOpen(true)}
          className='bg-slate-900 text-white w-12 h-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-950 active:scale-80 transition duration-200'>
            <Plus />
          </button>

          <div className='flex flex-col gap-4'>
            <button onClick={() => filterNotes("all")}
            className='text-xs border-2 font-medium hover:text-white w-8 h-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-950 active:scale-80 transition duration-200'>
                  All
                </button>
            {
              colors.map((color, index) => (
                <button style={{background: color}} onClick={() => filterNotes(color)}
                key={index} className='bg-slate-900 text-white w-8 h-8 flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-950 active:scale-80 transition duration-200' />
              ))
            }
            
          </div>
        </div>

        {/* this div gives the thin separate line between two div */}
        <div className='border-r border-r-gray-200'/>

        <div className='flex-1'>
          <h1 className='text-2xl font-medium text-slate-900'>Notes</h1>
          <div className='mt-4 grid grid-cols-4 gap-6'>
            {
              filtered.map((item, index) => (
                <div key={index} className='p-4 rounded-xl h-32 overflow-auto animate__animated animate__pulse' style={{background: item.color}}>
                  <p className='text-xs font-medium text-slate-800'>{item.content}</p>
                  <label className='text-xs text-white flex mt-2'>{moment(item.date).format("DD MMM YYYY, hh:mm A")}</label>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Modal open={open} footer={null} title={"Create your note"} onCancel={handleModalClose}>
        <Form onFinish={createNote} form={form}>
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
