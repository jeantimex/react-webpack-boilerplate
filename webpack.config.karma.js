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
        include: path.resolve('src'),
        exclude: path.resolve('node_modules'),
      },
      {
        test: [/\.spec.js$/, /\.js$/],
        loader: 'babel',
        include: [
          path.resolve('test'),
          path.resolve('helpers'),
        ],
        exclude: path.resolve('node_modules'),
      }
    ]
  },

  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon',
      components: path.join(__dirname, 'src/components'),
      helpers: path.join(__dirname, 'helpers'),
    },
    extensions: ['', '.css', '.js', '.jsx', '.json', '.scss'],
  },

};
