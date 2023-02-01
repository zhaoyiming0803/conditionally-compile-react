import React, { ReactElement, JSXElementConstructor } from 'react'
import ReactDOM from 'react-dom'

export interface Renderer {
  container: Element,
  element: ReactElement<any, string | JSXElementConstructor<any>>
}

const render = (renderer: Renderer) => {
  const { container, element } = renderer
  return ReactDOM.render(element, container)
}

export {
  React,
  render
}
