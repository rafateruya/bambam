import { pickingNumbers } from './ex1'

describe('pickingNumbers tests', () => {
  describe('given an array with a sequence of maximum 5 numbers of 1 of diff', () => {
    it('should return 5', () => {
      expect(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])).toBe(5)
    })
  })
})
