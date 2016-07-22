/**
 * Webpack Config for Production
 *
 * Notes on config properties:
 *
 * OccurrenceOrderPlugin
 * Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids.
 * This make ids predictable, reduces to total file size and is recommended.
 *
 * UglifyJsPlugin
 * Minimize all JavaScript output of chunks. Loaders are switched into minimizing mode.
 *    - 'compress'
 *      Compressor is a tree transformer which reduces the code size by applying various optimizations on the AST.
 *
 * 'NODE_ENV'
 * React relies on process.env.NODE_ENV based optimizations.
 * If we force it to production, React will get in an optimized manner.
 * This will disable some checks (eg. property type checks) and give you a smaller build and improved performance.
 *    Note: That JSON.stringify is needed as webpack will perform string replace "as is".
 *    In this case we'll want to end up with strings as that's what various comparisons expect, not just production.
 *    Latter would just cause an error.
 *
 * 'babel'
 * Babel enables the use of ES6 today by transpiling your ES6 JavaScript into equivalent ES5 source
 * that is actually delivered to the end user browser.
 */

/* eslint-disable no-var */
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

module.exports = {

  // http://www.cnblogs.com/Answer1215/p/4312265.html
  // The source map file will only be downloaded if you have source maps enabled and your dev tools open.
  devtool: 'source-map',

  // Entry point for the bundle.
  entry: './src/index',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap!sass?sourceMap'
        ),
      }
    ]
  },

  // If you pass an array - the modules are loaded on startup. The last one is exported.
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],

  // Array of file extensions used to resolve modules.
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    root: path.resolve(path.join(__dirname, 'src')),
  },

};
