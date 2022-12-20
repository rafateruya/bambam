export const getDivisiblePairs = (n: number, k: number, ar: number[]): number[][] => {
  const divisiblePairs = []
  for (let i = 0; i <= n - 2; i++) {
    const n1 = ar[i]
    for (let j = i + 1; j <= n - 1; j++) {
      const n2 = ar[j]
      const sum = n1 + n2
      const isSumDivisible = sum % k === 0
      if (isSumDivisible) {
        divisiblePairs.push([i, j])
      }
    }
  }
  return divisiblePairs
}

export const divisibleSumPairs = (n: number, k: number, ar: number[]): number => {
  const pairs = getDivisiblePairs(n, k, ar)
  return pairs.length
}
