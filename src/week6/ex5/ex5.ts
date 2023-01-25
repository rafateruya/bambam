const getDigitsSum = (n: string): string => {
  const sum = n.split('').reduce((acc, char) => {
    const digit = parseInt(char)
    return acc + digit
  }, 0)
  return sum.toString()
}

export const superDigit = (n: string, k: number): number => {
  let auxSuper
  let alreadyConcatenated = false
  while (!auxSuper || auxSuper.length > 1) {
    auxSuper = getDigitsSum(auxSuper || n)
    if (auxSuper.length === 1 && !alreadyConcatenated) {
      auxSuper = (parseInt(auxSuper) * k).toString()
      alreadyConcatenated = true
    }
  }
  return parseInt(auxSuper)
}
