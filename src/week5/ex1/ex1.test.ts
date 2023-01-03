import { maxMin } from './ex1'

describe('maxMin tests', () => {
  describe('given as array of minimum fairness 3', () => {
    it('should return 3', () => {
      const input = [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]
      const k = 4
      expect(maxMin(k, input)).toBe(3)
    })
  })
})
