export const sockMerchant = (n: number, arr: number[]): number => {
  const socksMapping: { [color: number]: number } = {}
  let pairs = 0
  arr.forEach((color) => {
    if (socksMapping[color] === 1) {
      pairs++
      socksMapping[color] = 0
    } else {
      socksMapping[color] = 1
    }
  })

  return pairs
}
