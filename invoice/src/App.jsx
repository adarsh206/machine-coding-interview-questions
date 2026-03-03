

import './App.css'
import { Plus, Printer } from 'lucide-react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Divider, Drawer, Form, Input, InputNumber, Select, Space, Tooltip } from 'antd'
import { useState } from 'react';
import  moment  from 'moment'

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
        {
      label : "Customer name",
      name : "customerName",
      required : true
    },
    {
      label : "Customer email",
      name : "customerEmail",
      required : true
    },
    {
      label : "Customer address",
      name : "customerAddress",
      required : true
    },
    {
      label : "Customer state",
      name : "customerState",
      required : true
    },
    {
      label : "Customer country",
      name : "customerCountry",
      required : true
    },
    {
      label : "Customer pincode",
      name : "customerPincode",
      required : true
    },
    {
      label : "Choose payment method",
      name : "paymentMethod",
      required : true,
      options : [
        {
          label : "Bank",
          value : "bank"
        },
        {
          label : "UPI",
          value : "upi"
        },
      ]
    },
    {
      label : "Transaction id",
      name : "transactionid",
      required : true
    },
    {
      label : "Due date",
      name : "dueDate",
      required : true
    },
    {
      label : "Gst rate",
      name : "gstRate",
      required : true
    },
  ]

  const generateInvoice = (values) => {
    values.date = moment(values.date).format('DD MMM YYYY')
    values.dueDate = moment(values.dueDate).format('DD MMM YYYY')
    values.products = values.products.map((product) => ({
      ...product,
      amount : (product.qty * product.rate)
    }))
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
              if(item.name === "gstRate"){
                 return (
                  <Form.Item
                  key={index} 
                  label={<h1 className='font-medium text-base'>{item.label}</h1>} name={item.name} rules={[{ required : item.required}]}>
                    <InputNumber size="large" className='w-full!'/>
                  </Form.Item>
               )
              }

              if(item.name === "date" || item.name === "dueDate"){
                return (
                  <Form.Item
                  key={index} 
                  label={<h1 className='font-medium text-base'>{item.label}</h1>} name={item.name} rules={[{ required : item.required}]}>
                    <DatePicker size="large" className='w-full!'/>
                  </Form.Item>
               )
              }

              if(item.name === "paymentMethod"){
                return (
                  <Form.Item
                  key={index} 
                  label={<h1 className='font-medium text-base'>{item.label}</h1>} name={item.name} rules={[{ required : item.required}]}>
                    <Select size='large' className='w-full!' options={item.options} placeholder="Choose payment method" />
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

          <Divider className='col-span-2'>
            Product Details
          </Divider>
          <Form.List name="products" className='col-span-2'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline" className='col-span-2'>
                  <Form.Item
                    {...restField}
                    name={[name, 'item']}
                    rules={[{ required: true, message: 'Item is missing' }]}
                  >
                    <Input placeholder="item" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'qty']}
                    rules={[{ required: true, message: 'Quantity is missing' }]}
                  >
                    <InputNumber placeholder="Quantity" size='large' className='w-full!'/>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'rate']}
                    rules={[{ required: true, message: 'Rate is missing' }]}
                  >
                    <InputNumber placeholder="Rate" className='!w-full' size='large' />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<Plus />} size='large'>
                  Add Products
                </Button>
              </Form.Item>
            </>
          )}
          </Form.List>
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
