export const marsExploration = (s: string): number => {
  let wrongChars = 0
  s.split('').forEach((char, index) => {
    const rest = index % 3
    if (rest === 0 || rest === 2) {
      if (char !== 'S') {
        wrongChars++
      }
    } else {
      if (char !== 'O') {
        wrongChars++
      }
    }
  })
  return wrongChars
}
