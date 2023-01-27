import { getMinimumBribes } from './ex2'

describe('minimumBribes tests', () => {
  describe('given a line with possible bribes', () => {
    const q = [2, 1, 5, 3, 4]
    it('should return 3', () => {
      expect(getMinimumBribes(q)).toBe('3')
    })
  })

  describe('given a chaotic line', () => {
    const q = [2, 5, 1, 3, 4]
    it('should return Too chaotic', () => {
      expect(getMinimumBribes(q)).toBe('Too chaotic')
    })
  })

  describe('given a line with 7 bribes', () => {
    const q = [1, 2, 5, 3, 7, 8, 6, 4]
    it('should return Too chaotic', () => {
      expect(getMinimumBribes(q)).toBe('7')
    })
  })
})
