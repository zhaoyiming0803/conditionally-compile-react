import { React } from 'shim-react'

import { Button, Form, Input } from 'shim-antd'

import { IGuardInstance } from '../../Guard'

interface IComponentAProps {
  guard: IGuardInstance
}

export function ComponentA(props: IComponentAProps) {
  const { useState } = React
  const { guard } = props
  const [passwordPlaceholder, resetPasswordPlaceholder] = useState(
    'Please enter your password!!!'
  )

  guard.on('on-reset-password-placeholder', (value: string) => {
    console.log(value)
    resetPasswordPlaceholder(value)
  })

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div>
      <div id="list-slot"></div>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder={passwordPlaceholder} />
        </Form.Item>

        <div id="agreements-slot"></div>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
