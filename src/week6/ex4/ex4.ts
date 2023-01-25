const MAGIC_SQUARE_POSSIBILITIES = [
  [
    [8, 3, 4],
    [1, 5, 9],
    [6, 7, 2],
  ],
  [
    [6, 7, 2],
    [1, 5, 9],
    [8, 3, 4],
  ],
  [
    [4, 3, 8],
    [9, 5, 1],
    [2, 7, 6],
  ],
  [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8],
  ],
  [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ],
  [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ],
  [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
  ],
  [
    [2, 9, 4],
    [7, 5, 3],
    [6, 1, 8],
  ],
]
export const formingMagicSquare = (s: number[][]): number => {
  let minCost = Number.MAX_VALUE
  MAGIC_SQUARE_POSSIBILITIES.forEach((matrix) => {
    const cost = matrix.reduce((acc, row, rowIndex) => {
      return acc + row.reduce((rowAcc, value, colIndex) => rowAcc + Math.abs(value - s[rowIndex][colIndex]), 0)
    }, 0)
    if (minCost > cost) {
      minCost = cost
    }
  })
  return minCost
}
