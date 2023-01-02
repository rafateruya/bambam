import { towerBreakers } from './ex6'

describe('towerBreakers tests', () => {
  test('it should return the expected results from HackerRank', () => {
    expect(towerBreakers(2, 2)).toBe(2)
    expect(towerBreakers(1, 4)).toBe(1)
  })
})
