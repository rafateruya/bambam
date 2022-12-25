import { birthday } from './ex2'

describe('birthday test', () => {
  test('it should match with expected response from HackerRank', () => {
    const s = [2, 2, 1, 3, 2]
    const d = 4
    const m = 2
    expect(birthday(s, d, m)).toBe(2)
  })
})
