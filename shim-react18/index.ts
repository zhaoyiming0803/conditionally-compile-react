import React, { ReactNode } from 'react'
import { createRoot, Root } from 'react-dom/client'

export interface IRenderer {
  container: Element,
  element: ReactNode
}

const render = (renderer: IRenderer) => {
  const { container, element } = renderer
  const root: Root = createRoot(container)
  return root.render(element)
}

export {
  React,
  render
}
