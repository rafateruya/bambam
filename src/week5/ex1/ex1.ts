export const maxMin = (k: number, arr: number[]): number => {
  arr.sort((a, b) => a - b)
  let minimumFairness = arr[k - 1] - arr[0]
  arr.forEach((value, index) => {
    const maxElement = arr[index + k - 1]
    if (!maxElement) {
      return
    }
    const fairness = maxElement - value
    if (fairness < minimumFairness) {
      minimumFairness = fairness
    }
  })
  return minimumFairness
}
