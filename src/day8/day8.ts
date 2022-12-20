export const getQueryOccurrencesInArray = (query: string, searchArray: string[]) => {
  const occurrences = searchArray.filter((value) => value === query)
  return occurrences.length
}

export const matchingStrings = (strings: string[], queries: string[]): number[] => {
  return queries.map((query) => getQueryOccurrencesInArray(query, strings))
}
