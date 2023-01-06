import { misereNim } from './ex2'

describe('misereNim tests', () => {
  describe('given a situation where first player wins', () => {
    const s = [1, 2, 2]
    it('should return First', () => {
      expect(misereNim(s)).toBe('First')
    })
  })

  describe('given a situation where second player wins', () => {
    const s = [1, 1, 1]
    it('should return Second', () => {
      expect(misereNim(s)).toBe('Second')
    })
  })
})
