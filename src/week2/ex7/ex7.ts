const allChars = 'abcdefghijklmnopqrstuvwxyz '.split('')

export const pangrams = (s: string): string => {
  const charsMapping: any = {}
  allChars.forEach((char) => {
    charsMapping[char] = 0
  })
  s.split('').forEach((char) => {
    const normalizedChar = char.toLowerCase()
    charsMapping[normalizedChar] = charsMapping[normalizedChar] + 1
  })
  const isPangram = allChars.every((char) => charsMapping[char] > 0)
  return isPangram ? 'pangram' : 'not pangram'
}
