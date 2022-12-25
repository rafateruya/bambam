import { xor } from './ex3'

describe('xor tests', () => {
  test('given 10101 and 00101 as inputs, it should return 10000', () => {
    expect(xor('10101', '00101')).toBe('10000')
  })
})
