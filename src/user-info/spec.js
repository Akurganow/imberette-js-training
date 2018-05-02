import userInfo from './index'

const user = {
  id: 1,
  name: 'Alex',
  lastname: 'Kurganov',
  age: 32,
  sex: 'male'
}

describe('User info', () => {
  test('getLink', () => {
    expect(
      userInfo(user).getLink()
    ).toBe('http://site.com/1')
  })

  test('getFullname', () => {
    expect(
      userInfo(user).getFullname()
    ).toBe('Alex Kurganov')
  })

  test('getInfo', () => {
    expect(
      userInfo(user).getInfo()
    ).toBe(`name: Alex
lastname: Kurganov
age: 32
id: 1`)
  })
})
