import { balancedSums } from './ex1'

describe('balancedSums tests', () => {
  describe('given an array of length 1', () => {
    const arr = [1]
    it('should return YES, since the element that satisfies the condition is on index 0', () => {
      expect(balancedSums(arr)).toBe('YES')
    })
  })

  describe("given an array that doesn't satisfy the condition", () => {
    const arr = [1, 2, 3]
    it('should return NO', () => {
      expect(balancedSums(arr)).toBe('NO')
    })
  })

  describe('given an array that satisfies the condition', () => {
    const arr = [1, 2, 3, 3]
    it('should return YES', () => {
      expect(balancedSums(arr)).toBe('YES')
    })
  })
})
