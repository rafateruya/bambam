export const pageCount = (n: number, p: number): number => {
  const pagesFromStart = p / 2
  const pagesFromEnd = n % 2 === 0 && p % 2 === 1 ? (n - p + 1) / 2 : (n - p) / 2
  return Math.floor(Math.min(pagesFromEnd, pagesFromStart))
}
