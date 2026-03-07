
import './App.css'
import { Button, Card, Form, Input, InputNumber, Modal, Select, Tag } from 'antd'
import { Plus } from 'lucide-react'
import { useState } from 'react'

function App() {
  
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm()

  const createItem = (values) => {
    console.log(values)
  }

  const handleClose = () => {
    setOpen(false);
    form.resetFields()
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
            Array(24).fill(0).map((item, index) => (
              <Card key={index} hoverable className='shadow-lg' 
              cover={<img className='w-40! !h-40 object-cover! mx-auto'
              src='data:image/jpeg;base64,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'/>}>
                <Card.Meta title="Laptop cover" description="1 PC" />
                
                <div className='flex flex-wrap gap-3 mt-4'>
                  <Tag>Electronic</Tag>
                  <Tag>Electronic</Tag>
                  <Tag>Electronic</Tag>
                  <Tag>Electronic</Tag>
                </div>

                <div className='mt-4 space-x-3'>
                  <Button variant='solid' color='green'>Edit</Button>
                  <Button variant='solid' color='pink'>Delete</Button>
                </div>
              </Card>
            ))
          }
        </div>        
      </div>

      <Modal open={open} onCancel={handleClose} footer={null} title="Add Item">
          <Form onFinish={createItem} form={form}>
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
              <Button htmlType='submit' type='primary' size='large'>Submit</Button>
            </Form.Item>
          </Form>
      </Modal>
    </div>
  )
}

export default App
