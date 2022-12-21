const getDiagonalsElements = (arr: number[][]): { primDiagonalElements: number[]; secDiagonalElements: number[] } => {
  const primDiagonalElements: number[] = []
  const secDiagonalElements: number[] = []
  const arrSize = arr.length
  for (let i = 0; i < arr.length; i++) {
    const secColIndex = arrSize - 1 - i
    primDiagonalElements.push(arr[i][i])
    secDiagonalElements.push(arr[i][secColIndex])
  }
  return { primDiagonalElements, secDiagonalElements }
}

const getArraySum = (arr: number[]): number => {
  return arr.reduce((acc, value) => acc + value, 0)
}

export const diagonalDifference = (arr: number[][]): number => {
  const { primDiagonalElements, secDiagonalElements } = getDiagonalsElements(arr)
  const primDiagonalSum = getArraySum(primDiagonalElements)
  const secDiagonalSum = getArraySum(secDiagonalElements)
  const diagonalsDiff = primDiagonalSum - secDiagonalSum
  return Math.abs(diagonalsDiff)
}
