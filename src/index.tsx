import { Guard } from './Guard'

import { installPlugins } from './plugins'

installPlugins()

new Guard({
  appId: 'xxx',
  el: '#root'
})
