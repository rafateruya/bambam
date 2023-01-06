export const misereNim = (s: number[]): string => {
  const hasOnlyPilesWithOneStone = s.every((stones) => stones === 1)
  if (hasOnlyPilesWithOneStone) {
    if (s.length % 2 === 0) {
      return 'First'
    }
    return 'Second'
  }

  const xor = s.reduce((acc, value) => acc ^ value, 0)
  if (!xor) {
    return 'Second'
  }
  return 'First'
}
