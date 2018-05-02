import foxSay from './index'

describe('Fox say', () => {
  test('string', () => {
    expect(
      foxSay('Hello')
    ).toBe('Fox say: Hello')
  })

  test('array', () => {
    expect(
      foxSay(['Ding', 'Dong', 'Bling'])
    ).toBe('Fox say: Ding Dong Bling')
  })

  test('empty', () => {
    expect(
      foxSay()
    ).toBe('The fox is silent')
  })
})
