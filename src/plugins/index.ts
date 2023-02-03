import { GuardPluginLogin } from './login'

import { GuardPluginAgreements } from './agreements'


export function installPlugins () {
  GuardPluginLogin()
  GuardPluginAgreements()
}
