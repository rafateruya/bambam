import { migratoryBirds } from './ex5'

describe('migratoryBirds tests', () => {
  describe('given an array of 5 birds', () => {
    const birds = [1, 1, 2, 2, 3]
    it('should return 1, because it is the id of the majority of birds', () => {
      expect(migratoryBirds(birds)).toBe(1)
    })
  })
})
