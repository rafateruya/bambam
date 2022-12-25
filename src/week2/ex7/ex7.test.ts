import { pangrams } from './ex7'

describe('pangrams tests', () => {
  test('it should return the expected responses from HackerRank', () => {
    const pangramStr = 'We promptly judged antique ivory buckles for the next prize'
    expect(pangrams(pangramStr)).toBe('pangram')
    const notPangramStr = 'We promptly judged antique ivory buckles for the prize'
    expect(pangrams(notPangramStr)).toBe('not pangram')
  })
})
