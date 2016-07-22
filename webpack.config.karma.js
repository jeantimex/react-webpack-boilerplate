/**
 * Webpack Configuration for Karma
 */

const path = require('path');

module.exports = {

  externals: {
    cheerio: 'window',
    jsdom: 'window',
    mocha: 'mocha',
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
  },

  devtool: 'source-map',

  isparta: {
    embedSource: true,
    noAutoWrap: true,
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'css!sass',
      }
    ],

    noParse: [/node_modules\/sinon\//],

    preLoaders: [
      {
        test: /\.js$/,
        loader: 'isparta',
        exclude: [
          /\.spec.js$/,
          path.resolve('node_modules'),
          path.resolve('test/test.bundle.js'),
        ],
      },
      {
        test: /\.spec.js$/,
        loader: 'babel',
        exclude: [
          path.resolve('src'),
          path.resolve('node_modules'),
        ],
      }
    ]
  },

  resolve: {
    alias: { 'sinon': 'sinon/pkg/sinon' },
    extensions: ['', '.css', '.js', '.jsx', '.json', '.scss'],
    modulesDirectories: ['', 'src', 'node_modules'],
  },

};
