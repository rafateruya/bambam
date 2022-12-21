import { diagonalDifference } from './ex4'

describe('diagonalsDifference tests', () => {
  test('it should return the expected response from HackerRank', () => {
    const arr = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ]
    expect(diagonalDifference(arr)).toBe(15)
  })
})
