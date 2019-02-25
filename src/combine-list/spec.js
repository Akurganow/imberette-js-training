import resolve from './index'

describe('Combine list', () => {
  test('one item', () => {
    expect(
      resolve('one')
    ).toBe('<ul><li class="item first last only">one</li></ul>')
  })

  test('three items', () => {
    expect(
      resolve('one', 'two', 'three')
    ).toBe('<ul>' +
      '<li class="item first">one</li>' +
      '<li class="item">two</li>' +
      '<li class="item last">three</li>' +
      '</ul>')
  })

  test('empty', () => {
    expect(
      resolve()
    ).toBe('<ul><li class="item first last only empty">Empty list</li></ul>')
  })
})
