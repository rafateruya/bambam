import { countingValleys } from './ex6'

describe('countingValleys tests', () => {
  test('it should return the expected response from HackerRank', () => {
    const result = countingValleys(8, 'UDDDUDUU')
    expect(result).toBe(1)
  })
})
