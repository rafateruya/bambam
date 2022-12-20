import { matchingStrings } from './day8'

describe('matchingStrings tests', () => {
  test('it should return the expected response from HackerRank example', () => {
    const strings = ['aba', 'baba', 'aba', 'xzxb']
    const queries = ['aba', 'xzxb', 'ab']
    const result = matchingStrings(strings, queries)
    expect(result).toBeDefined()
    expect(result[0]).toBe(2)
    expect(result[1]).toBe(1)
    expect(result[2]).toBe(0)
  })
})
