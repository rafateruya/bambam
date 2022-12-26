import { pageCount } from './ex7'

describe('pageCount tests', () => {
  test('it should return the expected results', () => {
    expect(pageCount(5, 3)).toBe(1)
    expect(pageCount(6, 5)).toBe(1)
  })
})
