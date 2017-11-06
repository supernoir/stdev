STDEV - Standard Deviation
=========

A tiny library for calculating Standard Deviation.
Inputs a dataset array, retrieves the calculated standard deviation as float.

## Installation

NPM:
```npm install standarddeviation --save```

Yarn:
```yarn add standarddeviation```

## Usage

Require the module in your node project:
```const stdev = require('standarddeviation')```

Make sure you have a dataset that is an array:
```const exampleSet = [0, 1, 2, 3, 4, 5, 6]```

Execute Standard Deviation calculation:
```const deviation = stdev.calculateStandardDeviation(exampleSet)```

Log the result
```console.log(deviation)```

Check your console for the result:
```$ 2.160246899469287```

## Tests

Run mocha/chai:
```npm test```

## Contributing

Please help me in making this module even better. File an issue if something doesn't work. Thanks!

#### Contributors
- supernoir

## Release History

* 0.0.1 Initial release