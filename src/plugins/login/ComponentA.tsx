import { React } from 'shim-react'

export function ComponentA () {
  const { useMemo } = React
  const message = useMemo(() => {
    return 'This is ComponentA'
  }, [])
  return <div>{message}</div>
}