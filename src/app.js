import React from 'react';
import Menu from './components/menu';

// Locale related
import { addLocaleData, IntlProvider } from 'react-intl';

// Custom locale messages
import enMessages from '../i18n/en-US.json';

// Add additional locale data
import fr from 'react-intl/locale-data/fr';
import frMessages from '../i18n/fr-FR.json';
addLocaleData(fr);

// Styles
import './styles.scss';

// We can update the locale and messages based on navigator.language
// or your global settings
let locale = 'en-US';
let messages = enMessages;

console.log(navigator.language);

if (navigator.language === 'fr') {
    locale = 'fr';
    messages = frMessages;
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
