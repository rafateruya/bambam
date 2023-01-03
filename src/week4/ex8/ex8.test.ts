import { caesarCipher, rotateChar } from './ex8'

describe('rotateChar tests', () => {
  describe('given some chars and k = 1', () => {
    it('should return the values dislocated from 1 letter', () => {
      expect(rotateChar('a', 1)).toBe('b')
      expect(rotateChar('A', 1)).toBe('B')
      expect(rotateChar('z', 1)).toBe('a')
      expect(rotateChar('Z', 1)).toBe('A')
    })
  })

  describe('given some chars and k = 26 (one rotation)', () => {
    it('should return the same char', () => {
      expect(rotateChar('a', 26)).toBe('a')
      expect(rotateChar('A', 26)).toBe('A')
      expect(rotateChar('z', 26)).toBe('z')
      expect(rotateChar('Z', 26)).toBe('Z')
    })
  })

  describe('given some chars and 26 < k < 52 (one rotation)', () => {
    it('should return the values dislocated from 1 letter', () => {
      expect(rotateChar('a', 27)).toBe('b')
      expect(rotateChar('A', 27)).toBe('B')
      expect(rotateChar('z', 27)).toBe('a')
      expect(rotateChar('Z', 27)).toBe('A')
    })
  })

  describe('given some chars and k = 52 (one rotation)', () => {
    it('should return the same char', () => {
      expect(rotateChar('a', 52)).toBe('a')
      expect(rotateChar('A', 52)).toBe('A')
      expect(rotateChar('z', 52)).toBe('z')
      expect(rotateChar('Z', 52)).toBe('Z')
    })
  })

  describe('given some chars and 52 < k < 78 (two rotations)', () => {
    it('should return one char before', () => {
      expect(rotateChar('a', 77)).toBe('z')
      expect(rotateChar('A', 77)).toBe('Z')
      expect(rotateChar('z', 77)).toBe('y')
      expect(rotateChar('Z', 77)).toBe('Y')
    })
  })
})

describe('Caesar cipher tests', () => {
  describe('given some chars with more than one total rotation', () => {})
  describe('given the string to be coded and the rotator factor', () => {
    const s = 'middle-Outz'
    const k = 2
    it('should return the new string', () => {
      expect(caesarCipher(s, k)).toBe('okffng-Qwvb')
    })
  })

  describe('given the string to be coded and a rotator factor greater than the alphabet length', () => {
    const s = '159357lcfd'
    const k = 98
    it('should return the new string', () => {
      expect(caesarCipher(s, k)).toBe('159357fwzx')
    })
  })
})
