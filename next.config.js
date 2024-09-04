const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/tr/dis-tedavileri',
        destination: '/tr/dental-treatments',
      },
      {
        source: '/en/dental-treatments',
        destination: '/en/dental-treatments',
      },
      {
        source: '/fr/traitements-dentaires',
        destination: '/fr/dental-treatments',
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
