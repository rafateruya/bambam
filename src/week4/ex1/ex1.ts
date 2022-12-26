export const pickingNumbers = (a: number[]): number => {
  a.sort((a, b) => a - b)
  let maxSequenceLength = 0
  const sequenceInfo: {
    startIndex: number
    firstElement?: number
    secondElement?: number
    secondElementStart?: number
  } = {
    startIndex: 0,
    firstElement: a[0],
  }

  a.forEach((value, index) => {
    const nextItem = a[index + 1]
    if (nextItem === undefined) {
      if ((sequenceInfo.secondElement || 0) - (sequenceInfo.firstElement || 0) <= 1) {
        const sequenceLengthCandidate = index + 1 - sequenceInfo.startIndex
        if (sequenceLengthCandidate > maxSequenceLength) {
          maxSequenceLength = sequenceLengthCandidate
        }
      }
    } else {
      if (nextItem !== value) {
        if (!sequenceInfo.secondElement) {
          sequenceInfo.secondElement = nextItem
          sequenceInfo.secondElementStart = index + 1
        } else if ((sequenceInfo.secondElement || 0) - (sequenceInfo.firstElement || 0) <= 1) {
          const sequenceLengthCandidate = index + 1 - sequenceInfo.startIndex
          if (sequenceLengthCandidate > maxSequenceLength) {
            maxSequenceLength = sequenceLengthCandidate
          }
          sequenceInfo.firstElement = sequenceInfo.secondElement
          sequenceInfo.secondElement = nextItem
          sequenceInfo.startIndex = sequenceInfo.secondElementStart || 0
          sequenceInfo.secondElementStart = index + 1
        } else {
          sequenceInfo.firstElement = sequenceInfo.secondElement
          sequenceInfo.secondElement = nextItem
          sequenceInfo.startIndex = sequenceInfo.secondElementStart || 0
          sequenceInfo.secondElementStart = index + 1
        }
      }
    }
  })
  return maxSequenceLength
}
