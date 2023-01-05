const getSum = (arr: number[]) => {
  if (!arr.length) {
    return 0
  }
  return arr.reduce((acc, value) => acc + value, 0)
}

export const balancedSums = (arr: number[]): string => {
  const totalSum = getSum(arr)
  let leftSum = 0,
    rightSum = 0
  const hasSatisfiedCondition = arr.some((value, index) => {
    if (index === 0) {
      leftSum = 0
      rightSum = totalSum - value
    } else {
      leftSum += arr[index - 1]
      rightSum -= value
    }
    return leftSum === rightSum
  })

  return hasSatisfiedCondition ? 'YES' : 'NO'
}
