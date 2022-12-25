import { maximumPerimeterTriangle } from './ex6'

describe('maximumPerimeterTriangle tests', () => {
  describe('given an array of sticks', () => {
    const sticks = [1, 2, 3, 4, 5, 10]
    expect(maximumPerimeterTriangle(sticks)).toStrictEqual([3, 4, 5])
  })

  describe('given an array of sticks that cannot represent a non degenerate triangle', () => {
    const sticks = [1, 2, 3]
    it('should return -1', () => {
      expect(maximumPerimeterTriangle(sticks)).toStrictEqual([-1])
    })
  })
})
