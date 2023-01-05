import { dynamicArray } from './ex3'

describe('dynamicArray tests', () => {
  it('should return the expected results from HackerRank', () => {
    expect(
      dynamicArray(2, [
        [1, 0, 5],
        [1, 1, 7],
        [1, 0, 3],
        [2, 1, 0],
        [2, 1, 1],
      ]),
    ).toStrictEqual([7, 3])
  })
})
