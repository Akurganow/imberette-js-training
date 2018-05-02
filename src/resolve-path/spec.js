import resolve from './index'

describe('Resolve path', () => {
  test('three params', () => {
    expect(
      resolve('path', 'to', 'dir')
    ).toBe('path/to/dir')
  })

  test('two params with slash', () => {
    expect(
      resolve('path', 'to/dir')
    ).toBe('path/to/dir')
  })

  test('two params with slashes', () => {
    expect(
      resolve('/path/', '/to/dir')
    ).toBe('/path/to/dir')
  })
})
