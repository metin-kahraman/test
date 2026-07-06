// next-intl.config.js
const { NextIntlProvider } = require('next-intl');

module.exports = {
  locales: ['en', 'tr', 'ru', 'pl', 'lt'],
  defaultLocale: 'en',
  messages: {
    en: require('./locales/en.json'),
    tr: require('./locales/tr.json'),
    ru: require('./locales/ru.json'),
    pl: require('./locales/pl.json'),
    lt: require('./locales/lt.json'),
    // diğer diller...
  },
};
