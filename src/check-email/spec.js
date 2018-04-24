import exp from './index'

describe('Check email', () => {
  test('@email.com', () => {
    expect(exp('@email.com')).toBe(false)
  })

  test('some@email', () => {
    expect(exp('some@email')).toBe(false)
  })

  test('some@.com', () => {
    expect(exp('some@.com')).toBe(false)
  })

  test('some@email.com', () => {
    expect(exp('some@email.com')).toBe(true)
  })

  test('some+1@email.com', () => {
    expect(exp('some+1@email.com')).toBe(true)
  })

  test('so.me@email.com', () => {
    expect(exp('so.me@email.com')).toBe(true)
  })

})
