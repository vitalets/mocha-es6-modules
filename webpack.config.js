
module.exports = {
  entry: ['./setup.js', './run.js'],
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      'https://unpkg.com/chai@4.1.2/chai.js': 'chai/chai.js'
    }
  },
  module: {
    rules: [
      {
        test: require.resolve('chai/chai.js'),
        use: 'script-loader'
      }
    ]
  },
};

