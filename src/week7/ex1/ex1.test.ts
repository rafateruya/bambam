import { bomberMan } from './ex1'

describe('bomberMan tests', () => {
  describe('given a n pair and any grid', () => {
    it('should return the grid full of bombs', () => {
      expect(bomberMan(2, ['..'])).toStrictEqual(['OO'])
      expect(bomberMan(4, ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....'])).toStrictEqual([
        'OOOOOOO',
        'OOOOOOO',
        'OOOOOOO',
        'OOOOOOO',
        'OOOOOOO',
        'OOOOOOO',
      ])
    })
  })

  describe('given a n equals 1 and any grid', () => {
    it('should return the same grid', () => {
      expect(bomberMan(1, ['..'])).toStrictEqual(['..'])
      expect(bomberMan(1, ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....'])).toStrictEqual([
        '.......',
        '...O...',
        '....O..',
        '.......',
        'OO.....',
        'OO.....',
      ])
    })
  })

  describe('given the input from hackerRank', () => {
    it('should return the expected result from HackerRank', () => {
      const n = 3
      const input = ['.......', '...O...', '....O..', '.......', 'OO.....', 'OO.....']
      const expectedResult = ['OOO.OOO', 'OO...OO', 'OOO...O', '..OO.OO', '...OOOO', '...OOOO']
      expect(bomberMan(n, input)).toStrictEqual(expectedResult)
    })
  })
  describe('given an input', () => {
    const input = ['...O.', 'O....', '.....', '.....', 'O.OO.']
    it('should return the expected results', () => {
      const firstRepeatedState = ['...O.', 'O....', '.....', '.....', 'O.OO.']
      const secondRepeatedState = ['.O...', '..O.O', '.OOOO', '.O..O', '.....']

      expect(bomberMan(3, input)).toStrictEqual(['.O...', '..O.O', '.OOOO', '.O..O', '.....'])
      expect(bomberMan(5, input)).toStrictEqual(firstRepeatedState)
      expect(bomberMan(7, input)).toStrictEqual(secondRepeatedState)
      expect(bomberMan(9, input)).toStrictEqual(firstRepeatedState)
      expect(bomberMan(11, input)).toStrictEqual(secondRepeatedState)
    })
  })
})
