export const day1Pt1 = (input: string): number => {
  const lines = input.split('\n')
  const arr1: number[] = []
  const arr2: number[] = []
  lines.forEach((line) => {
    const [i1, i2] = line.split(/\s+/)
    arr1.push(parseInt(i1))
    arr2.push(parseInt(i2))
  })
  return day1Pt1WithArrays(arr1, arr2)
}

export const day1Pt1WithArrays = (l1: number[], l2: number[]): number => {
  const sorted1 = l1.sort((a, b) => a - b)
  const sorted2 = l2.sort((a, b) => a - b)

  return sorted1.reduce((acc, curr, index) => {
    const diff = Math.abs(curr - sorted2[index])
    return acc + diff
  }, 0)
}
