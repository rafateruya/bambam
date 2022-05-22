import { nextBigger } from './day1'

describe('Basic tests', () => {
  it('Small numbers', () => {
    expect(nextBigger(12)).toBe(21)
    expect(nextBigger(513)).toBe(531)
    expect(nextBigger(2017)).toBe(2071)
    expect(nextBigger(414)).toBe(441)
    expect(nextBigger(144)).toBe(414)
  })
  it('Bigger numbers', () => {
    expect(nextBigger(123456789)).toBe(123456798)
    expect(nextBigger(1234567890)).toBe(1234567908)
    expect(nextBigger(9876543210)).toBe(-1)
    expect(nextBigger(9999999999)).toBe(-1)
    expect(nextBigger(59884848459853)).toBe(59884848483559)
  })
})
