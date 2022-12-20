const FIXED_DECIMAL_DIGITS = 6

export const plusMinus = (arr: number[]) => {
  const arrSize = arr.length
  const elementsCount = {
    positive: 0,
    negative: 0,
    zero: 0,
  }
  arr.forEach((item) => {
    if (item > 0) {
      elementsCount.positive++
      return
    }
    if (item < 0) {
      elementsCount.negative++
      return
    }
    elementsCount.zero++
  })
  const proportions = {
    positive: elementsCount.positive / arrSize,
    negative: elementsCount.negative / arrSize,
    zero: elementsCount.zero / arrSize,
  }
  console.log(proportions.positive.toFixed(FIXED_DECIMAL_DIGITS))
  console.log(proportions.negative.toFixed(FIXED_DECIMAL_DIGITS))
  console.log(proportions.zero.toFixed(FIXED_DECIMAL_DIGITS))
}
