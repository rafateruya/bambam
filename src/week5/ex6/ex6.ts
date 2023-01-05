export const gridChallenge = (grid: string[]): string => {
  const matrix = grid.map((str) => {
    const row = str.split('')
    return row.sort()
  })
  let isOrdered = true
  for (let i = 0; i <= matrix.length - 1 && isOrdered; i++) {
    let currentValue: string = matrix[0][i]
    for (let j = 1; j <= matrix[i].length - 1 && isOrdered; j++) {
      if (currentValue > matrix[j][i]) {
        isOrdered = false
        currentValue = matrix[j][i]
      }
    }
  }
  return isOrdered ? 'YES' : 'NO'
}
