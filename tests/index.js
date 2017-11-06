const should = require('chai').should()
const stdev = require('../index')
const exampleSet = [0, 1, 2, 3, 4, 5, 6]

const calculateStandardDeviation = stdev.calculateStandardDeviation(exampleSet)

describe('Module ', function() {
  it('input set should equal a type of array', function() {
    exampleSet.should.be.a('array')
  })
  it('result should equal a type of number', function() {
    let exampleResult = calculateStandardDeviation
    exampleResult.should.be.a('number')
  })
})
