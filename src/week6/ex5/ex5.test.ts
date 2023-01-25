import { superDigit } from './ex5'

describe('superDigit tests', () => {
  describe('given a number with only 1 digit', () => {
    const n = '1'
    const k = 1
    it('should return the digit', () => {
      expect(superDigit(n, k)).toBe(1)
    })
  })

  describe('given a number with more than 1 digit', () => {
    const n = '123'
    const k = 3
    it('should return the digit', () => {
      expect(superDigit(n, k)).toBe(9)
    })
  })
})
