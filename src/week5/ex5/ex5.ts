export const getCountSorted = (arr: string[][]): string[] => {
  arr.forEach((_value, index) => {
    if (index < arr.length / 2) {
      arr[index][1] = '-'
    }
  })
  arr.sort((a, b) => {
    const [aStr, _charA] = a
    const [bStr, _charB] = b
    const numA = parseInt(aStr)
    const numB = parseInt(bStr)
    return numA - numB
  })
  return arr.map(([_value, char]) => char)
}

export const countSort = (arr: string[][]): void => {
  const countSorted = getCountSorted(arr)
  console.log(countSorted.join(' '))
}
