import { Button, Form, Input, message, Select } from 'antd'
import React, { useState } from 'react'

const Converter = () => {

    const [file, setFile] = useState(null);


    const convertImage = (values) => {
        try {
            const url = URL.createObjectURL(file)
            const image = new Image();
            image.src = url
            image.onload = () => {
                const originalWidth = image.width
                const originalHeight = image.height
                const canvas = document.createElement("canvas");
                canvas.width = originalWidth
                canvas.height = originalHeight
                const ctx = canvas.getContext("2d")
                ctx.drawImage(image, 0, 0)
                const finalImage = canvas.toDataURL(values.format)
                const a = document.createElement("a")
                a.href = finalImage
                a.download = `sample.${values.format.split("/").pop()}`
                a.click()
            }
        } catch (error) {
            message.error(error.message)
        }
        
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