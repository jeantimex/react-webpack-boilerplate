/**
 * Webpack Configuration for Karma
 */

var propsParser = require('properties-parser');
var path = require('path');
var webpack = require('webpack');
var messagePath = path.resolve('i18n', 'en-US.properties');
var messages = propsParser.read(messagePath);
var locale = 'en';

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
          path.resolve('scripts'),
        ],
        exclude: path.resolve('node_modules'),
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __I18N__: JSON.stringify({
        locale,
        messages,
      }),
    }),
  ],

  resolve: {
    alias: {
      sinon: 'sinon/pkg/sinon',
      components: path.join(__dirname, 'src/components'),
      scripts: path.join(__dirname, 'scripts'),
    },
    extensions: ['', '.css', '.js', '.jsx', '.json', '.scss'],
  },

};
