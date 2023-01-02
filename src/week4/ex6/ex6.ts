const isEvenNumber = (n: number): boolean => {
  return n % 2 === 0
}

export const towerBreakers = (n: number, m: number): number => {
  if (m === 1 || isEvenNumber(n)) {
    return 2
  }
  return 1
}
