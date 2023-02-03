import { React } from 'shim-react'

import { Guard, IGuardInstance } from '../../Guard'

import { Agreements } from './Agreements'

export function GuardPluginAgreements () {
  Guard.install('GuardPluginAgreements', (guard: IGuardInstance) => {    
    const onAgreementsChange = (checked: boolean) => {
      console.log('onAgreementsChange in GuardPluginAgreements: ', checked)
    }

    guard.on('on-login-mounted', (...args) => {
      guard.render({
        container: document.querySelector('#agreements-slot') as Element,
        element: <Agreements onAgreementsChange={onAgreementsChange}></Agreements>
      })
    })
  })
}
