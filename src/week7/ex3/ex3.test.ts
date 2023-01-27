import { pylons } from './ex3'

describe('pylons tests', () => {
  describe('given the example from HackerRank', () => {
    it('should return the response from HackerRank', () => {
      expect(pylons(3, [0, 1, 1, 1, 1, 0])).toBe(2)
    })
  })

  describe('given a fail line', () => {
    it('should return -1', () => {
      expect(pylons(2, [0, 1, 0, 0, 0, 1, 0])).toBe(-1)
    })
  })

  describe('given a line with 2 power plants', () => {
    it('should return 2', () => {
      expect(pylons(2, [0, 1, 1, 1, 1, 0])).toBe(2)
    })
  })
})
