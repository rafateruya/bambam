import { minimumNumber } from './ex2'

describe('minimumNumber tests', () => {
  describe('given a password without uppercase and special character', () => {
    it('should return 2', () => {
      expect(minimumNumber(5, '2bbbb')).toBe(2)
    })
  })

  describe('given a password that contains at least one character of each type, but has 5 characters', () => {
    it('should return 1', () => {
      expect(minimumNumber(5, '2bb#A')).toBe(1)
    })
  })

  describe('given a password that doesnt contain digits', () => {
    it('should return 1', () => {
      expect(minimumNumber(7, 'AUzs-nV')).toBe(1)
    })
  })
})
