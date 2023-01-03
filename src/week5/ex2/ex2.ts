const MINIMUM_LENGTH = 6
const UPPER_CASE_REGEX = '[A-Z]'
const LOWER_CASE_REGEX = '[a-z]'
const DIGITS_REGEX = '[0-9]'
const SPECIAL_CHARS_REGEX = '[!@#$%^&*()+-]'

export const minimumNumber = (n: number, password: string): number => {
  const expressionsToTest = [UPPER_CASE_REGEX, LOWER_CASE_REGEX, DIGITS_REGEX, SPECIAL_CHARS_REGEX].map(
    (exp) => new RegExp(exp),
  )
  const expressionsMissing = expressionsToTest.filter((regex) => {
    if (!regex.test(password)) {
      console.log('regex fail', regex)
    }
    return !regex.test(password)
  })
  const rulesToAdd = expressionsMissing.length
  return rulesToAdd + n >= MINIMUM_LENGTH ? rulesToAdd : MINIMUM_LENGTH - n
}
