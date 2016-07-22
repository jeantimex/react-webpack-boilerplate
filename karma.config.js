var webpackConfig = require('./webpack.config.karma');

module.exports = function (config) {

  config.set({

    browsers: ['PhantomJS'],

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
      ],
    },

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/test.bundle.js',
    ],

    // frameworks to use
    frameworks: ['mocha', 'chai', 'chai-sinon'],

    plugins: [
      'karma-chai',
      'karma-chai-sinon',
      'karma-coverage',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack',
    ],

    preprocessors: {
      // only specify one entry point
      // and require all tests in there
      'test/test.bundle.js': ['webpack', 'sourcemap'],
    },

    reporters: ['spec', 'coverage'],

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
    },

  });

};
