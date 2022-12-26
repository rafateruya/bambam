export const rotateLeft = (d: number, arr: number[]): number[] => {
  const rotatedArr: number[] = []
  const simpleRotation = d % arr.length
  arr.forEach((value, index) => {
    if (simpleRotation > index) {
      const newIndex = arr.length - simpleRotation + index
      rotatedArr[newIndex] = value
    } else {
      const newIndex = index - simpleRotation
      rotatedArr[newIndex] = value
    }
  })
  return rotatedArr
}
