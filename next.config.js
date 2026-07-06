const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async rewrites() {
    return [
      // ========== TÜRKÇE (tr) İÇİN YÖNLENDİRMELER ==========
      // Ana sayfalar / üst seviye
      {
        source: '/tr/dis-tedavileri',
        destination: '/tr/dental-treatments',
      },
      {
        source: '/tr/stomatologicheskie-uslugi',
        destination: '/tr/dental-treatments',
      },
      {
        source: '/tr/dijital-dis-hekimligi',
        destination: '/tr/digital-dentistry',
      },
      {
        source: '/tr/tsifrovaya-stomatologiya',
        destination: '/tr/digital-dentistry',
      },
      {
        source: '/tr/klinigimiz',
        destination: '/tr/our-clinic',
      },
      {
        source: '/tr/nasha-klinika',
        destination: '/tr/our-clinic',
      },
      {
        source: '/tr/oncesi-sonrasi',
        destination: '/tr/before-after',
      },
      {
        source: '/tr/do-i-posle',
        destination: '/tr/before-after',
      },
      {
        source: '/tr/iletisim',
        destination: '/tr/contact',
      },
      {
        source: '/tr/kontakty',
        destination: '/tr/contact',
      },
      // Blog ana sayfa
      {
        source: '/tr/blog',
        destination: '/tr/blog',
      },
      // Blog – bruxism
      {
        source: '/tr/blog/bruksizm',
        destination: '/tr/blog/bruxism',
      },
      // Blog – implant alt yazıları
      {
        source: '/tr/blog/implant/all-on-4',
        destination: '/tr/blog/implant/all-on-4',
      },
      {
        source: '/tr/blog/all-on-4-implant',
        destination: '/tr/blog/implant/all-on-4',
      },
      {
        source: '/tr/blog/implant/bone-graft',
        destination: '/tr/blog/implant/bone-graft',
      },
      {
        source: '/tr/blog/kostnyy-transplantat',
        destination: '/tr/blog/implant/bone-graft',
      },
      {
        source: '/tr/blog/kemik-grefti',
        destination: '/tr/blog/implant/bone-graft',
      },
      {
        source: '/tr/blog/implant/healing-process',
        destination: '/tr/blog/implant/healing-process',
      },
      {
        source: '/tr/blog/implant-iyilesmesi',
        destination: '/tr/blog/implant/healing-process',
      },
      {
        source: '/tr/blog/zazhivlenie-implantata',
        destination: '/tr/blog/implant/healing-process',
      },
      {
        source: '/tr/blog/implant/same-day-implant',
        destination: '/tr/blog/implant/same-day-implant',
      },
      {
        source: '/tr/blog/ayni-gun-implant',
        destination: '/tr/blog/implant/same-day-implant',
      },
      {
        source: '/tr/blog/implantatsiya-za-den',
        destination: '/tr/blog/implant/same-day-implant',
      },
      {
        source: '/tr/blog/implant/single-tooth',
        destination: '/tr/blog/implant/single-tooth',
      },
      {
        source: '/tr/tek-dis-implantı',
        destination: '/tr/blog/implant/single-tooth',
      },
      {
        source: '/tr/implantatsiya/odin-implant',
        destination: '/tr/blog/implant/single-tooth',
      },
      {
        source: '/tr/blog/single-tooth-implant',
        destination: '/tr/blog/implant/single-tooth',
      },
      {
        source: '/tr/blog/implant/temporary-options',
        destination: '/tr/blog/implant/temporary-options',
      },
      {
        source: '/tr/blog/gecici-disler',
        destination: '/tr/blog/implant/temporary-options',
      },
      {
        source: '/tr/blog/vremennye-zuby',
        destination: '/tr/blog/implant/temporary-options',
      },
      {
        source: '/tr/blog/implant/what-is-dental-implant',
        destination: '/tr/blog/implant/what-is-dental-implant',
      },
      {
        source: '/tr/blog/implant-nedir',
        destination: '/tr/blog/implant/what-is-dental-implant',
      },
      {
        source: '/tr/blog/chto-takoe-implantat',
        destination: '/tr/blog/implant/what-is-dental-implant',
      },
      {
        source: '/tr/blog/implant/life-time',
        destination: '/tr/blog/implant/life-time',
      },
      // Diğer blog yazıları
      {
        source: '/tr/blog/dental-bridge',
        destination: '/tr/blog/dental-bridge',
      },
      {
        source: '/tr/blog/zubnye-mosty',
        destination: '/tr/blog/dental-bridge',
      },
      {
        source: '/tr/blog/kopru',
        destination: '/tr/blog/dental-bridge',
      },
      {
        source: '/tr/blog/dental-veneer-types',
        destination: '/tr/blog/dental-veneer-types',
      },
      {
        source: '/tr/blog/denture',
        destination: '/tr/blog/denture',
      },
      {
        source: '/tr/blog/gum-recession-and-sensitivity',
        destination: '/tr/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/tr/blog/dis-eti-cekilmesi',
        destination: '/tr/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/tr/blog/retcessiya-desny',
        destination: '/tr/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/tr/blog/halitosis',
        destination: '/tr/blog/halitosis',
      },
      {
        source: '/tr/blog/halitoz',
        destination: '/tr/blog/halitosis',
      },
      {
        source: '/tr/blog/galitoz',
        destination: '/tr/blog/halitosis',
      },
      {
        source: '/tr/blog/how-to-prevent-yellowing-of-teeth',
        destination: '/tr/blog/how-to-prevent-yellowing-of-teeth',
      },
      {
        source: '/tr/blog/impacted-teeth',
        destination: '/tr/blog/impacted-teeth',
      },
      {
        source: '/tr/blog/orthodontics',
        destination: '/tr/blog/orthodontics',
      },
      {
        source: '/tr/blog/spaced-teeth',
        destination: '/tr/blog/spaced-teeth',
      },
      {
        source: '/tr/blog/tooth-bleeding',
        destination: '/tr/blog/tooth-bleeding',
      },
      {
        source: '/tr/blog/what-are-orthodontic-treatments',
        destination: '/tr/blog/what-are-orthodontic-treatments',
      },
      // Dental treatments alt sayfaları (Türkçe)
      {
        source: '/tr/dis-tedavileri/estetik-dis-hekimligi',
        destination: '/tr/dental-treatments/aesthetic-dentistry',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/esteticheskaya-stomatologiya',
        destination: '/tr/dental-treatments/aesthetic-dentistry',
      },
      {
        source: '/tr/dis-tedavileri/dis-beyazlatma',
        destination: '/tr/dental-treatments/dental-bleaching',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/otbelivanie-zubov',
        destination: '/tr/dental-treatments/dental-bleaching',
      },
      {
        source: '/tr/dis-tedavileri/telsiz-ortodonti-tedavisi',
        destination: '/tr/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/nevidimaya-ortodontiya',
        destination: '/tr/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/tr/dis-tedavileri/invisalign',
        destination: '/tr/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/invisalign',
        destination: '/tr/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/tr/dis-tedavileri/ortodonti-braket',
        destination: '/tr/dental-treatments/orthodontics',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/ortodontiya-brekey',
        destination: '/tr/dental-treatments/orthodontics',
      },
      {
        source: '/tr/dis-tedavileri/kanal-tedavisi',
        destination: '/tr/dental-treatments/endodontics',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/lechenie-kornevyh-kanalov',
        destination: '/tr/dental-treatments/endodontics',
      },
      {
        source: '/tr/dis-tedavileri/dis-eti-tedavisi',
        destination: '/tr/dental-treatments/periodontology',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/lechenie-desen',
        destination: '/tr/dental-treatments/periodontology',
      },
      {
        source: '/tr/dis-tedavileri/cocuk-dis-hekimligi',
        destination: '/tr/dental-treatments/pediatric-dentistry',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/detskaya-stomatologiya',
        destination: '/tr/dental-treatments/pediatric-dentistry',
      },
      {
        source: '/tr/dis-tedavileri/implant',
        destination: '/tr/dental-treatments/implants',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/implantatsiya',
        destination: '/tr/dental-treatments/implants',
      },
      {
        source: '/tr/dis-tedavileri/agiz-cerrahi',
        destination: '/tr/dental-treatments/oral-jaw-surgery',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/hirurgiya-rti',
        destination: '/tr/dental-treatments/oral-jaw-surgery',
      },
      {
        source: '/tr/dis-tedavileri/frenektomi',
        destination: '/tr/dental-treatments/frenectomy',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/frenektomiya',
        destination: '/tr/dental-treatments/frenectomy',
      },
      {
        source: '/tr/dis-tedavileri/all-on-4',
        destination: '/tr/dental-treatments/all-on-4',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/all-on-4',
        destination: '/tr/dental-treatments/all-on-4',
      },
      {
        source: '/tr/dis-tedavileri/dolgu',
        destination: '/tr/dental-treatments/filling',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/plomby',
        destination: '/tr/dental-treatments/filling',
      },
      {
        source: '/tr/dis-tedavileri/sabit-protez',
        destination: '/tr/dental-treatments/fixed-prosthetic-applications',
      },
      {
        source: '/tr/stomatologicheskie-uslugi/nesemnoye-protezirovanie',
        destination: '/tr/dental-treatments/fixed-prosthetic-applications',
      },

      // ========== RUSÇA (ru) İÇİN YÖNLENDİRMELER ==========
      {
        source: '/ru/dis-tedavileri',
        destination: '/ru/dental-treatments',
      },
      {
        source: '/ru/stomatologicheskie-uslugi',
        destination: '/ru/dental-treatments',
      },
      {
        source: '/ru/dijital-dis-hekimligi',
        destination: '/ru/digital-dentistry',
      },
      {
        source: '/ru/tsifrovaya-stomatologiya',
        destination: '/ru/digital-dentistry',
      },
      {
        source: '/ru/klinigimiz',
        destination: '/ru/our-clinic',
      },
      {
        source: '/ru/nasha-klinika',
        destination: '/ru/our-clinic',
      },
      {
        source: '/ru/oncesi-sonrasi',
        destination: '/ru/before-after',
      },
      {
        source: '/ru/do-i-posle',
        destination: '/ru/before-after',
      },
      {
        source: '/ru/iletisim',
        destination: '/ru/contact',
      },
      {
        source: '/ru/kontakty',
        destination: '/ru/contact',
      },
      {
        source: '/ru/blog',
        destination: '/ru/blog',
      },
      {
        source: '/ru/blog/bruksizm',
        destination: '/ru/blog/bruxism',
      },
      {
        source: '/ru/blog/implant/all-on-4',
        destination: '/ru/blog/implant/all-on-4',
      },
      {
        source: '/ru/blog/all-on-4-implant',
        destination: '/ru/blog/implant/all-on-4',
      },
      {
        source: '/ru/blog/implant/bone-graft',
        destination: '/ru/blog/implant/bone-graft',
      },
      {
        source: '/ru/blog/kostnyy-transplantat',
        destination: '/ru/blog/implant/bone-graft',
      },
      {
        source: '/ru/blog/kemik-grefti',
        destination: '/ru/blog/implant/bone-graft',
      },
      {
        source: '/ru/blog/implant/healing-process',
        destination: '/ru/blog/implant/healing-process',
      },
      {
        source: '/ru/blog/implant-iyilesmesi',
        destination: '/ru/blog/implant/healing-process',
      },
      {
        source: '/ru/blog/zazhivlenie-implantata',
        destination: '/ru/blog/implant/healing-process',
      },
      {
        source: '/ru/blog/implant/same-day-implant',
        destination: '/ru/blog/implant/same-day-implant',
      },
      {
        source: '/ru/blog/ayni-gun-implant',
        destination: '/ru/blog/implant/same-day-implant',
      },
      {
        source: '/ru/blog/implantatsiya-za-den',
        destination: '/ru/blog/implant/same-day-implant',
      },
      {
        source: '/ru/blog/implant/single-tooth',
        destination: '/ru/blog/implant/single-tooth',
      },
      {
        source: '/ru/tek-dis-implantı',
        destination: '/ru/blog/implant/single-tooth',
      },
      {
        source: '/ru/implantatsiya/odin-implant',
        destination: '/ru/blog/implant/single-tooth',
      },
      {
        source: '/ru/blog/single-tooth-implant',
        destination: '/ru/blog/implant/single-tooth',
      },
      {
        source: '/ru/blog/implant/temporary-options',
        destination: '/ru/blog/implant/temporary-options',
      },
      {
        source: '/ru/blog/gecici-disler',
        destination: '/ru/blog/implant/temporary-options',
      },
      {
        source: '/ru/blog/vremennye-zuby',
        destination: '/ru/blog/implant/temporary-options',
      },
      {
        source: '/ru/blog/implant/what-is-dental-implant',
        destination: '/ru/blog/implant/what-is-dental-implant',
      },
      {
        source: '/ru/blog/implant-nedir',
        destination: '/ru/blog/implant/what-is-dental-implant',
      },
      {
        source: '/ru/blog/chto-takoe-implantat',
        destination: '/ru/blog/implant/what-is-dental-implant',
      },
      {
        source: '/ru/blog/implant/life-time',
        destination: '/ru/blog/implant/life-time',
      },
      {
        source: '/ru/blog/dental-bridge',
        destination: '/ru/blog/dental-bridge',
      },
      {
        source: '/ru/blog/zubnye-mosty',
        destination: '/ru/blog/dental-bridge',
      },
      {
        source: '/ru/blog/kopru',
        destination: '/ru/blog/dental-bridge',
      },
      {
        source: '/ru/blog/dental-veneer-types',
        destination: '/ru/blog/dental-veneer-types',
      },
      {
        source: '/ru/blog/denture',
        destination: '/ru/blog/denture',
      },
      {
        source: '/ru/blog/gum-recession-and-sensitivity',
        destination: '/ru/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/ru/blog/dis-eti-cekilmesi',
        destination: '/ru/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/ru/blog/retcessiya-desny',
        destination: '/ru/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/ru/blog/halitosis',
        destination: '/ru/blog/halitosis',
      },
      {
        source: '/ru/blog/halitoz',
        destination: '/ru/blog/halitosis',
      },
      {
        source: '/ru/blog/galitoz',
        destination: '/ru/blog/halitosis',
      },
      {
        source: '/ru/blog/how-to-prevent-yellowing-of-teeth',
        destination: '/ru/blog/how-to-prevent-yellowing-of-teeth',
      },
      {
        source: '/ru/blog/impacted-teeth',
        destination: '/ru/blog/impacted-teeth',
      },
      {
        source: '/ru/blog/orthodontics',
        destination: '/ru/blog/orthodontics',
      },
      {
        source: '/ru/blog/spaced-teeth',
        destination: '/ru/blog/spaced-teeth',
      },
      {
        source: '/ru/blog/tooth-bleeding',
        destination: '/ru/blog/tooth-bleeding',
      },
      {
        source: '/ru/blog/what-are-orthodontic-treatments',
        destination: '/ru/blog/what-are-orthodontic-treatments',
      },
      {
        source: '/ru/dis-tedavileri/estetik-dis-hekimligi',
        destination: '/ru/dental-treatments/aesthetic-dentistry',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/esteticheskaya-stomatologiya',
        destination: '/ru/dental-treatments/aesthetic-dentistry',
      },
      {
        source: '/ru/dis-tedavileri/dis-beyazlatma',
        destination: '/ru/dental-treatments/dental-bleaching',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/otbelivanie-zubov',
        destination: '/ru/dental-treatments/dental-bleaching',
      },
      {
        source: '/ru/dis-tedavileri/telsiz-ortodonti-tedavisi',
        destination: '/ru/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/nevidimaya-ortodontiya',
        destination: '/ru/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/ru/dis-tedavileri/invisalign',
        destination: '/ru/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/invisalign',
        destination: '/ru/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/ru/dis-tedavileri/ortodonti-braket',
        destination: '/ru/dental-treatments/orthodontics',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/ortodontiya-brekey',
        destination: '/ru/dental-treatments/orthodontics',
      },
      {
        source: '/ru/dis-tedavileri/kanal-tedavisi',
        destination: '/ru/dental-treatments/endodontics',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/lechenie-kornevyh-kanalov',
        destination: '/ru/dental-treatments/endodontics',
      },
      {
        source: '/ru/dis-tedavileri/dis-eti-tedavisi',
        destination: '/ru/dental-treatments/periodontology',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/lechenie-desen',
        destination: '/ru/dental-treatments/periodontology',
      },
      {
        source: '/ru/dis-tedavileri/cocuk-dis-hekimligi',
        destination: '/ru/dental-treatments/pediatric-dentistry',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/detskaya-stomatologiya',
        destination: '/ru/dental-treatments/pediatric-dentistry',
      },
      {
        source: '/ru/dis-tedavileri/implant',
        destination: '/ru/dental-treatments/implants',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/implantatsiya',
        destination: '/ru/dental-treatments/implants',
      },
      {
        source: '/ru/dis-tedavileri/agiz-cerrahi',
        destination: '/ru/dental-treatments/oral-jaw-surgery',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/hirurgiya-rti',
        destination: '/ru/dental-treatments/oral-jaw-surgery',
      },
      {
        source: '/ru/dis-tedavileri/frenektomi',
        destination: '/ru/dental-treatments/frenectomy',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/frenektomiya',
        destination: '/ru/dental-treatments/frenectomy',
      },
      {
        source: '/ru/dis-tedavileri/all-on-4',
        destination: '/ru/dental-treatments/all-on-4',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/all-on-4',
        destination: '/ru/dental-treatments/all-on-4',
      },
      {
        source: '/ru/dis-tedavileri/dolgu',
        destination: '/ru/dental-treatments/filling',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/plomby',
        destination: '/ru/dental-treatments/filling',
      },
      {
        source: '/ru/dis-tedavileri/sabit-protez',
        destination: '/ru/dental-treatments/fixed-prosthetic-applications',
      },
      {
        source: '/ru/stomatologicheskie-uslugi/nesemnoye-protezirovanie',
        destination: '/ru/dental-treatments/fixed-prosthetic-applications',
      },

      // ========== İNGİLİZCE (en) İÇİN YÖNLENDİRMELER ==========
      {
        source: '/en/dis-tedavileri',
        destination: '/en/dental-treatments',
      },
      {
        source: '/en/stomatologicheskie-uslugi',
        destination: '/en/dental-treatments',
      },
      {
        source: '/en/dijital-dis-hekimligi',
        destination: '/en/digital-dentistry',
      },
      {
        source: '/en/tsifrovaya-stomatologiya',
        destination: '/en/digital-dentistry',
      },
      {
        source: '/en/klinigimiz',
        destination: '/en/our-clinic',
      },
      {
        source: '/en/nasha-klinika',
        destination: '/en/our-clinic',
      },
      {
        source: '/en/oncesi-sonrasi',
        destination: '/en/before-after',
      },
      {
        source: '/en/do-i-posle',
        destination: '/en/before-after',
      },
      {
        source: '/en/iletisim',
        destination: '/en/contact',
      },
      {
        source: '/en/kontakty',
        destination: '/en/contact',
      },
      {
        source: '/en/tek-dis-implantı',
        destination: '/en/blog/implant/single-tooth',
      },
      {
        source: '/en/implantatsiya/odin-implant',
        destination: '/en/blog/implant/single-tooth',
      },
      {
        source: '/en/dis-tedavileri/estetik-dis-hekimligi',
        destination: '/en/dental-treatments/aesthetic-dentistry',
      },
      {
        source: '/en/stomatologicheskie-uslugi/esteticheskaya-stomatologiya',
        destination: '/en/dental-treatments/aesthetic-dentistry',
      },
      {
        source: '/en/dis-tedavileri/dis-beyazlatma',
        destination: '/en/dental-treatments/dental-bleaching',
      },
      {
        source: '/en/stomatologicheskie-uslugi/otbelivanie-zubov',
        destination: '/en/dental-treatments/dental-bleaching',
      },
      {
        source: '/en/dis-tedavileri/telsiz-ortodonti-tedavisi',
        destination: '/en/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/en/stomatologicheskie-uslugi/nevidimaya-ortodontiya',
        destination: '/en/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/en/dis-tedavileri/invisalign',
        destination: '/en/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/en/stomatologicheskie-uslugi/invisalign',
        destination: '/en/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/en/dis-tedavileri/ortodonti-braket',
        destination: '/en/dental-treatments/orthodontics',
      },
      {
        source: '/en/stomatologicheskie-uslugi/ortodontiya-brekey',
        destination: '/en/dental-treatments/orthodontics',
      },
      {
        source: '/en/dis-tedavileri/kanal-tedavisi',
        destination: '/en/dental-treatments/endodontics',
      },
      {
        source: '/en/stomatologicheskie-uslugi/lechenie-kornevyh-kanalov',
        destination: '/en/dental-treatments/endodontics',
      },
      {
        source: '/en/dis-tedavileri/dis-eti-tedavisi',
        destination: '/en/dental-treatments/periodontology',
      },
      {
        source: '/en/stomatologicheskie-uslugi/lechenie-desen',
        destination: '/en/dental-treatments/periodontology',
      },
      {
        source: '/en/dis-tedavileri/cocuk-dis-hekimligi',
        destination: '/en/dental-treatments/pediatric-dentistry',
      },
      {
        source: '/en/stomatologicheskie-uslugi/detskaya-stomatologiya',
        destination: '/en/dental-treatments/pediatric-dentistry',
      },
      {
        source: '/en/dis-tedavileri/implant',
        destination: '/en/dental-treatments/implants',
      },
      {
        source: '/en/stomatologicheskie-uslugi/implantatsiya',
        destination: '/en/dental-treatments/implants',
      },
      {
        source: '/en/dis-tedavileri/agiz-cerrahi',
        destination: '/en/dental-treatments/oral-jaw-surgery',
      },
      {
        source: '/en/stomatologicheskie-uslugi/hirurgiya-rti',
        destination: '/en/dental-treatments/oral-jaw-surgery',
      },
      {
        source: '/en/dis-tedavileri/frenektomi',
        destination: '/en/dental-treatments/frenectomy',
      },
      {
        source: '/en/stomatologicheskie-uslugi/frenektomiya',
        destination: '/en/dental-treatments/frenectomy',
      },
      {
        source: '/en/dis-tedavileri/all-on-4',
        destination: '/en/dental-treatments/all-on-4',
      },
      {
        source: '/en/stomatologicheskie-uslugi/all-on-4',
        destination: '/en/dental-treatments/all-on-4',
      },
      {
        source: '/en/dis-tedavileri/dolgu',
        destination: '/en/dental-treatments/filling',
      },
      {
        source: '/en/stomatologicheskie-uslugi/plomby',
        destination: '/en/dental-treatments/filling',
      },
      {
        source: '/en/dis-tedavileri/sabit-protez',
        destination: '/en/dental-treatments/fixed-prosthetic-applications',
      },
      {
        source: '/en/stomatologicheskie-uslugi/nesemnoye-protezirovanie',
        destination: '/en/dental-treatments/fixed-prosthetic-applications',
      },
      {
        source: '/en/blog/bruksizm',
        destination: '/en/blog/bruxism',
      },
      {
        source: '/en/blog/gecici-disler',
        destination: '/en/blog/implant/temporary-options',
      },
      {
        source: '/en/blog/vremennye-zuby',
        destination: '/en/blog/implant/temporary-options',
      },
      {
        source: '/en/blog/kemik-grefti',
        destination: '/en/blog/implant/bone-graft',
      },
      {
        source: '/en/blog/kostnyy-transplantat',
        destination: '/en/blog/implant/bone-graft',
      },
      {
        source: '/en/blog/dis-eti-cekilmesi',
        destination: '/en/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/en/blog/retcessiya-desny',
        destination: '/en/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/en/blog/kopru',
        destination: '/en/blog/dental-bridge',
      },
      {
        source: '/en/blog/zubnye-mosty',
        destination: '/en/blog/dental-bridge',
      },
      {
        source: '/en/blog/implant-nedir',
        destination: '/en/blog/implant/what-is-dental-implant',
      },
      {
        source: '/en/blog/chto-takoe-implantat',
        destination: '/en/blog/implant/what-is-dental-implant',
      },
      {
        source: '/en/blog/ayni-gun-implant',
        destination: '/en/blog/implant/same-day-implant',
      },
      {
        source: '/en/blog/implantatsiya-za-den',
        destination: '/en/blog/implant/same-day-implant',
      },
      {
        source: '/en/blog/implant-iyilesmesi',
        destination: '/en/blog/implant/healing-process',
      },
      {
        source: '/en/blog/zazhivlenie-implantata',
        destination: '/en/blog/implant/healing-process',
      },
      {
        source: '/en/blog/halitoz',
        destination: '/en/blog/halitosis',
      },

      // ========== LİTVANYACA (lt) İÇİN YÖNLENDİRMELER ==========
      // Üst seviye sayfalar
      {
        source: '/lt/dantų-gydymas',
        destination: '/lt/dental-treatments',
      },
      {
        source: '/lt/skaitmeninė-odontologija',
        destination: '/lt/digital-dentistry',
      },
      {
        source: '/lt/mūsų-klinika',
        destination: '/lt/our-clinic',
      },
      {
        source: '/lt/apie-mus',
        destination: '/lt/about-us',
      },
      {
        source: '/lt/prieš-po',
        destination: '/lt/before-after',
      },
      {
        source: '/lt/kontaktai',
        destination: '/lt/contact',
      },
      {
        source: '/lt/tinklaraštis',
        destination: '/lt/blog',
      },

      // Dental treatments alt sayfalar
      {
        source: '/lt/dantų-gydymas/estetinė-odontologija',
        destination: '/lt/dental-treatments/aesthetic-dentistry',
      },
      {
        source: '/lt/dantų-gydymas/dantų-balinimas',
        destination: '/lt/dental-treatments/dental-bleaching',
      },
      {
        source: '/lt/dantų-gydymas/invisalign-ortodontija',
        destination: '/lt/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/lt/dantų-gydymas/ortodontija-breketai',
        destination: '/lt/dental-treatments/orthodontics',
      },
      {
        source: '/lt/dantų-gydymas/endodontija',
        destination: '/lt/dental-treatments/endodontics',
      },
      {
        source: '/lt/dantų-gydymas/periodontologija',
        destination: '/lt/dental-treatments/periodontology',
      },
      {
        source: '/lt/dantų-gydymas/vaikų-odontologija',
        destination: '/lt/dental-treatments/pediatric-dentistry',
      },
      {
        source: '/lt/dantų-gydymas/implantai',
        destination: '/lt/dental-treatments/implants',
      },
      {
        source: '/lt/dantų-gydymas/burnos-žandikaulių-chirurgija',
        destination: '/lt/dental-treatments/oral-jaw-surgery',
      },
      {
        source: '/lt/dantų-gydymas/frenektomija',
        destination: '/lt/dental-treatments/frenectomy',
      },
      {
        source: '/lt/dantų-gydymas/all-on-4',
        destination: '/lt/dental-treatments/all-on-4',
      },
      {
        source: '/lt/dantų-gydymas/plombavimas',
        destination: '/lt/dental-treatments/filling',
      },
      {
        source: '/lt/dantų-gydymas/fiksuotos-protezavimo-procedūros',
        destination: '/lt/dental-treatments/fixed-prosthetic-applications',
      },

      // Single tooth implant
      {
        source: '/lt/implantas/vieno-danties-implantas',
        destination: '/lt/blog/implant/single-tooth',
      },

      // Blog yazıları (BlogItems)
      {
        source: '/lt/tinklaraštis/bruksizmas',
        destination: '/lt/blog/bruxism',
      },
      {
        source: '/lt/tinklaraštis/implantas/all-on-4',
        destination: '/lt/blog/implant/all-on-4',
      },
      {
        source: '/lt/tinklaraštis/implantas/laikinos-galybes',
        destination: '/lt/blog/implant/temporary-options',
      },
      {
        source: '/lt/tinklaraštis/implantas/kaulo-transplantatas',
        destination: '/lt/blog/implant/bone-graft',
      },
      {
        source: '/lt/tinklaraštis/dantenų-atsitraukimas-ir-jautrumas',
        destination: '/lt/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/lt/tinklaraštis/dantų-tiltelis',
        destination: '/lt/blog/dental-bridge',
      },
      {
        source: '/lt/tinklaraštis/kas-yra-dantu-implantas',
        destination: '/lt/blog/implant/what-is-dental-implant',
      },
      {
        source: '/lt/tinklaraštis/tos-pacios-dienos-dantu-implantas',
        destination: '/lt/blog/implant/same-day-implant',
      },
      {
        source: '/lt/tinklaraštis/implanto-gijimo-procesas',
        destination: '/lt/blog/implant/healing-process',
      },
      {
        source: '/lt/tinklaraštis/halitozė',
        destination: '/lt/blog/halitosis',
      },

      // Blog papildomi straipsniai
      {
        source: '/lt/tinklaraštis/dantų-pageltimas',
        destination: '/lt/blog/how-to-prevent-yellowing-of-teeth',
      },
      {
        source: '/lt/tinklaraštis/dantenų-kraujavimas',
        destination: '/lt/blog/tooth-bleeding',
      },
      {
        source: '/lt/tinklaraštis/tarpelių-tarp-dantų-gydymas',
        destination: '/lt/blog/spaced-teeth',
      },
      {
        source: '/lt/tinklaraštis/uzdarame-kaule-esancio-danties-salinimas',
        destination: '/lt/blog/impacted-teeth',
      },
      {
        source: '/lt/tinklaraštis/dantų-karuneliu-tipai',
        destination: '/lt/blog/dental-veneer-types',
      },
      {
        source: '/lt/tinklaraštis/ortodontiniai-gydymai',
        destination: '/lt/blog/what-are-orthodontic-treatments',
      },
      {
        source: '/lt/tinklaraštis/ortodontija',
        destination: '/lt/blog/orthodontics',
      },
      {
        source: '/lt/tinklaraštis/dantų-implantai',
        destination: '/lt/blog/implant/what-is-dental-implant',
      },
      {
        source: '/lt/tinklaraštis/klausimai-pries-dantu-implantus',
        destination: '/lt/blog/questions-before-dental-implants',
      },
      {
        source: '/lt/tinklaraštis/protezai',
        destination: '/lt/blog/denture',
      },
      {
        source: '/lt/tinklaraštis/protezai-privalumai-trūkumai',
        destination: '/lt/blog/denture-pros-cons',
      },

      // ========== POLONCA (pl) İÇİN YÖNLENDİRMELER ==========
      // Üst seviye sayfalar
      {
        source: '/pl/leczenie-zębów',
        destination: '/pl/dental-treatments',
      },
      {
        source: '/pl/stomatologia-cyfrowa',
        destination: '/pl/digital-dentistry',
      },
      {
        source: '/pl/nasza-klinika',
        destination: '/pl/our-clinic',
      },
      {
        source: '/pl/o-nas',
        destination: '/pl/about-us',
      },
      {
        source: '/pl/przed-po',
        destination: '/pl/before-after',
      },
      {
        source: '/pl/kontakt',
        destination: '/pl/contact',
      },
      {
        source: '/pl/blog',
        destination: '/pl/blog',
      },

      // Dental treatments alt sayfalar
      {
        source: '/pl/leczenie-zębów/stomatologia-estetyczna',
        destination: '/pl/dental-treatments/aesthetic-dentistry',
      },
      {
        source: '/pl/leczenie-zębów/wybielanie-zębów',
        destination: '/pl/dental-treatments/dental-bleaching',
      },
      {
        source: '/pl/leczenie-zębów/invisalign-ortodoncja',
        destination: '/pl/dental-treatments/invisalign-orthodontics',
      },
      {
        source: '/pl/leczenie-zębów/ortodoncja-aparaty',
        destination: '/pl/dental-treatments/orthodontics',
      },
      {
        source: '/pl/leczenie-zębów/endodoncja',
        destination: '/pl/dental-treatments/endodontics',
      },
      {
        source: '/pl/leczenie-zębów/periodontologia',
        destination: '/pl/dental-treatments/periodontology',
      },
      {
        source: '/pl/leczenie-zębów/stomatologia-dziecięca',
        destination: '/pl/dental-treatments/pediatric-dentistry',
      },
      {
        source: '/pl/leczenie-zębów/implanty',
        destination: '/pl/dental-treatments/implants',
      },
      {
        source: '/pl/leczenie-zębów/chirurgia-jamy-ustnej-szczęki',
        destination: '/pl/dental-treatments/oral-jaw-surgery',
      },
      {
        source: '/pl/leczenie-zębów/frenektomia',
        destination: '/pl/dental-treatments/frenectomy',
      },
      {
        source: '/pl/leczenie-zębów/all-on-4',
        destination: '/pl/dental-treatments/all-on-4',
      },
      {
        source: '/pl/leczenie-zębów/wypełnienia',
        destination: '/pl/dental-treatments/filling',
      },
      {
        source: '/pl/leczenie-zębów/stale-uzupełnienia-protetyczne',
        destination: '/pl/dental-treatments/fixed-prosthetic-applications',
      },

      // Single tooth implant
      {
        source: '/pl/implant/implant-pojedynczego-zeba',
        destination: '/pl/blog/implant/single-tooth',
      },

      // Blog yazıları (BlogItems)
      {
        source: '/pl/blog/bruksizm',
        destination: '/pl/blog/bruxism',
      },
      {
        source: '/pl/blog/implant/all-on-4',
        destination: '/pl/blog/implant/all-on-4',
      },
      {
        source: '/pl/blog/implant/tymczasowe-opcje',
        destination: '/pl/blog/implant/temporary-options',
      },
      {
        source: '/pl/blog/implant/przeszczep-kosci',
        destination: '/pl/blog/implant/bone-graft',
      },
      {
        source: '/pl/blog/recesja-dziąseł-i-nadwrażliwość',
        destination: '/pl/blog/gum-recession-and-sensitivity',
      },
      {
        source: '/pl/blog/most-dentystyczny',
        destination: '/pl/blog/dental-bridge',
      },
      {
        source: '/pl/blog/co-to-jest-implant-dentystyczny',
        destination: '/pl/blog/implant/what-is-dental-implant',
      },
      {
        source: '/pl/blog/implant-tego-samego-dnia',
        destination: '/pl/blog/implant/same-day-implant',
      },
      {
        source: '/pl/blog/proces-gojenia-implantu',
        destination: '/pl/blog/implant/healing-process',
      },
      {
        source: '/pl/blog/halitoza',
        destination: '/pl/blog/halitosis',
      },

      // Blog papildomi straipsniai
      {
        source: '/pl/blog/zolkniecie-zebow',
        destination: '/pl/blog/how-to-prevent-yellowing-of-teeth',
      },
      {
        source: '/pl/blog/krwawienie-dziąseł',
        destination: '/pl/blog/tooth-bleeding',
      },
      {
        source: '/pl/blog/leczenie-przerw-miedzy-zebami',
        destination: '/pl/blog/spaced-teeth',
      },
      {
        source: '/pl/blog/ekstrakcja-zeba-zatrzymanego',
        destination: '/pl/blog/impacted-teeth',
      },
      {
        source: '/pl/blog/rodzaje-koron-zebowych',
        destination: '/pl/blog/dental-veneer-types',
      },
      {
        source: '/pl/blog/leczenie-ortodontyczne',
        destination: '/pl/blog/what-are-orthodontic-treatments',
      },
      {
        source: '/pl/blog/ortodoncja',
        destination: '/pl/blog/orthodontics',
      },
      {
        source: '/pl/blog/implanty-dentystyczne',
        destination: '/pl/blog/implant/what-is-dental-implant',
      },
      {
        source: '/pl/blog/pytania-przed-implantami',
        destination: '/pl/blog/questions-before-dental-implants',
      },
      {
        source: '/pl/blog/protezy',
        destination: '/pl/blog/denture',
      },
      {
        source: '/pl/blog/protezy-zalety-wady',
        destination: '/pl/blog/denture-pros-cons',
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);