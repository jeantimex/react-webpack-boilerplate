# React Webpack Boilerplate

[![Node Version](https://img.shields.io/badge/node-v4.4.2-orange.svg)](https://img.shields.io/badge/node-v4.4.2-orange.svg)
[![React Version](https://img.shields.io/badge/react-v15.1.x-blue.svg)](https://img.shields.io/badge/react-v15.1.x-blue.svg)
[![Build Status](https://travis-ci.org/jeantimex/react-webpack-boilerplate.svg?branch=master)](https://travis-ci.org/jeantimex/react-webpack-boilerplate)
[![Dependency Status](https://david-dm.org/jeantimex/react-webpack-boilerplate.svg)](https://david-dm.org/jeantimex/react-webpack-boilerplate)
[![Coverage Status](https://coveralls.io/repos/github/jeantimex/react-webpack-boilerplate/badge.svg?branch=master)](https://coveralls.io/github/jeantimex/react-webpack-boilerplate?branch=master)

![React Webpack](http://jinandsu.net/react-webpack-boilerplate/react-webpack-boilerplate.png)

This boilerplate helps you quickly setup React project, it includes the following features:

- [React](https://facebook.github.io/react/) (ES6 with [Babel](https://babeljs.io/))
- [React Intl](https://github.com/yahoo/react-intl) (v2.0.x)
- [Webpack](https://webpack.github.io/) and Webpack dev server
- [Sass loader](https://github.com/jtangelder/sass-loader)
- [Karma](https://karma-runner.github.io/1.0/index.html) + [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/)
- Coverage report [isparta](https://github.com/douglasduteil/isparta)
- Unit test with [Enzyme](https://github.com/airbnb/enzyme) and [Sinon](http://sinonjs.org/)

This project is based on [react-es6-webpack-karma-boilerplate](https://github.com/mvader/react-es6-webpack-karma-boilerplate). 


## React

The following features are supported:

**Functional Component**
```javascript
const App = () => (
    <div className='main-app'>
        <h1>Hello, World!</h1>
    </div>
);
```
 
**Class Component**
```javascript
class App extends Component {
    render() {
        return (
            <div className='main-app'>
                <h1>Hello, World!</h1>
            </div>
        );
    }
}
```
 
**Class Properties**
```javascript
class Menu extends Component {
    static propTypes = {
        className: PropTypes.string,
    };
    ...
}
```

**Export Default**
```javascript
export default App;
```

**Import .scss in Component**
```javascript
import './styles.scss';
const App = () => <div />;
```

## Localization

We use Yahoo's React Intl (v2.0) library to support localization. To support new language, follow the steps below:

**Step 1**. Update `scripts/translate.js` and add new locale, e.g. `ja-JP`.
```javascript
const LANGS = [
    'en-US',
    'ja-JP',
    'fr-FR',
    'zh-CN',
];
```

**Step 2**. Run `npm build` to generate the i18n JSON file `i18n/ja-JP.json`. Since it's a new locale, `ja-JP.json` contains the same ids and messages as in `en-US.json`. Translate the messages in `ja-JP.json`.

**Step 3**. Update `src/app.js` and import the `ja-JP.json`.
```javascript
import ja from 'react-intl/locale-data/ja';
import jaMessages from '../i18n/ja-JP.json';
addLocaleData(ja);

let locale = 'ja';
let messages = jaMessages;
const App = () => (
    <IntlProvider
        locale={ locale }
        messages={ messages }
    >
    ...
    </IntlProvider>
);
```
Note: You can have multiple locales and change the locale and messages based on navigator.language or your custom settings.

## Unit Test

**Assert & Expect**
```javascript
import { assert, expect } from 'chai';
...
```

**Enzyme**
```javascript
import { shallow } from 'enzyme';
describe('Testing', () => {
    it('should render the App', () => {
        const wrapper = shallow(<App />);
        ...
    });
});
```

**Sinon**
```javascript
const sandbox = sinon.sandbox.create();
describe('Testing', () => {
    afterEach(() => sandbox.verifyAndRestore());
    it('should call the callback', () => {
        const callback = sandbox.stub();
        ...
    });
});
```

## Coverage Report

Code coverage report is geneated by `istanbul`. `npm run coveralls` will submit the coverage report to coveralls.io.

**Example**:
```
==================== Coverage / Threshold summary =============================
Statements   : 100% ( 46/46 ) Threshold : 90%, 4 ignored
Branches     : 100% ( 31/31 ) Threshold : 90%, 13 ignored
Functions    : 100% ( 10/10 ) Threshold : 90%
Lines        : 100% (  6/6  ) Threshold : 90%
================================================================================
```

HTML and lcov reports can be found in the coverage folder.

## How to use this package
Download or clone the package, then
```
npm install
npm start
```
navigate to `http://localhost:5000` in your browser.

## Linting
ESLint with React linting options have been enabled.
```
npm run lint
```

## Testing
Start Karma test runner.
```
npm run test
```

## Building
Build files for production
```
npm run build
```

## Clean
Remove dist and coverage folders
```
npm run clean
```
