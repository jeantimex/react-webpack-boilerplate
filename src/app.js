import React from 'react';
import Menu from './components/menu';

// Locale related
import { addLocaleData, IntlProvider } from 'react-intl';

// Locale data (date, number... formats)
import fr from 'react-intl/locale-data/fr';
// Custom locale messages
import frMessages from '../i18n/fr-FR.json';

import './styles.scss';

// Add additional locale data
addLocaleData(fr);

const App = () => (
    <IntlProvider locale='fr' messages={ frMessages }>
        <div className='mainApp'>
            <Menu />
        </div>
    </IntlProvider>
);

export default App;
