import React, { ReactNode } from 'react'
import { createRoot, Root } from 'react-dom/client'

export interface Renderer {
  container: Element | DocumentFragment,
  element: ReactNode
}

const render = (renderer: Renderer) => {
  const { container, element } = renderer
  const root: Root = createRoot(container)
  return root.render(element)
}

export {
  React,
  render
}
