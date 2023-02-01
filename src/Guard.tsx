import { React } from 'shim-react'

export function Guard () {
  const { version, useMemo } = React
  const _version = useMemo(() => {
    return version
  }, [])
  return <div>React version: {_version}</div>
}
