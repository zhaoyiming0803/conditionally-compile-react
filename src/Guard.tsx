import { React, render, IRenderer } from 'shim-react'

import { GuardComponent } from './GuardComponent'

import { GuardOptions } from './types'

const defaultGuardOptions: GuardOptions = {
  appId: '',
  el: ''
}

export interface GuardInstance extends Guard {}

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
    this.mount()
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
      // next tick
      setTimeout(() => plugin.handler(this))
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
