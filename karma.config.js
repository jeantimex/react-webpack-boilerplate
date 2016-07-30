const webpackConfig = require('./webpack.config.karma');

module.exports = function (config) {

  config.set({

    browsers: ['PhantomJS'],

    captureConsole: true,

    colors: true,

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' },
      ],
    },

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/intl/dist/Intl.js',
      './test/test.bundle.js',
    ],

    // frameworks to use
    frameworks: ['mocha', 'chai', 'chai-sinon'],

    plugins: [
      'karma-chai',
      'karma-chai-sinon',
      'karma-coverage',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-threshold-reporter',
      'karma-webpack',
    ],

    preprocessors: {
      // only specify one entry point
      // and require all tests in there
      'test/test.bundle.js': ['webpack', 'sourcemap'],
    },

    reporters: ['mocha', 'coverage', 'threshold'],

    thresholdReporter: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true,
    },

  });

};
