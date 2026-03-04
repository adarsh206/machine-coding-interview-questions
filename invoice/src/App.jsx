

import './App.css'
import { Plus, Printer } from 'lucide-react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Divider, Drawer, Form, Input, InputNumber, Select, Space, Tooltip } from 'antd'
import { useState } from 'react';
import  moment  from 'moment'

function App() {
  
  const [open, setOpen] = useState(false);
  const [invoice, setInvoice] = useState(null);
  const [form] = Form.useForm();

  const handleClose = () => {
    setOpen(false);
    form.resetFields()
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
      label : "Company website",
      name : "companyWebsite",
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
      label : "Customer company name",
      name : "customerCompanyName",
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
    values.subtotal = values.products.reduce((sum, item) => sum + item.amount, 0)
    values.tax = (values.subtotal * values.gstRate) / 100
    values.total = values.subtotal + values.tax
    setInvoice(values);
    console.log(values)
    handleClose()
  }

  return (
   <div className='bg-gray-200 min-h-screen print:min-h-0 py-6 print:bg-white print:py-0'>
    <div className='mx-auto bg-white w-[210mm] min-h-[297mm] p-[15mm] shadow-lg print:shadow-none print:m-0'>
      
      <div className='flex justify-between items-start border-b pb-6'>
        <div>
          <h1 className='text-2xl font-bold text-gray-800'>INVOICE</h1>
          <p className='text-sm text-gray-500 mt-1'>#INV-{invoice?.invoiceNo || '0001'}</p>
          <p className='text-sm text-gray-800'>Date: {invoice?.date || '01 March 2026'}</p>
        </div>

        <div className='text-right'>
          <h2 className='text-lg font-semibold text-gray-800'>{invoice?.companyName || 'ABC Solutions Pvt Ltd'}</h2>
          <p className='text-sm text-gray-500'>{invoice?.companyWebsite || 'www.example.com'}</p>       
          <p className='text-sm text-gray-500'>{invoice?.companyAddress || '123 Business street'}</p>       
          <p className='text-sm text-gray-500'>{invoice?.companyState || 'New Delhi'}, {invoice?.companyCountry || 'India'} - {invoice?.companyPincode || '110001'}</p>       
          <p className='text-sm text-gray-500'>GST : 00ABCDE0000Z0Z0</p>       
        </div>
      </div>

        <div className='grid grid-cols-2 gap-8 mt-8'>
          <div>
            <h3 className='text-sm font-semibold text-gray-600 mb-2'>BILL TO</h3>
            <p className='text-sm font-medium text-gray-800'>{invoice?.customerName || 'John Doe'}</p>
            <p className='text-sm text-gray-500'>{invoice?.customerCompanyName || 'XYZ Enterprises'}</p>
            <p className='text-sm text-gray-500'>{invoice?.customerAddress || '456 Client Road'}</p>
            <p className='text-sm text-gray-500'>{invoice?.customerState || 'Mumbai'}, {invoice?.customerCountry || 'India'} - {invoice?.customerPincode || '400001'}</p>
            <p className='text-sm text-gray-500'>Email : {invoice?.customerEmail || 'client@example.com'}</p>
          </div>

          <div className='text-right'>
            <h3 className='text-sm font-semibold text-gray-600 mb-2'>PAYMENT DETAILS</h3>
            <p className='text-sm text-gray-500'>Payment Method: {invoice?.paymentMethod || 'Bank'} Transfer</p>
            <p className='text-sm text-gray-500'>Reference ID: {invoice?.transactionId || 'PAY123456'}</p>
            <p className='text-sm text-gray-500'>Due Date: {invoice?.dueDate || '10 Jan 2026'}</p>
          </div>
        </div>

        <div className='mt-10'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-gray-100 text-left text-sm text-gray-600'>
                <th className='p-3 border'>Description</th>
                <th className='p-3 border text-right'>Qty</th>
                <th className='p-3 border text-right'>Rate</th>
                <th className='p-3 border text-right'>Amount</th>
              </tr>
            </thead>
            <tbody className='text-sm text-gray-700'>
              {
                invoice?.products.map((product, index) => (
                  <tr key={index}>
                  <td className='p-3 border'>{product.item}</td>
                  <td className='p-3 border text-right'>{product.qty}</td>
                  <td className='p-3 border text-right'>₹{product.rate.toLocaleString()}</td>
                  <td className='p-3 border text-right'>₹{product.amount.toLocaleString()}</td>
                </tr>
                ))
              }
              
              <tr>
                <td className='p-3 border'>GST ({invoice?.gstRate || 0}%)</td>
                <td className='p-3 border text-right'>—</td>
                <td className='p-3 border text-right'>—</td>
                <td className='p-3 border text-right'>₹{invoice?.tax || 0}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='flex justify-end mt-6'>
          <div className='w-1/3'>
            <div className='flex justify-between text-sm mb-2'>
              <span className='text-gray-600'>Subtotal</span>
              <span className='text-gray-800'>₹{invoice?.subtotal.toLocaleString() || 0}</span>
            </div>
            <div className='flex justify-between text-sm mb-2'>
              <span className='text-gray-600'>Tax</span>
              <span className='text-gray-800'>₹{invoice?.tax.toLocaleString() || 0}</span>
            </div>
            <div className='flex justify-between text-base font-semibold border-t pt-2'>
              <span>Total</span>
              <span>₹{invoice?.total || 0}</span>
            </div>
        </div>
      </div>
        <div className='mt-12 border-t pt-6 text-sm text-gray-500'>
          <p>Thank you for your business.</p>
          <p className='mt-1'>
            This is a sample invoice generated for demonstration purposes only.
          </p>
        </div>  
    </div>

    <div className='print:hidden fixed -translate-y-1/2 top-1/2 left-0 bg-white rounded-r-lg p-4 flex flex-col gap-4 shadow-lg'>
        <Tooltip title="Create a new invoice" className='print:hidden!'>
          <button onClick={() => setOpen(true)} className='bg-blue-500 text-white p-2 rounded hover:scale-105 transition duration-300 active:scale-80'>
            <Plus />
          </button>
        </Tooltip>

  
          <button onClick={() => window.print()} className='bg-blue-500 text-white p-2 rounded hover:scale-105 transition duration-300 active:scale-80'>
            <Printer />
          </button>
   
    </div>
    <Drawer open={open} onClose={handleClose} size={720} title="Create a new invoice">
      <div>
        <Form form={form} layout='vertical' onFinish={generateInvoice} className='grid grid-cols-2 gap-x-6'>
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
