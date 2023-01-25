export const counterGame = (n: number): string => {
  let counter = 0
  let aux = n
  while (aux !== 1) {
    const result = Math.log2(aux)
    const roundExponent = Math.floor(result)
    if (result === roundExponent) {
      aux /= 2
    } else {
      aux -= Math.pow(2, roundExponent)
    }
    counter++
  }
  if (counter % 2 === 0) {
    return 'Richard'
  } else {
    return 'Louise'
  }
}
