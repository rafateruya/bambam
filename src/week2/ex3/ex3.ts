const get32BitsBinary = (n: number): string => {
  const binary = n.toString(2)
  const complement = '0000000000000000000000000000000'
  return `${complement}${binary}`.slice(-32)
}

const getFlippedNumber = (binary: string): string => {
  let flippedNumber = ''
  binary.split('').forEach((char) => {
    if (char === '0') {
      flippedNumber += '1'
    } else {
      flippedNumber += '0'
    }
  })
  return flippedNumber
}

const getNumberFromBinary = (binary: string): number => {
  return parseInt(binary, 2)
}

export const flippingBits = (n: number): number => {
  const binary32 = get32BitsBinary(n)
  const flippedBinary = getFlippedNumber(binary32)
  const flippedNumber = getNumberFromBinary(flippedBinary)
  return flippedNumber
}
