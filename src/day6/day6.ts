// I used this hardcoded array because the getCamelCaseOutput function needs to call a readLine function
// const inputLines = [
//   'S;M;plasticCup()',
//   'C;V;mobile phone',
//   'C;C;coffee machine',
//   'S;C;LargeSoftwareBook',
//   'C;M;white sheet of paper',
//   'S;V;pictureFrame',
// ]
const inputLines = ['C;V;can of coke', 'S;M;sweatTea()', 'S;V;epsonPrinter', 'C;M;santa claus', 'C;C;mirror']
let currentLine = 0
const readLine = (): string => {
  return inputLines[currentLine++]
}

const getCombinedWords = (words: string, type: string): string => {
  const wordsArr = words.split('\r')[0].split(' ')
  let combination = wordsArr.reduce((acc, word) => {
    const firstCapitalizedLetter = word[0].toUpperCase()
    const rest = word.slice(1).toLowerCase()
    return `${acc}${firstCapitalizedLetter}${rest}`
  }, '')
  if (type === 'V' || type === 'M') {
    const firstLetterLowered = combination[0].toLowerCase()
    const rest = combination.slice(1)
    combination = `${firstLetterLowered}${rest}`
  }
  if (type === 'M') {
    combination = `${combination}()`
  }
  return combination
}

// I could consult Google and check what are the corresponding Upper ASCII codes, but to do without consulting, I'm gonna use this function (not the best)
const isUpper = (string: string): boolean => {
  return string.toUpperCase() === string
}

const getSplittedWords = (words: string, type: string): string => {
  const wordsArr: string[] = []
  let currentWordStartIndex = 0
  const charsArr = words
    .replace(/\r?\n|\r/g, '')
    .split('')
    .filter((char) => char !== '(' && char !== ')')
  charsArr.forEach((char, index) => {
    if (index === 0) {
      return
    }
    const isLastChar = index === charsArr.length - 1
    if (isUpper(char) || isLastChar) {
      const currentWordEndIndex = isLastChar ? index + 1 : index
      const word = words.substring(currentWordStartIndex, currentWordEndIndex).toLowerCase()
      wordsArr.push(word)
      currentWordStartIndex = index
    }
  })
  return wordsArr.join(' ')
}

export const getOutputCamelCaseFromSingleLine = (line: string): string => {
  const [splitOrCombine, type, words] = line.split(';')
  if (splitOrCombine === 'C') {
    return getCombinedWords(words, type)
  } else {
    return getSplittedWords(words, type)
  }
}

export const getCamelCaseOutput = (): string[] => {
  const output: string[] = []
  let inputLine = readLine()
  while (inputLine) {
    output.push(getOutputCamelCaseFromSingleLine(inputLine))
    inputLine = readLine()
  }
  return output
}

export const main = () => {
  const output = getCamelCaseOutput()
  output.forEach((line) => {
    console.log(line)
  })
}
