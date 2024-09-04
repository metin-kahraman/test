// next-intl.config.js
const { NextIntlProvider } = require('next-intl');

module.exports = {
  locales: ['en', 'tr', 'ru', 'fr'],
  defaultLocale: 'en',
  messages: {
    en: require('./locales/en.json'),
    tr: require('./locales/tr.json'),
    // diğer diller...
  },
};
