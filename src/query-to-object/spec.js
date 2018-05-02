import toString from './index'

describe('Query to string', () => {
  test('one param', () => {
    expect(
      toString('one=param')
    ).toBe({ one: 'param' })
  })

  test('many params', () => {
    expect(
      toString('first=one&second=two&third=three')
    ).toBe({ first: 'one', second: 'two', third: 'three' })
  })

  test('empty param', () => {
    expect(
      toString('empty')
    ).toBe({ empty: null })
  })

  test('empty and filled params', () => {
    expect(
      toString('empty&one=param')
    ).toBe({ empty: null, one: 'param' })
  })

  test('empty string', () => {
    expect(
      toString('')
    ).toBe({})
  })
})
