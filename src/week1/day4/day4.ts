const AM_PM_INDEX = 8

export const getTimeConversion = (s: string) => {
  const strChars = s.split('')
  const amPmIndicator = strChars.splice(AM_PM_INDEX).join('')
  const [hours, minutes, seconds] = strChars.join('').split(':')
  let hoursToAdd = amPmIndicator === 'PM' ? 12 : 0
  if (hours === '12') {
    hoursToAdd = amPmIndicator === 'PM' ? 0 : -12
  }
  const hoursInt = +hours + hoursToAdd
  return [`0${hoursInt.toString()}`.slice(-2), minutes, seconds].join(':')
}

export const timeConversion = (s: string) => {
  console.log(getTimeConversion(s))
}
