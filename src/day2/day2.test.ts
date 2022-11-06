import { plusMinus } from './day2'

describe('Basic tests', () => {
  it('Basic', () => {
    expect(plusMinus([1, 1, 0, -1, -1])).toBeUndefined()
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toBeUndefined()
  })
})
