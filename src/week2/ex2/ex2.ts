export const gradingStudent = (grade: number): number => {
  const FAILING_LIMIT_GRADE = 37
  if (grade <= FAILING_LIMIT_GRADE) {
    return grade
  }
  const MULTIPLE_ROUNDING_NUMBER = 5
  const diffForRounding = MULTIPLE_ROUNDING_NUMBER - (grade % MULTIPLE_ROUNDING_NUMBER)
  const DIFF_LIMIT_FOR_ROUNDING = 3
  if (diffForRounding < DIFF_LIMIT_FOR_ROUNDING) {
    return grade + diffForRounding
  }
  return grade
}

export const gradingStudents = (grades: number[]): number[] => {
  return grades.map(gradingStudent)
}
