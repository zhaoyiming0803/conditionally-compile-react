import { Guard, IGuardInstance } from '../../Guard'

import { List } from './List'

export function GuardPluginList() {
  Guard.install('GuardPluginList', (guard: IGuardInstance) => {
    guard.on('on-login-mounted', (...args) => {
      guard.render({
        container: document.querySelector('#list-slot') as Element,
        element: List(guard, args)
      })
    })
  })
}
