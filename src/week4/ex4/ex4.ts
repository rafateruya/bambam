export const getFirstSeqElement = (s: string): string | void => {
  let firstSeqElement: string | undefined
  for (let i = 0; i <= s.length / 2 && !firstSeqElement; i++) {
    const numberToTest = BigInt(s.substring(0, i + 1))
    let hasFinishedTest = false
    let nextNumber = numberToTest + BigInt(1)
    let lastTestedIndex = i + 1
    while (!hasFinishedTest) {
      const nextNumberLength = nextNumber.toString().length
      const newLastTestedIndex = lastTestedIndex + nextNumberLength
      const candidateNumberStr = s.substring(lastTestedIndex, newLastTestedIndex)
      const candidateNumber = BigInt(candidateNumberStr)

      if (newLastTestedIndex >= s.length - 1) {
        hasFinishedTest = true
      }
      if (nextNumber === candidateNumber) {
        lastTestedIndex = newLastTestedIndex
        nextNumber++
        if (hasFinishedTest) {
          firstSeqElement = numberToTest.toString()
        }
      } else {
        hasFinishedTest = true
      }
    }
  }
  return firstSeqElement
}

export const separateNumbers = (s: string): void => {
  const element = getFirstSeqElement(s)
  console.log(element ? `YES ${element}` : 'NO')
}
