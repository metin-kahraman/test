const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/:locale/dis-tedavileri',
        destination: '/:locale/dental-treatments',
      },
      {
        source: '/:locale/traitements-dentaires',
        destination: '/:locale/dental-treatments',
      },
      {
        source: '/:locale/oncesi-sonrasi',
        destination: '/:locale/before-after',
      },
    ];
  },
};


module.exports = withNextIntl(nextConfig);
