export const getMinimumBribes = (q: number[]): string => {
  let bribes = 0
  const isTooChaotic = q.some((initialPosition: number, index) => {
    const initialIndex = initialPosition - 1
    const offset = index - initialIndex
    if (offset < -2) {
      return true
    }
    for (let j = initialIndex - 1; j < index; j++) {
      if (q[j] - 1 > initialIndex) bribes++
    }
  })
  if (isTooChaotic) {
    return 'Too chaotic'
  } else {
    return bribes.toString()
  }
}

export const minimumBribes = (q: number[]): void => {
  const bribes = getMinimumBribes(q)
  console.log(bribes)
}
