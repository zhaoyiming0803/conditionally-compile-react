import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'

interface IRenderer {
  container: Element,
  element: ReactElement
}

const render = (renderer: IRenderer) => {
  const { container, element } = renderer
  return ReactDOM.render(element, container)
}

export {
  React,
  render
}
