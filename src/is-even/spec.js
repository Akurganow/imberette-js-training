import isEven from './index'

describe('Is even', () => {
  test('even', () => {
    expect(isEven(4)).toBe(true)
  })

  test('odd', () => {
    expect(isEven(3)).toBe(false)
  })
})
