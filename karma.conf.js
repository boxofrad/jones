var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    frameworks: [ 'jasmine' ],
    reporters: [ 'dots' ],
    files: [
      'test.webpack.js'
    ],
    preprocessors: {
      'test.webpack.js': [ 'webpack' ]
    },
    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: 'babel'
          }
        ]
      }
    }
  });
};
