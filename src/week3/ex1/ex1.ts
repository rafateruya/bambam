export const twoArrays = (k: number, A: number[], B: number[]): string => {
  A.sort((a, b) => a - b)
  B.sort((a, b) => a - b).reverse()

  const isValid = A.every((value, index) => {
    return value + B[index] >= k
  })
  return isValid ? 'YES' : 'NO'
}
