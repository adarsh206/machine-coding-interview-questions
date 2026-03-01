

import './App.css'
import { Plus, Printer } from 'lucide-react';
import { Button, DatePicker, Drawer, Form, Input, Tooltip } from 'antd'
import { useState } from 'react';

function App() {
  
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  const formSchema = [
    {
      label : "Invoice no",
      name : "invoiceNo",
      required : true
    },
    {
      label : "Date",
      name : "date",
      required : true
    },
    {
      label : "Company name",
      name : "companyName",
      required : true
    },
    {
      label : "Company email",
      name : "companyEmail",
      required : true
    },
    {
      label : "Company address",
      name : "companyAddress",
      required : true
    },
    {
      label : "Company state",
      name : "companyState",
      required : true
    },
    {
      label : "Company country",
      name : "companyCountry",
      required : true
    },
    {
      label : "Company pincode",
      name : "companyPincode",
      required : true
    },
    {
      label : "Company gst",
      name : "companyGst",
      required : true
    },
  ]

  const generateInvoice = (values) => {
    console.log(values)
  }

  return (
   <div className='bg-gray-200 min-h-screen'>
    <div>

    </div>

    <div className='fixed -translate-y-1/2 top-1/2 left-0 bg-white rounded-r-lg p-4 flex flex-col gap-4 shadow-lg'>
        <Tooltip title="Create a new invoice">
          <button onClick={() => setOpen(true)} className='bg-blue-500 text-white p-2 rounded hover:scale-105 transition duration-300 active:scale-80'>
            <Plus />
          </button>
        </Tooltip>

        <Tooltip title="Print your invoice">
          <button className='bg-blue-500 text-white p-2 rounded hover:scale-105 transition duration-300 active:scale-80'>
            <Printer />
          </button>
        </Tooltip>
    </div>
    <Drawer open={open} onClose={handleClose} size={720} title="Create a new invoice">
      <div>
        <Form layout='vertical' onFinish={generateInvoice} className='grid grid-cols-2 gap-x-6'>
          {
            formSchema.map((item, index) => {
              if(item.name === "date"){
                return (
                  <Form.Item
                  key={index} 
                  label={<h1 className='font-medium text-base'>{item.label}</h1>} name={item.name} rules={[{ required : item.required}]}>
                    <DatePicker size="large" className='w-full!'/>
                  </Form.Item>
        )
              }
              return (
              <Form.Item
               key={index} 
               label={<h1 className='font-medium text-base'>{item.label}</h1>} name={item.name} rules={[{ required : item.required}]}>
                <Input size='large'/>
              </Form.Item>
        )}
        )        
          }
          <Form.Item className='col-span-2'>
            <Button size='large' htmlType='submit' type='primary'>Generate</Button>
          </Form.Item>
        </Form>
      </div>
    </Drawer>
   </div>
  )
}

export default App
