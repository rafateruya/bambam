import { climbingLeaderboard } from './ex5'

describe('climbingLeaderboard tests', () => {
  describe('given a rank and the player scores', () => {
    const ranked = [100, 100, 50, 40, 40, 20, 10]
    const player = [5, 25, 50, 120]
    it('should return the corresponding rankings after each game', () => {
      expect(climbingLeaderboard(ranked, player)).toStrictEqual([6, 4, 2, 1])
    })
  })
})
