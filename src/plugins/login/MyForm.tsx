import { React } from 'shim-react'

import { Button, Checkbox, Col, DatePicker, Form, Input, Row, Select, Switch } from 'shim-antd'

import type { CheckboxValueType } from 'shim-antd/es/checkbox/Group'

import type { DatePickerProps } from 'shim-antd'

import { Agreements } from '../agreements/Agreements'

export function MyForm () {
  const { useState } = React

  const [form] = Form.useForm()

  const [hasAcceptAgreements, resetHasAcceptAgreements] = useState(false)

  const onFinish = (values: any) => {
    console.log('hasAcceptAgreements: ', hasAcceptAgreements)
    if (!hasAcceptAgreements) {
      return console.log('Fail: no accept agreements!!!')
    }
    console.log('Success:', values)
  }
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const onAgreementsChange = (checked: boolean) => {
    console.log(`switch to ${checked}`)
    resetHasAcceptAgreements(checked)
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
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    form={form}
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

    <Agreements onAgreementsChange={onAgreementsChange}></Agreements>

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
