
import './App.css'
import '@ant-design/v5-patch-for-react-19';
import { Button, Card, Form, Input, InputNumber, Select } from 'antd';

function App() {
 
  const generateData = () => {
    
  }

  return (
   <div className='bg-gray-100 min-h-screen py-10'>
      <div className='w-9/12 mx-auto space-y-12'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Dummy Data Generator</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ab cumque libero, odit aperiam beatae cum sed ipsum,
            consectetur nihil hic explicabo sint non fuga placeat animi? Suscipit, aut eligendi.
          </p>
        </div>
        <Card>
          <Form className='flex gap-8' layout='vertical' onFinish={generateData}>
            <Form.Item label="Choose Data" name="data" rules={[{ required: true}]} className='w-full'>
              <Select size='large' placeholder="Choose data">
               <Select.Option value="users">Users</Select.Option>
               <Select.Option value="products">Products</Select.Option>
               <Select.Option value="payments">Payments</Select.Option>
               <Select.Option value="employees">Employees</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Number of Data" name="noOfData" rules={[{ required: true}]} className='w-full'>
              <InputNumber className='!w-full' size='large' placeholder='Enter number of data'/>
            </Form.Item>

            <Form.Item  label=" ">
              <Button htmlType='submit' size='large' type='primary'>Generate</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
   </div>
  )
}

export default App
