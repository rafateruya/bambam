export const xor = (a: string, b: string): string => {
  return a
    .split('')
    .map((value, index) => {
      return value === b[index] ? '0' : '1'
    })
    .join('')
}
