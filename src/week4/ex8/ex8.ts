const A_UPPER_CODE = 65
const A_LOWER_CODE = 97
const Z_UPPER_CODE = 90
const Z_LOWER_CODE = 122
const isLetter = (char: string) => {
  return char.match(/[a-z]/i)
}
export const rotateChar = (s: string, k: number) => {
  if (!isLetter(s)) {
    return s
  }
  const asciiCode = s.charCodeAt(0)
  const isUpper = s === s.toUpperCase()
  const charsetOffset = isUpper ? A_UPPER_CODE : A_LOWER_CODE
  const allCharsLength = Z_LOWER_CODE - A_LOWER_CODE + 1
  const indexOffset = Math.floor((asciiCode - charsetOffset + k) / allCharsLength)

  const newCharIndex = (asciiCode - charsetOffset + k) % allCharsLength
  const newCode = newCharIndex + charsetOffset
  return String.fromCharCode(newCode)
}

export const caesarCipher = (s: string, k: number): string => {
  return s
    .split('')
    .map((char) => rotateChar(char, k))
    .join('')
}
