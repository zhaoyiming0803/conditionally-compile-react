import { React } from 'shim-react'

import { Switch, Form } from 'shim-antd'

interface AgreementsProps {
  onAgreementsChange: (checked: boolean) => void
}

export function Agreements(props: AgreementsProps) {
  const { onAgreementsChange } = props
  return (
    <Form.Item label="Agreements" name="agreements">
      <div>
        <Switch onChange={onAgreementsChange} />
        <span>This is Agreements</span>
      </div>
    </Form.Item>
  )
}
