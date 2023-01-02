export const closestNumbers = (arr: number[]): number[] => {
  if (!arr.length || arr.length === 1) {
    return []
  }
  arr.sort((a, b) => a - b)
  let smallestDifference = arr[1] - arr[0]
  let pairs: number[] = []
  arr.forEach((value, index) => {
    if (index === arr.length - 1) {
      return
    }
    const pair = [arr[index + 1], value]
    const diff = arr[index + 1] - value
    if (diff === smallestDifference) {
      pairs.push(...pair.reverse())
    }
    if (diff < smallestDifference) {
      smallestDifference = diff
      pairs = pair.reverse()
    }
  })
  return pairs
}
