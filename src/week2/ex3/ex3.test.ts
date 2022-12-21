import { flippingBits } from './ex3'

describe('flippingBits tests', () => {
  test('it should return the expected results from HackerRank', () => {
    expect(flippingBits(2147483647)).toBe(2147483648)
    expect(flippingBits(1)).toBe(4294967294)
    expect(flippingBits(0)).toBe(4294967295)
  })
})
