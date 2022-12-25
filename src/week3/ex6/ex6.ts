const isTriangle = (a: number, b: number, c: number): boolean => {
  return a + b > c
}

export const maximumPerimeterTriangle = (sticks: number[]): number[] => {
  const sticksSize = sticks.length
  let foundTriangle = false
  let result = [-1]
  sticks.sort((a, b) => a - b)
  for (let i = sticksSize - 1; i >= 2 && !foundTriangle; i--) {
    for (let j = i - 1; j >= 1 && !foundTriangle; j--) {
      for (let k = j - 1; k >= 0 && !foundTriangle; k--) {
        const a = sticks[k]
        const b = sticks[j]
        const c = sticks[i]
        if (isTriangle(a, b, c)) {
          result = [a, b, c]
          foundTriangle = true
        }
      }
    }
  }
  return result
}
