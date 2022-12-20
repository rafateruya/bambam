export const getMiniMaxSum = (arr: number[]) => {
  arr.sort()
  const sum = arr.reduce((acc, currentValue) => {
    return acc + currentValue
  }, 0)
  const maxNumber = arr[arr.length - 1]
  const minNumber = arr[0]
  const miniSum = sum - maxNumber
  const maxSum = sum - minNumber
  return {
    miniSum,
    maxSum,
  }
}

export const miniMaxSum = (arr: number[]) => {
  const { miniSum, maxSum } = getMiniMaxSum(arr)
  console.log(`${miniSum} ${maxSum}`)
}
