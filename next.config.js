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

      // ========== RUSÇA (ru) İÇİN YÖNLENDİRMELER (MEVCUT) ==========
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
    ];
  },
};

module.exports = withNextIntl(nextConfig);