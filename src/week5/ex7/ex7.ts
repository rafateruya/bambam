const isEven = (n: number): boolean => {
  return n % 2 === 0
}

export const sansaXor = (arr: number[]): number => {
  if (isEven(arr.length)) {
    return 0
  }
  let xorResult = 0

  for (let i = 0; i < arr.length; i += 2) {
    xorResult = xorResult ^ arr[i]
  }
  return xorResult
}
