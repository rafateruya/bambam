export const breakingRecords = (scores: number[]): number[] => {
  let minRecordBreaks = 0
  let maxRecordBreaks = 0
  let minRecord = scores[0] || 0
  let maxRecord = scores[0] || 0

  scores.forEach((score, index) => {
    if (index === 0) {
      return
    }
    if (score < minRecord) {
      minRecord = score
      minRecordBreaks++
    }
    if (score > maxRecord) {
      maxRecord = score
      maxRecordBreaks++
    }
  })

  return [maxRecordBreaks, minRecordBreaks]
}
