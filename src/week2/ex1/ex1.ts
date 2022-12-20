export const lonelyinteger = (a: number[]): number => {
  const occurrences: { [value: number]: number } = {}
  a.forEach((value) => {
    const newOccurrencesValue = occurrences[value] || 0
    occurrences[value] = newOccurrencesValue + 1
  })
  const lonelyKey = Object.keys(occurrences).find((key) => {
    return occurrences[key as any] === 1
  })

  return parseInt(lonelyKey)
}
