import { gamingArray } from './ex3'

describe('gaming array tests', () => {
  describe('given an array of 1 element', () => {
    const oneElmArray = [1]
    it('should return BOB', () => {
      expect(gamingArray(oneElmArray)).toBe('BOB')
    })
  })

  describe('given an array of 2 elements', () => {
    describe('sorted', () => {
      const sortedArr = [1, 2]
      it('should return ANDY', () => {
        expect(gamingArray(sortedArr)).toBe('ANDY')
      })
    })
    describe('not sorted', () => {
      const unsortedArr = [2, 1]
      it('should return BOB', () => {
        expect(gamingArray(unsortedArr)).toBe('BOB')
      })
    })
  })

  describe('given an array with an odd number of max elements from right to left', () => {
    const oddArr = [2, 3, 5, 4, 1]
    it('should return BOB', () => {
      expect(gamingArray(oddArr)).toBe('BOB')
    })
  })

  describe('given an array with an even number of max elements from right to left', () => {
    const evenArr = [3, 2, 5, 4, 1]
    it('should return ANDY', () => {
      expect(gamingArray(evenArr)).toBe('ANDY')
    })
  })
})
