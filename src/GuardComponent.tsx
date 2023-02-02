import { React } from 'shim-react'

import { Button, Checkbox, Col, DatePicker, Form, Input, Row, Select, Switch, Tabs } from 'shim-antd'

import type { CheckboxValueType } from 'shim-antd/es/checkbox/Group'

import type { DatePickerProps, TabsProps } from 'shim-antd'

export function GuardComponent () {
  const { version, useMemo } = React

  const _version = useMemo(() => {
    return version
  }, [])

  const onTabChange = (key: string) => {
    console.log('on tab change: ', key)
  }

  const tabs: TabsProps['items'] = [
    {
      key: '1',
      label: `React Version`,
      children: <div>React version: {_version}</div>
    },
    {
      key: '2',
      label: `ComponentA`,
      children: <ComponentA></ComponentA>
    },
    {
      key: '3',
      label: `Form`,
      children: <MyForm></MyForm>
    }
  ]

  return <div>
    <Tabs defaultActiveKey="1" items={tabs} onChange={onTabChange} />
  </div>
}

function ComponentA () {
  const { useState, useEffect } = React

  const [message, resetMessage] = useState('ComponentA')

  useEffect(() => {
    let timer = setTimeout(() => {
      resetMessage('This is ComponentA')
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  })
  return <div>{message}</div>
}

function MyForm () {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const onSwitchChange = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }

  const onSelectChange = (selected: string) => {
    console.log(`select ${selected}`)
  }

  const onCheckboxChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues)
  }

  const onDateChange: DatePickerProps['onChange'] = (date: Date, dateString: string) => {
    console.log(date, dateString)
  }

  return <Form
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
      <Input.Password />
    </Form.Item>

    <Form.Item label="Status" name="status">
      <Switch defaultChecked onChange={onSwitchChange} />
    </Form.Item>

    <Form.Item label="Who" name="who">
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={onSelectChange}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    </Form.Item>

    <Form.Item label="Date" name="date">
      <DatePicker onChange={onDateChange} />
    </Form.Item>

    <Form.Item label="Fruit" name="fruit">
      <Checkbox.Group style={{ width: '100%' }} onChange={onCheckboxChange}>
        <Row>
          <Col span={8}>
            <Checkbox value="Apple">Apple</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Pear">Pear</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="Orange">Orange</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
}
