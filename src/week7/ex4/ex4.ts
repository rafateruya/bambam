export const isValid = (s: string): string => {
  const charsMapping: { [char: string]: number } = {}
  s.split('').forEach((char) => {
    const lower = char.toLowerCase()
    const occurrences = charsMapping[lower] || 0
    charsMapping[lower] = occurrences + 1
  })
  const occurrencesMapping: { [occurrences: string]: number } = {}
  Object.keys(charsMapping).forEach((char) => {
    const occurrences = charsMapping[char]
    const occurrencesNumberCount = occurrencesMapping[occurrences] || 0
    occurrencesMapping[occurrences] = occurrencesNumberCount + 1
  })
  const occurrencesKeys: number[] = Object.keys(occurrencesMapping)
    .map((str) => parseInt(str))
    .sort((a, b) => a - b)
  if (occurrencesKeys.length > 2) {
    return 'NO'
  }
  if (occurrencesKeys.length === 1) {
    return 'YES'
  }
  const keysDiff = occurrencesKeys[1] - occurrencesKeys[0]
  return (Math.abs(keysDiff) === 1 && occurrencesMapping[occurrencesKeys[1]] === 1) ||
    occurrencesMapping[occurrencesKeys[0]] === 1
    ? 'YES'
    : 'NO'
}
