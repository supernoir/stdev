module.exports = {
  calculateMean: function(array) {
    let sum = array.reduce((accumulator, val) => accumulator + val)
    let result = sum / array.length
    return result
  },

  subtractMeanFromElements: function(array, mean) {
    let subtractedElements = []
    for (let element in array) {
      subtractedElements.push(array[element] - mean)
    }
    return subtractedElements
  },

  squareSubtractedElements: function(array) {
    return array.map(x => Math.pow(x, 2))
  },

  addSquaredElements: function(array) {
    return array.reduce((accumulator, val) => accumulator + val)
  },

  findVariance: function(squaredsum, originalset) {
    let n = originalset.length
    n = n - 1
    return squaredsum / n
  },

  takeSquareRootOfVariance: function(variance) {
    return Math.sqrt(variance)
  },

  calculateStandardDeviation: function(dataset) {
    let standarddeviation = this.takeSquareRootOfVariance(
      this.findVariance(
        this.addSquaredElements(
          this.squareSubtractedElements(
            this.subtractMeanFromElements(
              dataset,
              this.calculateMean(dataset),
              dataset
            )
          )
        ),
        dataset
      )
    )
    return standarddeviation
  }
}
