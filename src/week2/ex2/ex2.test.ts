import { gradingStudent } from './ex2'

describe('grading student tests', () => {
  describe('not failing grades', () => {
    test('grading up', () => {
      const result1 = gradingStudent(38)
      expect(result1).toBe(40)
      const result2 = gradingStudent(39)
      expect(result2).toBe(40)
      const result3 = gradingStudent(64)
      expect(result3).toBe(65)
      const result4 = gradingStudent(93)
      expect(result4).toBe(95)
    })

    test('not grading up', () => {
      const result1 = gradingStudent(80)
      expect(result1).toBe(80)
      const result2 = gradingStudent(71)
      expect(result2).toBe(71)
      const result3 = gradingStudent(57)
      expect(result3).toBe(57)
    })
  })

  describe('failing grades', () => {
    test('failing grades', () => {
      const limitResult = gradingStudent(37)
      expect(limitResult).toBe(37)
      const multipleResult = gradingStudent(20)
      expect(multipleResult).toBe(20)
      const shouldRoundInNotFailingResult = gradingStudent(29)
      expect(shouldRoundInNotFailingResult).toBe(29)
    })
  })
})
