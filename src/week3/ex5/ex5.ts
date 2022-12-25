export const migratoryBirds = (arr: number[]): number => {
  const birdsCountMapping: { [birdId: number]: number } = {}
  let mostFrequentType = arr[0]

  arr.forEach((birdId) => {
    birdsCountMapping[birdId] = (birdsCountMapping[birdId] || 0) + 1
    if (birdsCountMapping[mostFrequentType] === birdsCountMapping[birdId] && birdId < mostFrequentType) {
      mostFrequentType = birdId
    }
    if (birdsCountMapping[mostFrequentType] < birdsCountMapping[birdId]) {
      mostFrequentType = birdId
    }
  })
  return mostFrequentType
}
