export const minimumAbsoluteDifference = (arr: number[]): number => {
  arr.sort((a, b) => a - b)
  let minimumDiff = arr[1] - arr[0]
  arr.forEach((value, index) => {
    if (index >= arr.length - 1) return
    const diff = arr[index + 1] - value
    if (minimumDiff > diff) {
      minimumDiff = diff
    }
  })
  return minimumDiff
}
