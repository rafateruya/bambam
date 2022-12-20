export const nextBigger = (n: number): number => {
  const digits = n.toString().split('')
  let digit1, index1
  let digit2, index2
  ;[...digits].reverse().some((digit, index) => {
    let hasFoundDigits = false
    let minorGreaterNumber
    for (let analyzedIndex = digits.length - index; analyzedIndex <= digits.length; analyzedIndex++) {
      const analyzedDigit = digits[analyzedIndex]
      if (analyzedDigit > digit && ((minorGreaterNumber || '0') > analyzedDigit || minorGreaterNumber === undefined)) {
        minorGreaterNumber = analyzedDigit
        digit1 = analyzedDigit
        digit2 = digit
        index1 = analyzedIndex
        index2 = digits.length - index - 1
        hasFoundDigits = true
      }
    }
    return hasFoundDigits
  })

  if (digit1 !== undefined && digit2 !== undefined && index1 !== undefined && index2 !== undefined) {
    digits[index1] = digit2
    digits[index2] = digit1
    const lastDigits = digits.splice(index2 + 1, digits.length - index2 - 1)
    lastDigits.sort()
    digits.push(...lastDigits)
  } else {
    return -1
  }
  return parseInt(digits.join(''))
}
