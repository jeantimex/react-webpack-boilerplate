// Polyfills
import './polyfills';

// Vendor libraries
import React from 'react';
import { render } from 'react-dom';

// Project components
import App from './app';

render(
    <App />,
    document.getElementById('root')
);
