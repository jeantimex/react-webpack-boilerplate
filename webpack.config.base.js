/**
 * Webpack Base Configuration
 *
 * Notes on config properties:
 *
 * 'webpack-dev-server'
 * Is a little node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle.
 * It also has a little runtime which is connected to the server via Socket.IO.
 *
 * 'webpack/hot/dev-server'
 * By adding a script to your index.html file and a special entry point in your configuration
 * you will be able to get live reloads when doing changes to your files.
 *
 * devtool: 'eval-source-map'
 * http://www.cnblogs.com/Answer1215/p/4312265.html
 * The source map file will only be downloaded if you have source maps enabled and your dev tools open.
 *
 * HotModuleReplacementPlugin()
 * Hot Module Replacement (HMR) exchanges, adds or removes modules while an application is running without page reload.
 *
 * NoErrorsPlugin()
 * Hot loader is better when used with NoErrorsPlugin and hot/only-dev-server since it eliminates page reloads
 * altogether and recovers after syntax errors.
 *
 * 'react-hot'
 * React Hot Loader is a plugin for Webpack that allows instantaneous live refresh without losing state
 * while editing React components.
 *
 * 'babel'
 * Babel enables the use of ES6 today by transpiling your ES6 JavaScript into equivalent ES5 source
 * that is actually delivered to the end user browser.
 */

/* eslint-disable no-var */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var propsParser = require('properties-parser');
var webpack = require('webpack');
var path = require('path');

module.exports = function webpackConfig(locale) {

  var messagePath = path.resolve('i18n', (locale + '.properties'));
  var messages = propsParser.read(messagePath);

  locale = locale.substr(0, locale.indexOf('-'));

  return {

    // Entry point for the bundle.
    entry: [
      './src/index'
    ],

    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          loader: ExtractTextPlugin.extract(
            'style',
            'css?sourceMap!sass?sourceMap'
          )
        }
      ]
    },

    // If you pass an array - the modules are loaded on startup. The last one is exported.
    output: {
      filename: 'bundle.js',
    },

    plugins: [
      new ExtractTextPlugin('styles.css'),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        __I18N__: JSON.stringify({
          locale,
          messages,
        }),
        'process.env': {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
      }),
    ],

    // Array of file extensions used to resolve modules.
    resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.scss'],
      alias: {
        components: path.join(__dirname, 'src/components'),
        'locale-data': 'react-intl/locale-data/' + locale,
      },
    },

  };

};
