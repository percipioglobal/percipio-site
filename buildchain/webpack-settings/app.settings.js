// app.settings.js

// node modules
require('dotenv').config();

// settings
module.exports = {
    alias: {
        'vue$': 'vue/dist/vue.esm.js'
    },
    copyright: '©2020 Percipio.London',
    entry: {
        'app': [
            '../src/fonts/open-sans-regular.woff',
            '../src/fonts/open-sans-regular.woff2',
            '../src/fonts/open-sans-italic.woff',
            '../src/fonts/open-sans-italic.woff2',
            '../src/fonts/open-sans-600.woff',
            '../src/fonts/open-sans-600.woff2',
            '../src/fonts/open-sans-700.woff',
            '../src/fonts/open-sans-700.woff2',
            '../src/fonts/open-sans-800.woff',
            '../src/fonts/open-sans-800.woff2',
            '../src/fonts/source-code-pro-regular.woff',
            '../src/fonts/source-code-pro-regular.woff2',
            '../src/js/app.ts',
            '../src/css/tailwind-base.pcss',
            '../src/css/tailwind-components.pcss',
            '../src/css/tailwind-utilities.pcss',
            '../src/css/app-components.pcss',
            '../src/css/app-utilities.pcss',
            '../src/js/assets/icons.js',
        ],
        'lazysizes-wrapper': '../src/js/utils/lazysizes-wrapper.ts',
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
    name: 'percipio.london',
    paths: {
        dist: '../../cms/web/dist/',
    },
    urls: {
        criticalCss: 'https://sandbox.percipio.london/',
        publicPath: () => process.env.PUBLIC_PATH || '/dist/',
    },
};
