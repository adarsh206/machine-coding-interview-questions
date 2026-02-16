
import './App.css'
import '@ant-design/v5-patch-for-react-19';
import { Button, Card, Empty, Form, Input, InputNumber, message, Select, Tooltip } from 'antd';
import { Copy } from 'lucide-react'
import { faker } from '@faker-js/faker';
import { nanoid } from "nanoid"
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



function App() {
 
  const [payload, setPayload] = useState("");

  // generate user data
  const generateUser = () => {
    return {
        id : nanoid(),
        fullname : faker.person.fullName(),
        email : faker.internet.email(),
        mobile : faker.phone.number({ style: 'international'}),
        gender : faker.person.gender(),
        address : faker.location.streetAddress({ useFullAddress: true }),
        city : faker.location.city(),
        state : faker.location.state(),
        country : faker.location.country(),
        pincode : faker.location.zipCode(),
        createdAt : faker.date.anytime()
      
    }
  }

  // generate products data
  const generateProducts = () => {
    return {
        id : nanoid(),
        title : faker.commerce.productName(),
        description : faker.commerce.productDescription(),
        price : Number(faker.commerce.price()),
        discount : Number(faker.commerce.price({ min : 0, max : 50 })),
        rating : Number(faker.commerce.price({ min : 1, max : 5 })),
        category : faker.commerce.productAdjective(),
        brand : faker.company.buzzNoun(),
        image : faker.image.urlLoremFlickr({ category : 'product'}),
        createdAt : faker.date.anytime()
      
    }
  }

  const generateData = (values) => {

    const tmp = [];
    for(let i = 0; i < values.noOfData; i++){
      if(values.data === "users"){
        tmp.push(generateUser());
      }
      else if(values.data === "products"){
        tmp.push(generateProducts());
      }
    }

    const str = JSON.stringify(tmp, null, 4);
    setPayload(str);
  }

  const onCopy = () => {
    navigator.clipboard.writeText(payload);
    message.success("Data copied");
  }

  return (
   <div className='bg-gray-100 min-h-screen py-10'>
      <div className='w-9/12 mx-auto flex flex-col gap-12'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Dummy Data Generator</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab cumque libero, odit aperiam beatae cum sed ipsum,
            consectetur nihil hic explicabo sint non fuga placeat animi? Suscipit, aut eligendi.
          </p>
        </div>

        <Card>
          <Form className='flex gap-8' layout='vertical' onFinish={generateData} initialValues={{
            data: "users",
            noOfData: 20
          }}>
            <Form.Item label="Choose Data" name="data" rules={[{ required: true}]} className='w-full'>
              <Select size='large' placeholder="Choose data">
               <Select.Option value="users">Users</Select.Option>
               <Select.Option value="products">Products</Select.Option>
               <Select.Option value="payments">Payments</Select.Option>
               <Select.Option value="employees">Employees</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Number of Data" name="noOfData" rules={[{ required: true}]} className='w-full'>
              <InputNumber max={100} className='!w-full' size='large' placeholder='Enter number of data'/>
            </Form.Item>

            <Form.Item  label=" ">
              <Button htmlType='submit' size='large' type='primary'>Generate</Button>
            </Form.Item>
          </Form>
        </Card>

          {
            payload.length === 0 ? <Empty description="Click generate to create your first payload"/> :
          <Card title="Users" extra={
            <Tooltip title="Copy data">
              <Copy onClick={onCopy} className='cursor-pointer'/>
            </Tooltip>
          }>
            <SyntaxHighlighter language='javascript' style={a11yDark} showLineNumbers>
            {payload}
          </SyntaxHighlighter>
          </Card>
          }
      </div>
   </div>
  )
}

export default App
