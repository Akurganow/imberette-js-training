import userInfo from './index'

const user = {
  id: 1,
  name: 'Alex',
  lastname: 'Kurganov',
  age: 32,
  sex: 'male'
}

describe('Say hello', () => {
  test('fullname', () => {
    expect(
      userInfo(user).getLink()
    ).toBe('http://site.com/1')
  })

  test('only name', () => {
    expect(
      userInfo(user).getFullname()
    ).toBe('Alex Kurganov')
  })

  test('only lasname', () => {
    expect(
      userInfo(user).getInfo()
    ).toBe(`name: Alex
lastname: Kurganov
age: 32
id: 1`)
  })
})
