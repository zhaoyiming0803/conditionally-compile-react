import { IGuardInstance } from '../../Guard'

export function List(guard: IGuardInstance, ...args: any[]) {
  console.log('List args: ', args)

  const items = ['1111', '2222', '3333', '4444', '5555']

  const htmlFactory = () => {
    return `
      <div id="list-container">
        ${items.map(item => `<div id="item-${item}">${item}</div>`)}
      </div>
    `
  }

  const action = () => {
    guard.getRoot().addEventListener('click', (e: any) => {
      if (e.target.id.indexOf('item-') === -1) {
        return
      }

      if (e.target.id.indexOf('item-1') > -1) {
        return console.log(e.target.innerHTML)
      }

      alert(e.target.innerHTML)
    })
  }

  return guard.customElement(htmlFactory, action)
}
