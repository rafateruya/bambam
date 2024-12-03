export const day2Pt1 = (input: string) => {
  const reports = input.split('\n').map((report) => report.split(' ').map((num) => parseInt(num)))
  return day2Pt1WithArrays(reports)
}

const isSafe = (report: number[]) => {
  let isIncreasing: boolean
  return report.every((level, index) => {
    if (index === 0) {
      return true
    }
    const diff = level - report[index - 1]
    if (index === 1) {
      if (level === report[0]) {
        return false
      }
      if (Math.abs(diff) > 3) {
        return false
      }
      isIncreasing = level > report[0]
      return true
    }
    if (isIncreasing) {
      if (diff <= 0) {
        return false
      }
      return diff <= 3
    }
    if (diff >= 0) {
      return false
    }
    return diff >= -3
  })
}

export const day2Pt1WithArrays = (reports: number[][]): number => {
  return reports.reduce((acc, report) => {
    if (isSafe(report)) {
      return acc + 1
    }
    return acc
  }, 0)
}
