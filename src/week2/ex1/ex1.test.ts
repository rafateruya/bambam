import { lonelyinteger } from './ex1'

describe('ex 1 tests', () => {
  test('it should return the expected value from HackerRank tests', () => {
    const a = [1, 2, 3, 4, 3, 2, 1]
    const result = lonelyinteger(a)
    expect(result).toBe(4)
  })
})
