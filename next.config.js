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
        source: '/:locale/dis-tedavileri/estetik-dis-hekimligi',
        destination: '/:locale/dental-treatments/aesthetic-dentistry',
      },
      {
        source: '/:locale/dis-tedavileri/dis-beyazlatma',
        destination: '/:locale/dental-treatments/dental-bleaching',
      },
      {
        source: '/:locale/dis-tedavileri/telsiz-ortodonti-tedavisi',
        destination: '/:locale/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/:locale/dis-tedavileri/dis-teli-tedavisi',
        destination: '/:locale/dental-treatments/orthodontics',
      },
      {
        source: '/:locale/dis-tedavileri/kanal-tedavisi',
        destination: '/:locale/dental-treatments/endodontics',
      },
      {
        source: '/:locale/dis-tedavileri/dis-eti-tedavisi',
        destination: '/:locale/dental-treatments/periodontology',
      },
      {
        source: '/:locale/dis-tedavileri/cocuk-dis-hekimligi',
        destination: '/:locale/dental-treatments/pedodontics',
      },
      {
        source: '/:locale/dis-tedavileri/implant-tedavisi',
        destination: '/:locale/dental-treatments/implants',
      },
      {
        source: '/:locale/dis-tedavileri/agiz-dis-ve-cene-cerrahileri',
        destination: '/:locale/dental-treatments/jaw-surgery',
      },
      {
        source: '/:locale/dis-tedavileri/dudak-dil-bagi-alinmasi',
        destination: '/:locale/dental-treatments/frenectomy',
      },
      {
        source: '/:locale/dis-tedavileri/all-on-four-implant',
        destination: '/:locale/dental-treatments/all-on-four',
      },
      {
        source: '/:locale/dis-tedavileri/dolgu-tedavisi',
        destination: '/:locale/dental-treatments/filling',
      },
      {
        source: '/:locale/dis-tedavileri/sabit-protetik-uygulamalar',
        destination: '/:locale/dental-treatments/fixed-prosthetic-applications',
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
