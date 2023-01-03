import { minimumAbsoluteDifference } from './ex7'

describe('absoluteMinimumDifference tests', () => {
  describe('given an array of two elements', () => {
    it('should return the absolute difference between these elements', () => {
      expect(minimumAbsoluteDifference([0, 1])).toBe(1)
      expect(minimumAbsoluteDifference([1, 0])).toBe(1)
      expect(minimumAbsoluteDifference([0, -1])).toBe(1)
      expect(minimumAbsoluteDifference([-1, 0])).toBe(1)
    })
  })

  describe('given an array of multiple elements', () => {
    it('should return the minor absolute difference', () => {
      expect(minimumAbsoluteDifference([-2, 2, 4])).toBe(2)
      expect(minimumAbsoluteDifference([-2, -1, 4])).toBe(1)
    })
  })
})
