export const sumXor = (n: number): number => {
  if (n === 0) {
    return 1
  }
  const binary = n.toString(2)
  const zeros = binary.split('').filter((value) => value === '0').length
  return Math.pow(2, zeros)
}
