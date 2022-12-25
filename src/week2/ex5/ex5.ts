export const countingSort = (arr: number[]): number[] => {
  const countedArr = Array(100).fill(0)
  arr.forEach((value) => {
    countedArr[value] = countedArr[value] + 1
  })
  return countedArr
}
