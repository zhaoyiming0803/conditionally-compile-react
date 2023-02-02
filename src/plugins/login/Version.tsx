import { React } from 'shim-react'

export function Version () {
  const { version } = React
  return <div>React Version：{version}</div>
}
