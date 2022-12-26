export const kangaroo = (x1: number, v1: number, x2: number, v2: number): string => {
  if (v1 === v2) {
    return x1 === x2 ? 'YES' : 'NO'
  }
  const steps = (x2 - x1) / (v1 - v2)

  if (steps >= 0 && Math.floor(steps) === steps) {
    return 'YES'
  }
  return 'NO'
}
