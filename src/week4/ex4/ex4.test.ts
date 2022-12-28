import { getFirstSeqElement } from './ex4'

describe('getFirstSeqElements tests', () => {
  describe('given a sequence from 4', () => {
    const s = '456789'
    it('should return 4', () => {
      expect(getFirstSeqElement(s)).toBe('4')
    })
  })
  describe('given a beautiful sequence from 5', () => {
    const s = '5678910'
    it('should return 5', () => {
      expect(getFirstSeqElement(s)).toBe('5')
    })
  })
  describe('given a sequence from 5 but not beautiful', () => {
    const s = '506789'
    it('should return undefined', () => {
      expect(getFirstSeqElement(s)).toBeUndefined()
    })
  })
  describe('given a not sequence', () => {
    const s = '504324236754354389'
    it('should return undefined', () => {
      expect(getFirstSeqElement(s)).toBeUndefined()
    })
  })
  describe('given a beautiful sequence with numbers of length 2', () => {
    const s = '9899100'
    it('should return 98', () => {
      expect(getFirstSeqElement(s)).toBe('98')
    })
  })
  describe('given a beautiful sequence with biiig numbers', () => {
    const s = '96589218797811259658921879781126'
    it('should return 9658921879781125', () => {
      expect(getFirstSeqElement(s)).toBe('9658921879781125')
    })
  })

  describe('given a not beautiful sequence with biiig numbers', () => {
    const s = '51073756645096775107375664509668'
    it('should return undefined', () => {
      expect(getFirstSeqElement(s)).toBeUndefined()
    })
  })
})
