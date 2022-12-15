import { getOutputCamelCaseFromSingleLine, main } from './day6'

describe('capitalize string tests', () => {
  describe('splits', () => {
    test('method', () => {
      const output = getOutputCamelCaseFromSingleLine('S;M;plasticCup()')
      expect(output).toBe('plastic cup')
    })
    test('class', () => {
      const output = getOutputCamelCaseFromSingleLine('S;C;LargeSoftwareBook')
      expect(output).toBe('large software book')
    })
    test('variable', () => {
      const output = getOutputCamelCaseFromSingleLine('S;V;pictureFrame')
      expect(output).toBe('picture frame')
    })
  })
  describe('combines', () => {
    test('method', () => {
      const output = getOutputCamelCaseFromSingleLine('C;M;white sheet of paper')
      expect(output).toBe('whiteSheetOfPaper()')
    })
    test('class', () => {
      const output = getOutputCamelCaseFromSingleLine('C;C;coffee machine')
      expect(output).toBe('CoffeeMachine')
    })
    test('variable', () => {
      const output = getOutputCamelCaseFromSingleLine('C;V;mobile phone')
      expect(output).toBe('mobilePhone')
    })
  })
  main()
})
