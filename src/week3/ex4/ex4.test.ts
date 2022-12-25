import { sockMerchant } from './ex4'

describe('socksMerchants tests', () => {
  describe('given a bag with 9 socks', () => {
    const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    it('should return 3 as the number of pair of socks', () => {
      expect(sockMerchant(9, socks)).toBe(3)
    })
  })
})
