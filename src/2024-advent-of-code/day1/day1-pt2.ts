export const day1Pt2 = (input: string): number => {
  const lines = input.split('\n')
  const arr1: number[] = []
  const arr2: number[] = []
  lines.forEach((line) => {
    const [i1, i2] = line.split(/\s+/)
    arr1.push(parseInt(i1))
    arr2.push(parseInt(i2))
  })
  return day1Pt2WithArrays(arr1, arr2)
}

export const day1Pt2WithArrays = (l1: number[], l2: number[]): number => {
  const hashOccurrences: Record<number, number> = {}
  l2.forEach((num) => {
    hashOccurrences[num] = (hashOccurrences[num] || 0) + 1
  })
  return l1.reduce((acc, curr) => {
    const similarityScore = (hashOccurrences[curr] || 0) * curr
    return acc + similarityScore
  }, 0)
}
