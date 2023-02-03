import { Guard } from './Guard'

import { installPlugins } from './plugins'

installPlugins()

const guard = new Guard({
  appId: 'xxx',
  el: '#root'
})

// @ts-ignore
window.$guard = guard
