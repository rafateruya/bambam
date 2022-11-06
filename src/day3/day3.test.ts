import { getMiniMaxSum } from './day3'

describe('miniMaxSum tests', () => {
  it('tests', () => {
    const result = getMiniMaxSum([1, 2, 3, 4, 5])
    expect(result.maxSum).toBe(14)
    expect(result.miniSum).toBe(10)
  })
})
