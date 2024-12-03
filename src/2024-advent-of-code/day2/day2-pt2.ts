export const day2Pt2 = (input: string) => {
  const reports = input.split('\n').map((report) => report.split(' ').map((num) => parseInt(num)))
  return day2Pt2WithArrays(reports)
}

const atLeastOneSafe = (report: number[]): boolean => {
  return report.some((_level, index) => {
    const reportWithoutItem = report.filter((_level, i) => i !== index)
    return isSafe(reportWithoutItem, false)
  })
}

const isSafe = (report: number[], tolerationMode = true) => {
  let isIncreasing: boolean
  return report.every((level, index) => {
    if (index === 0) {
      return true
    }
    const diff = level - report[index - 1]
    if (index === 1) {
      if (level === report[0]) {
        if (tolerationMode) {
          return atLeastOneSafe(report)
        }
        return false
      }
      if (Math.abs(diff) > 3) {
        if (tolerationMode) {
          return atLeastOneSafe(report)
        }
        return false
      }
      isIncreasing = level > report[0]
      return true
    }
    if (isIncreasing) {
      if (diff <= 0) {
        if (tolerationMode) {
          return atLeastOneSafe(report)
        }
        return false
      }
      const safe = diff <= 3
      if (!safe && tolerationMode) {
        return atLeastOneSafe(report)
      }
      return safe
    }
    if (diff >= 0) {
      if (tolerationMode) {
        return atLeastOneSafe(report)
      }
      return false
    }
    const safe = diff >= -3
    if (!safe && tolerationMode) {
      return atLeastOneSafe(report)
    }
    return safe
  })
}

export const day2Pt2WithArrays = (reports: number[][]): number => {
  return reports.reduce((acc, report) => {
    if (isSafe(report)) {
      return acc + 1
    }
    return acc
  }, 0)
}
