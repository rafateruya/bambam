import { closestNumbers } from './ex5'

describe('closestNumbers tests', () => {
  describe('given an empty array', () => {
    const input: number[] = []
    it('should return an empty array', () => {
      expect(closestNumbers(input)).toStrictEqual([])
    })
  })

  describe('given an array with one pair with the smallest difference', () => {
    const input = [-20, -3916237, -357920, -3620601, 30]
    it('should return an array with the corresponding pair', () => {
      expect(closestNumbers(input)).toStrictEqual([-20, 30])
    })
  })

  describe('given an array with multiple pairs with the smallest diff', () => {
    const input = [-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470]
    it('should return an array with the corresponding pairs', () => {
      expect(closestNumbers(input)).toStrictEqual([-520, -470, -20, 30])
    })
  })
})
