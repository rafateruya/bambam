import { formingMagicSquare } from './ex4'

describe('formingMagicSquare tests', () => {
  describe('given a matrix that will be a magic square with cost 1 ', () => {
    const almostMagic = [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 5],
    ]
    it('should return 1', () => {
      expect(formingMagicSquare(almostMagic)).toBe(1)
    })
  })
})
