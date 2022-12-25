export const countingValleys = (steps: number, path: string): number => {
  let altitude = 0
  let valleysCounter = 0
  path.split('').forEach((upDown: string) => {
    const isGoingUp = upDown === 'U'
    if (isGoingUp) {
      altitude++
      if (altitude === 0) {
        valleysCounter++
      }
    } else {
      altitude--
    }
  })
  return valleysCounter
}
