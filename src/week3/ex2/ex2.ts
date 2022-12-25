export const birthday = (s: number[], d: number, m: number): number => {
  let optionsCounter = 0
  s.forEach((value, index) => {
    if (index + m - 1 >= s.length) {
      return
    }
    const segment = s.slice(index, index + m)
    const sum = segment.reduce((acc, current) => acc + current, 0)
    if (sum === d) {
      optionsCounter++
    }
  })
  return optionsCounter
}
