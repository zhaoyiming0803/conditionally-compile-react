import { React } from 'shim-react'

export function Version() {
  const { version } = React
  return (
    <div>
      <div>React.version：{version}</div>
      <div>Compiler version: {__react_version__}</div>
    </div>
  )
}
