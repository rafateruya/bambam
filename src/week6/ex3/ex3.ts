const isEven = (n: number) => {
  return n % 2 === 0
}

const getMaxNumbers = (arr: number[]): number[] => {
  const maxNumbers: number[] = []

  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index]
    if (!maxNumbers.length) {
      maxNumbers.push(element)
    } else {
      maxNumbers.some((localMax, index) => {
        if (element > localMax) {
          maxNumbers.splice(index)
          maxNumbers.push(element)
          return true
        } else if (index === maxNumbers.length - 1) {
          maxNumbers.push(element)
        }
        return false
      })
    }
  }

  return maxNumbers
}

export const gamingArray = (arr: number[]): string => {
  const maxNumbers = getMaxNumbers(arr)
  const isEvenNumber = isEven(maxNumbers.length)
  return isEvenNumber ? 'ANDY' : 'BOB'
}
