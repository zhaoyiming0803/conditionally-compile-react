import { React, render } from 'shim-react'

import { Guard } from './Guard'

render({
  container: document.querySelector('#root') as Element,
  element: <Guard></Guard>
})
