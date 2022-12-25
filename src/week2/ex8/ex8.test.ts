import { marsExploration } from './ex8'

describe('marsExploration tests ', () => {
  test('it should return the expected result from HackerRank', () => {
    const input = 'SOSSPSSQSSOR'
    expect(marsExploration(input)).toBe(3)
  })
})
