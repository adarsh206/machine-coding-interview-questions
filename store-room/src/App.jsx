
import './App.css'
import { Button, Card, Form, Input, InputNumber, Modal, Select, Tag } from 'antd'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useStoreRoom } from './zustand/useStoreRoom';
import { nanoid } from 'nanoid'

function App() {
  
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { stores, setStore, deleteStore, updateStore } = useStoreRoom();
  const [editId, setEditId] = useState(null);
  

  const createItem = (values) => {
    values.id = nanoid();
    setStore(values);
    handleClose();
    console.log(values)
  }

  const handleClose = () => {
    setOpen(false);
    form.resetFields();
    setEditId(null)
  }

  const editStore = (item) => {
    setEditId(item.id);
    setOpen(true);
    form.setFieldsValue(item)
  }

  const saveItem = (values) => {
    updateStore(editId, values);
    handleClose()
  } 

  return (
    <div className='bg-gray-200 min-h-screen py-12'>
      <div className='w-10/12 bg-white rounded-4xl shadow-lg p-8 mx-auto space-y-12'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-bold text-blue-600'>📦 Store Room</h1>
          <div className='space-x-4!'>
            <Input size='large' placeholder='Search this store'
              className='!w-lg'/>
              <Button onClick={() => setOpen(true)} size='large' variant='solid' color='blue' icon={<Plus className='w-4 h-4'/>}>Add Item</Button>
          </div>
          
        </div>

        <div className='grid grid-cols-4 gap-8'>
          {
            stores.map((item) => (
              <Card key={item.id} hoverable className='shadow-lg' 
              cover={<img className='w-40! !h-40 object-cover! mx-auto mt-4'
              src={item?.image || '/store.png'} />}>
                <Card.Meta className='capitalize' title={item.title} description={`${item.qnt} ${item.unitOfMeasure}`} />
                
                <div className='flex flex-wrap gap-3 mt-4'>
                  {
                    item.keywords.map((k, kIndex) => (
                      <Tag key={kIndex} className='!capitalize'>{k}</Tag>
                    ))
                  }
                  
                </div>

                <div className='mt-4 space-x-3'>
                  <Button variant='solid' color='green' onClick={() => editStore(item)}>Edit</Button>
                  <Button variant='solid' color='pink' onClick={() => deleteStore(item.id)}>Delete</Button>
                </div>
              </Card>
            ))
          }
        </div>        
      </div>

      <Modal open={open} onCancel={handleClose} footer={null} title="Add Item">
          <Form onFinish={editId ? saveItem : createItem} form={form}>
            <Form.Item name="title" rules={[{required: true}]}>
              <Input size='large' placeholder='Title'/>
            </Form.Item>

            <Form.Item name="qnt" rules={[{required: true, type: 'number'}]}>
              <InputNumber size='large' placeholder='Quantity' className='w-full!'/>
            </Form.Item>

            <Form.Item name="unitOfMeasure" rules={[{required: true}]}>
              <Select size='large' placeholder="Choose value" options={[
                {label: "PC", value: "pc"},
                {label: "KG", value: "kg"},
                {label: "LTR", value: "ltr"},
                {label: "GM", value: "gm"},
              ]}/>
            </Form.Item>

            <Form.Item name="keywords" rules={[{required: true}]}>
              <Select size='large' placeholder="Enter keywords" mode='tags'/>
            </Form.Item>

             <Form.Item name="image" rules={[{type : 'url'}]}>
              <Input size='large' placeholder='image url'/>
            </Form.Item>

            <Form.Item>
              {
                editId ? 
                <Button htmlType='submit' type='primary' danger size='large'>Save</Button>
                :
                <Button htmlType='submit' type='primary' size='large'>Submit</Button>
              }
            </Form.Item>
          </Form>
      </Modal>
    </div>
  )
}

export default App
