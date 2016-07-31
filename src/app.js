import React from 'react';
import Menu from './components/menu';

// Locale related
import { addLocaleData, IntlProvider } from 'react-intl';

// Default locale messages
import enMessages from '../i18n/en-US.json';

// Add additional locale data
// French
import fr from 'react-intl/locale-data/fr';
import frMessages from '../i18n/fr-FR.json';
addLocaleData(fr);

// Chinese
import zh from 'react-intl/locale-data/zh';
import zhMessages from '../i18n/zh-CN.json';
addLocaleData(zh);

// Styles
import './styles.scss';

// We can update the locale and messages based on navigator.language
// or your global settings
let locale;
let messages;

switch (navigator.language) {
    case 'fr':
        locale = 'fr';
        messages = frMessages;
        break;
    case 'zh':
    case 'zh-CN':
        locale = 'zh';
        messages = zhMessages;
        break;
    default:
        locale = 'en';
        messages = enMessages;
}

const App = () => (
    <IntlProvider
        locale={ locale }
        messages={ messages }
    >
        <div className='mainApp'>
            <Menu />
        </div>
    </IntlProvider>
);

export default App;
