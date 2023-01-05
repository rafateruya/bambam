import { sansaXor } from './ex7'

describe('sansaXor tests', () => {
  describe('given an array of 3 numbers', () => {
    const arr = [3, 4, 5]
    it('should return the sansaXor', () => {
      expect(sansaXor(arr)).toBe(6)
    })
  })

  describe('given an array of 4 numbers', () => {
    const arr = [4, 5, 7, 5]
    it('should return the sansaXor of it', () => {
      expect(sansaXor(arr)).toBe(0)
    })
  })
})
