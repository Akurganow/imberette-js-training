import exp from './index'

describe('Exponential', () => {
  test('2 ^ 2', () => {
    expect(exp(2, 2)).toBe(4)
  })

  test('2 ^ 5', () => {
    expect(exp(2, 5)).toBe(32)
  })

  test('5 ^ 5', () => {
    expect(exp(5, 5)).toBe(3125)
  })

  test('3 ^ 10', () => {
    expect(exp(3, 10)).toBe(59049)
  })
})
