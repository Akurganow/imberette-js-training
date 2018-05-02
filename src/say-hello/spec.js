import sayHello from './index'

describe('Say hello', () => {
  test('fullname', () => {
    expect(
      sayHello({ name: 'Alex', lastname: 'Kurganov' })
    ).toBe('Hello! Alex Kurganov')
  })

  test('only name', () => {
    expect(
      sayHello({ name: 'Alex' })
    ).toBe('Hello! Alex')
  })

  test('only lasname', () => {
    expect(
      sayHello({ lastname: 'Kurganov' })
    ).toBe('Hello! Kurganov')
  })

  test('string', () => {
    expect(
      sayHello('Alex')
    ).toBe('Hello! Alex')
  })

  test('empty', () => {
    expect(
      sayHello()
    ).toBe('Hello! Stranger')
  })
})
