import { gridChallenge } from './ex6'

describe('gridChallenge tests', () => {
  describe('given a grid 1x1', () => {
    const grid = ['a']
    it('should return YES', () => {
      expect(gridChallenge(grid)).toBe('YES')
    })
  })
  describe('given a grid 5x5 that will have the columns ordered', () => {
    const grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
    it('should return YES', () => {
      expect(gridChallenge(grid)).toBe('YES')
    })
  })

  describe('given a grid 4x3 that will have the columns ordered', () => {
    const grid = ['mpxz', 'abcd', 'wlmf']
    it('should return NO', () => {
      expect(gridChallenge(grid)).toBe('NO')
    })
  })
})
