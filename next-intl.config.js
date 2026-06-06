// next-intl.config.js
const { NextIntlProvider } = require('next-intl');

module.exports = {
  locales: ['en', 'tr', 'ru'],
  defaultLocale: 'en',
  messages: {
    en: require('./locales/en.json'),
    tr: require('./locales/tr.json'),
    ru: require('./locales/ru.json'),
    // diğer diller...
  },
};
