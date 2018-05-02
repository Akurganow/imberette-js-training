import check from './index'

describe('Check email', () => {
  test('@email.com', () => {
    expect(
      check('@email.com')
    ).toBe(false)
  })

  test('some@email', () => {
    expect(
      check('some@email')
    ).toBe(false)
  })

  test('some@.com', () => {
    expect(
      check('some@.com')
    ).toBe(false)
  })

  test('some@email.com', () => {
    expect(
      check('some@email.com')
    ).toBe(true)
  })

  test('some+1@email.com', () => {
    expect(
      check('some+1@email.com')
    ).toBe(true)
  })

  test('so.me@email.com', () => {
    expect(
      check('so.me@email.com')
    ).toBe(true)
  })

})
