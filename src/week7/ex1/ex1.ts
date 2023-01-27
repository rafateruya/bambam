export enum BomberManGridState {
  bomb = 'O',
  empty = '.',
}

const getStateAfterExplosion = (state: string[][], grid: string[]) => {
  const newState = grid.map((str) => {
    const row = str.split('')
    return row.map(() => BomberManGridState.bomb)
  })
  state.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === BomberManGridState.bomb) {
        const leftRowIndex = rowIndex - 1
        const rightRowIndex = rowIndex + 1
        const topColIndex = colIndex - 1
        const bottomColIndex = colIndex + 1
        if (leftRowIndex >= 0) {
          newState[leftRowIndex][colIndex] = BomberManGridState.empty
        }
        if (rightRowIndex < state.length) {
          newState[rightRowIndex][colIndex] = BomberManGridState.empty
        }
        if (topColIndex >= 0) {
          newState[rowIndex][topColIndex] = BomberManGridState.empty
        }
        if (bottomColIndex < row.length) {
          newState[rowIndex][bottomColIndex] = BomberManGridState.empty
        }
        newState[rowIndex][colIndex] = BomberManGridState.empty
      }
    })
  })
  return newState
}

const getGridFullOfBombs = (grid: string[]): string[] => {
  return grid.map((row) => {
    return row
      .split('')
      .map(() => BomberManGridState.bomb)
      .join('')
  })
}

export const bomberMan = (n: number, grid: string[]): string[] => {
  if (n === 1) {
    return grid
  }
  if (n % 2 === 0) {
    return getGridFullOfBombs(grid)
  }
  let currentState = grid.map((str) => str.split(''))
  if (n >= 3) {
    currentState = getStateAfterExplosion(currentState, grid)
    if (n === 3) {
      return currentState.map((row) => row.join(''))
    }
  }
  if (n % 4 === 1) {
    currentState = getStateAfterExplosion(currentState, grid)
    return currentState.map((row) => row.join(''))
  }
  currentState = getStateAfterExplosion(currentState, grid)
  currentState = getStateAfterExplosion(currentState, grid)

  return currentState.map((row) => row.join(''))
}
