import { isValid } from './ex4'

describe('isValid tests', () => {
  describe('given a not valid string', () => {
    const s = 'aabbcd'
    it('should return NO', () => {
      expect(isValid(s)).toBe('NO')
    })
  })

  describe('given a valid string with the same amount of chars', () => {
    const s = 'abc'
    it('should return YES', () => {
      expect(isValid(s)).toBe('YES')
    })
  })

  describe('given a valid string with only one char with one more occurrence than others', () => {
    const s = 'aabc'
    it('should return YES', () => {
      expect(isValid(s)).toBe('YES')
    })
  })
})
