import { breakingRecords } from './day5'

describe('day5 tests', () => {
  it('should return 0 in both record breakings for empty and one element arrays', () => {
    const emptyArrResponse = breakingRecords([])
    expect(emptyArrResponse).toBeDefined()
    const maxPointsRecordBreaksForEmptyArr = emptyArrResponse[0]
    expect(maxPointsRecordBreaksForEmptyArr).toBeDefined()
    expect(maxPointsRecordBreaksForEmptyArr).toBe(0)
    const minPointsRecordBreaksForEmptyArr = emptyArrResponse[1]
    expect(minPointsRecordBreaksForEmptyArr).toBeDefined()
    expect(minPointsRecordBreaksForEmptyArr).toBe(0)

    const oneElemResponse = breakingRecords([])
    expect(oneElemResponse).toBeDefined()
    const maxPointsRecordBreaksForOneElem = oneElemResponse[0]
    expect(maxPointsRecordBreaksForOneElem).toBeDefined()
    expect(maxPointsRecordBreaksForOneElem).toBe(0)
    const minPointsRecordBreaksForOneElem = oneElemResponse[1]
    expect(minPointsRecordBreaksForOneElem).toBeDefined()
    expect(minPointsRecordBreaksForOneElem).toBe(0)
  })

  it('should return expected response according to record repetitions', () => {
    const scores = [10, 20, 10, 20, 10, 20, 10, 20]
    const response = breakingRecords(scores)
    expect(response).toBeDefined()
    const maxPointsRecordBreaks = response[0]
    expect(maxPointsRecordBreaks).toBeDefined()
    expect(maxPointsRecordBreaks).toBe(1)
    const minPointsRecordBreaks = response[1]
    expect(minPointsRecordBreaks).toBeDefined()
    expect(minPointsRecordBreaks).toBe(0)
  })

  it('should return expected response for non record repetitions', () => {
    const scores = [10, 20, 8, 22, 15, 16, 2, 30, 1]
    const response = breakingRecords(scores)
    expect(response).toBeDefined()
    const maxPointsRecordBreaks = response[0]
    expect(maxPointsRecordBreaks).toBeDefined()
    expect(maxPointsRecordBreaks).toBe(3)
    const minPointsRecordBreaks = response[1]
    expect(minPointsRecordBreaks).toBeDefined()
    expect(minPointsRecordBreaks).toBe(3)
  })
})
