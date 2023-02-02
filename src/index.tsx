import { React, render } from 'shim-react'

import { GuardComponent } from './GuardComponent'

import { GuardOptions } from './types'

const defaultGuardOptions: GuardOptions = {
  appId: '',
  el: ''
}
export class Guard {
  private _options: GuardOptions = defaultGuardOptions

  constructor (options: GuardOptions) {
    this._options = this._mergeOptions(this._options, options)
  }

  private _mergeOptions (a: GuardOptions, b: GuardOptions): GuardOptions {
    return {
      ...a,
      ...b
    }
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
}

const guard1 = new Guard({
  appId: 'xxx',
  el: '#root1'
})

const guard2 = new Guard({
  appId: 'xxx',
  el: '#root2'
})

guard1.mount()

guard2.mount()
