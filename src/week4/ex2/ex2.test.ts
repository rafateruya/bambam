import { rotateLeft } from './ex2'

describe('rotateLeft tests', () => {
  test('it should rotate the array in the given number', () => {
    expect(rotateLeft(4, [1, 2, 3, 4, 5])).toStrictEqual([5, 1, 2, 3, 4])
  })
})
