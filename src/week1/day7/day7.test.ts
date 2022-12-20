import { divisibleSumPairs } from './day7'

describe('divisibleSumPairs tests', () => {
  test('it should match the example in HackerRank', () => {
    const n = 6
    const k = 3
    const ar = [1, 3, 2, 6, 1, 2]
    const result = divisibleSumPairs(n, k, ar)
    expect(result).toBe(5)
  })
})
