export const pylons = (kAux: number, arr: number[]): number => {
  let lastFullFilledIndex = -1
  let counter = 0
  let hasFoundFailure = false
  const k = kAux - 1
  while (!hasFoundFailure && lastFullFilledIndex < arr.length - 1) {
    let hasFoundPowerPlant = false
    for (let i = k + lastFullFilledIndex + 1; !hasFoundPowerPlant && i > lastFullFilledIndex - k; i--) {
      if (arr[i] === 1) {
        lastFullFilledIndex = i + k
        hasFoundPowerPlant = true
        counter++
      }
    }
    if (!hasFoundPowerPlant) {
      hasFoundFailure = true
    }
  }

  return hasFoundFailure ? -1 : counter
}
