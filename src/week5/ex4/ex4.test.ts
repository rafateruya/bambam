import { missingNumbers } from './ex4'

describe('missingNumbers tests', () => {
  describe('given the example of HackerRank', () => {
    const arr = [203, 204, 205, 206, 207, 208, 203, 204, 205, 206]
    const brr = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
    it('should return the expected result from HackerRank', () => {
      expect(missingNumbers(arr, brr)).toStrictEqual([204, 205, 206])
    })
  })
})
