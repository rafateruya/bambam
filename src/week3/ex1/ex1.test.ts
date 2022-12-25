import { twoArrays } from './ex1'

describe('twoArrays tests', () => {
  test('it should return the expected result from HackerRank', () => {
    const A = [2, 1, 3]
    const B = [7, 8, 9]
    expect(twoArrays(10, A, B)).toBe('YES')
    const A2 = [18, 73, 55, 59, 37, 13, 1, 33]
    const B2 = [81, 11, 77, 49, 65, 26, 29, 49]
    expect(twoArrays(91, A2, B2)).toBe('NO')
    const A3 = [84, 2, 50, 51, 19, 58, 12, 90, 81, 68, 54, 73, 81, 31, 79, 85, 39, 2]
    const B3 = [53, 102, 40, 17, 33, 92, 18, 79, 66, 23, 84, 25, 38, 43, 27, 55, 8, 19]
    expect(twoArrays(94, A3, B3)).toBe('YES')
  })
})
