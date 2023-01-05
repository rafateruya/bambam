export const missingNumbers = (arr: number[], brr: number[]): number[] => {
  const missingArr = brr.filter((value) => {
    const index = arr.indexOf(value)
    if (index === -1) {
      return true
    } else {
      arr.splice(index, 1)
      return false
    }
  })
  return [...new Set(missingArr)].sort((a, b) => a - b)
}
