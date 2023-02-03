import { React } from 'shim-react'

import { Guard, IGuardInstance } from '../../Guard'

import { Tabs } from 'shim-antd'

import type { TabsProps } from 'shim-antd'

import { ComponentA } from './ComponentA'
import { MyForm } from './MyForm'
import { Version } from './Version'

const tabs: TabsProps['items'] = [
  {
    key: '1',
    label: `React Version`,
    children: <Version></Version>
  },
  {
    key: '2',
    label: `ComponentA`,
    children: <ComponentA></ComponentA>
  },
  {
    key: '3',
    label: `Form`,
    children: <MyForm></MyForm>
  }
]

const onTabChange = (guard: IGuardInstance, key: string) => {
  console.log('on tab change: ', key)
  if (key === '2') {
    setTimeout(() => {
      guard.emit('on-login-mounted', 1, 2, 3, 4)
    })
  }
}

export function GuardPluginLogin () {
  Guard.install('GuardPluginLogin', (guard: IGuardInstance) => {
    guard.render({
      container: document.querySelector('#guard-container') as Element,
      element: <Tabs defaultActiveKey="1" items={tabs} onChange={(key: string) => onTabChange(guard, key)} />
    })
  })
}