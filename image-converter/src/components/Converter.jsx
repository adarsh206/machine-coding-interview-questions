import { Button, Form, Input, Select } from 'antd'
import React, { useState } from 'react'

const Converter = () => {

    const [file, setFile] = useState(null);


    const convertImage = (values) => {
        values.image = file
        console.log(values)
    }

    const options = [
        {
            label : "JPEG",
            value : "image/jpeg"
        },
         {
            label : "PNG",
            value : "image/png"
        },
         {
            label : "WEBP",
            value : "image/webp"
        },
         {
            label : "GIF",
            value : "image/gif"
        },
    ]

  return (
    <div>
        <Form onFinish={convertImage}>
            <Form.Item name="image" rules={[{required: true}]}>
                <Input type="file" size='large' accept='image/*' onChange={(e) => setFile(e.target.files[0])}/>
            </Form.Item>

            <Form.Item name="format" rules={[{required: true}]}>
                <Select options={options} size='large' placeholder="Choose format" />
            </Form.Item>

            <Form.Item>
                <Button size='large' type='primary' danger htmlType='submit'>Convert</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Converter