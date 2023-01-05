export const dynamicArray = (n: number, queries: number[][]): number[] => {
  const arr: number[][] = []
  for (let i = 0; i < n; i++) {
    arr.push([])
  }
  let lastAnswer = 0
  const answers: number[] = []
  queries.forEach((query) => {
    const [type, x, y] = query
    const idx = (x ^ lastAnswer) % n
    if (type === 1) {
      arr[idx].push(y)
    }
    if (type === 2) {
      const newLastAnswerValue = arr[idx][y % arr[idx].length]
      lastAnswer = newLastAnswerValue
      answers.push(newLastAnswerValue)
    }
  })
  return answers
}
