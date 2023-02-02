import { React, render, IRenderer } from 'shim-react'

import { GuardComponent } from './GuardComponent'

import { GuardOptions } from './types'

const defaultGuardOptions: GuardOptions = {
  appId: '',
  el: ''
}

interface GuardInstance extends Guard {}

type IGuardPluginHandler = (guard: GuardInstance) => void

interface IGuardPlugin {
  name: string
  handler: IGuardPluginHandler
}
export class Guard {
  private _options: GuardOptions = defaultGuardOptions

  static plugins: IGuardPlugin[] = []

  constructor (options: GuardOptions) {
    this._options = this._mergeOptions(this._options, options)
    this._runPlugins()
  }

  private _mergeOptions (a: GuardOptions, b: GuardOptions): GuardOptions {
    return {
      ...a,
      ...b
    }
  }

  private _runPlugins () {
    Guard.plugins.forEach(plugin => {
      plugin.handler(this)
    })
  }

  static install (pluginName: string, pluginHandler: IGuardPluginHandler) {
    Guard.plugins.push({
      name: pluginName,
      handler: pluginHandler
    })
  }

  private _getRoot () {
    return document.querySelector(this._options.el) as Element
  }

  mount () {
    return render({
      container: this._getRoot(),
      element: <GuardComponent></GuardComponent>
    })
  }

  unmount () {
    const root = this._getRoot()
    root.innerHTML = ''
  }

  render (options: IRenderer) {
    return render(options)
  }
}

const guard1 = new Guard({
  appId: 'xxx',
  el: '#root1'
})

guard1.mount()


const guard2 = new Guard({
  appId: 'xxx',
  el: '#root2'
})

guard2.mount()


function Component1 () {
  return <div>
    <div>Component1</div>
    <div id="component1-slot"></div>
  </div>
}

function Component2 () {
  return <div>
    <div>Component2 in Component1</div>
  </div>
}


Guard.install('plugin1', (guard) => {
  guard.render({
    container: document.querySelector('#root3') as Element,
    element: <Component1></Component1>
  })
})

Guard.install('plugin2', (guard) => {
  guard.render({
    container: document.querySelector('#component1-slot') as Element,
    element: <Component2></Component2>
  })
})

const guard3 = new Guard({
  appId: 'xxx',
  el: '#root3'
})