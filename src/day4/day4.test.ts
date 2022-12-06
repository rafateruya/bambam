import { getTimeConversion } from './day4'

describe('getTimeConversion tests', () => {
  it('should return the military hour', () => {
    expect(getTimeConversion('07:05:45PM')).toBe('19:05:45')
    expect(getTimeConversion('08:05:45PM')).toBe('20:05:45')
    expect(getTimeConversion('07:05:45AM')).toBe('07:05:45')
    expect(getTimeConversion('11:05:45AM')).toBe('11:05:45')
    expect(getTimeConversion('11:05:45PM')).toBe('23:05:45')
    // expect(getTimeConversion('00:00:00PM')).toBe('12:00:00')
    // expect(getTimeConversion('00:00:00AM')).toBe('00:00:00')
    // expect(getTimeConversion('12:00:00PM')).toBe('00:00:00')
    // expect(getTimeConversion('12:00:00AM')).toBe('12:00:00')
    expect(getTimeConversion('12:40:22AM')).toBe('00:40:22')
    expect(getTimeConversion('12:40:22PM')).toBe('12:40:22')
  })
})
