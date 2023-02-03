import { GuardPluginLogin } from './login'

import { GuardPluginAgreements } from './agreements'

import { GuardPluginList } from './List'


export function installPlugins () {
  GuardPluginLogin()
  GuardPluginAgreements()
  GuardPluginList()
}
