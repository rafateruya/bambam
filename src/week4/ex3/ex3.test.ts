import { kangaroo } from './ex3'

describe('kangaroo tests', () => {
  it('should check if both kangaroos can be in the same position', () => {
    expect(kangaroo(2, 1, 1, 2)).toBe('YES')
    expect(kangaroo(0, 2, 5, 3)).toBe('NO')
    expect(kangaroo(1571, 4240, 9023, 4234)).toBe('YES')
  })
})
