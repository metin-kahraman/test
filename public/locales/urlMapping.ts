// lib/urlMappings.ts

export type Locale = 'tr' | 'en' | 'ru' | 'pl' | 'lt';

/**
 * Canonical EN slug → her dildeki dile özel slug
 * 
 * Not: 'en' değeri her zaman dosya sistemi yoludur (rewrites destination).
 * Diğer dillerde o dilin doğal slug'ı kullanılır.
 */
export const urlMappings: Record<string, Record<Locale, string>> = {
  // ============================================================
  // ANA SAYFALAR
  // ============================================================
  'dental-treatments': {
    tr: 'dis-tedavileri',
    en: 'dental-treatments',
    ru: 'stomatologicheskie-uslugi',
    pl: 'leczenie-zebow',
    lt: 'dantu-gydymas',
  },
  'digital-dentistry': {
    tr: 'dijital-dis-hekimligi',
    en: 'digital-dentistry',
    ru: 'tsifrovaya-stomatologiya',
    pl: 'stomatologia-cyfrowa',
    lt: 'skaitmeninė-odontologija',
  },
  'our-clinic': {
    tr: 'klinigimiz',
    en: 'our-clinic',
    ru: 'nasha-klinika',
    pl: 'nasza-klinika',
    lt: 'mūsų-klinika',
  },
  'about-us': {
    tr: 'hakkimizda',
    en: 'about-us',
    ru: 'o-nas',
    pl: 'o-nas',
    lt: 'apie-mus',
  },
  'before-after': {
    tr: 'oncesi-sonrasi',
    en: 'before-after',
    ru: 'do-i-posle',
    pl: 'przed-po',
    lt: 'prieš-po',
  },
  'contact': {
    tr: 'iletisim',
    en: 'contact',
    ru: 'kontakty',
    pl: 'kontakt',
    lt: 'kontaktai',
  },
  'blog': {
    tr: 'blog',
    en: 'blog',
    ru: 'blog',
    pl: 'blog',
    lt: 'tinklaraštis',
  },
  'our-doctors': {
    tr: 'hekimlerimiz',
    en: 'our-doctors',
    ru: 'nashi-vrachi',
    pl: 'nasi-lekarze',
    lt: 'musu-gydytojai',
  },

  // ============================================================
  // TEDAVİLER (Alt sayfalar)
  // ============================================================
  'dental-treatments/aesthetic-dentistry': {
    tr: 'dis-tedavileri/estetik-dis-hekimligi',
    en: 'dental-treatments/aesthetic-dentistry',
    ru: 'stomatologicheskie-uslugi/esteticheskaya-stomatologiya',
    pl: 'leczenie-zebow/stomatologia-estetyczna',
    lt: 'dantu-gydymas/estetine-odontologija',
  },
  'dental-treatments/dental-bleaching': {
    tr: 'dis-tedavileri/dis-beyazlatma',
    en: 'dental-treatments/dental-bleaching',
    ru: 'stomatologicheskie-uslugi/otbelivanie-zubov',
    pl: 'leczenie-zebow/wybielanie-zebow',
    lt: 'dantu-gydymas/dantu-balinimas',
  },
  'dental-treatments/invisalign-orthodontics': {
    tr: 'dis-tedavileri/telsiz-ortodonti-tedavisi',
    en: 'dental-treatments/invisalign-orthodontics',
    ru: 'stomatologicheskie-uslugi/nevidimaya-ortodontiya',
    pl: 'leczenie-zebow/invisalign-ortodoncja',
    lt: 'dantu-gydymas/invisalign-ortodontija',
  },
  'dental-treatments/orthodontics': {
    tr: 'dis-tedavileri/dis-teli-tedavisi',
    en: 'dental-treatments/orthodontics',
    ru: 'stomatologicheskie-uslugi/ortodontiya-brekey',
    pl: 'leczenie-zebow/ortodoncja-aparaty',
    lt: 'dantu-gydymas/ortodontija-breketai',
  },
  'dental-treatments/endodontics': {
    tr: 'dis-tedavileri/kanal-tedavisi',
    en: 'dental-treatments/endodontics',
    ru: 'stomatologicheskie-uslugi/lechenie-kornevyh-kanalov',
    pl: 'leczenie-zebow/endodoncja',
    lt: 'dantu-gydymas/endodontija',
  },
  'dental-treatments/periodontology': {
    tr: 'dis-tedavileri/dis-eti-tedavisi',
    en: 'dental-treatments/periodontology',
    ru: 'stomatologicheskie-uslugi/lechenie-desen',
    pl: 'leczenie-zebow/periodontologia',
    lt: 'dantu-gydymas/periodontologija',
  },
  'dental-treatments/pediatric-dentistry': {
    tr: 'dis-tedavileri/cocuk-dis-hekimligi',
    en: 'dental-treatments/pediatric-dentistry',
    ru: 'stomatologicheskie-uslugi/detskaya-stomatologiya',
    pl: 'leczenie-zebow/stomatologia-dziecieca',
    lt: 'dantu-gydymas/vaiku-odontologija',
  },
  'dental-treatments/implants': {
    tr: 'dis-tedavileri/implant',
    en: 'dental-treatments/implants',
    ru: 'stomatologicheskie-uslugi/implantatsiya',
    pl: 'leczenie-zebow/implanty',
    lt: 'dantu-gydymas/implantai',
  },
  'dental-treatments/oral-jaw-surgery': {
    tr: 'dis-tedavileri/agiz-cerrahi',
    en: 'dental-treatments/oral-jaw-surgery',
    ru: 'stomatologicheskie-uslugi/hirurgiya-rti',
    pl: 'leczenie-zebow/chirurgia-jamy-ustnej-szczeki',
    lt: 'dantu-gydymas/burnos-zandikauliu-chirurgija',
  },
  'dental-treatments/frenectomy': {
    tr: 'dis-tedavileri/frenektomi',
    en: 'dental-treatments/frenectomy',
    ru: 'stomatologicheskie-uslugi/frenektomiya',
    pl: 'leczenie-zebow/frenektomia',
    lt: 'dantu-gydymas/frenektomija',
  },
  'dental-treatments/all-on-4': {
    tr: 'dis-tedavileri/all-on-4',
    en: 'dental-treatments/all-on-4',
    ru: 'stomatologicheskie-uslugi/all-on-4',
    pl: 'leczenie-zebow/all-on-4',
    lt: 'dantu-gydymas/all-on-4',
  },
  'dental-treatments/filling': {
    tr: 'dis-tedavileri/dis-dolgusu',
    en: 'dental-treatments/filling',
    ru: 'stomatologicheskie-uslugi/plomby',
    pl: 'leczenie-zebow/wypelnienia',
    lt: 'dantu-gydymas/plombavimas',
  },
  'dental-treatments/fixed-prosthetic-applications': {
    tr: 'dis-tedavileri/sabit-protez',
    en: 'dental-treatments/fixed-prosthetic-applications',
    ru: 'stomatologicheskie-uslugi/nesemnoye-protezirovanie',
    pl: 'leczenie-zebow/stale-uzupelnienia-protetyczne',
    lt: 'dantu-gydymas/fiksuotos-protezavimo-proceduros',
  },

  // ============================================================
  // BLOG YAZILARI
  // ============================================================
  'blog/bruxism': {
    tr: 'blog/bruksizm',
    en: 'blog/bruxism',
    ru: 'blog/bruksizm',
    pl: 'blog/bruksizm',
    lt: 'blog/bruksizmas',
  },
  'blog/implant/all-on-4': {
    tr: 'blog/implant/all-on-4-implant',
    en: 'blog/implant/all-on-4',
    ru: 'blog/implant/all-on-4-implant',
    pl: 'blog/implant/all-on-4',
    lt: 'blog/implantas/all-on-4',
  },
  'blog/implant/temporary-options': {
    tr: 'blog/implant/gecici-dis-secenekleri',
    en: 'blog/implant/temporary-options',
    ru: 'blog/implant/vremennye-zuby',
    pl: 'blog/implant/tymczasowe-opcje',
    lt: 'blog/implantas/laikinos-galybes',
  },
  'blog/implant/bone-graft': {
    tr: 'blog/implant/kemik-grefti',
    en: 'blog/implant/bone-graft',
    ru: 'blog/implant/kostnyy-transplantat',
    pl: 'blog/implant/przeszczep-kosci',
    lt: 'blog/implantas/kaulo-transplantatas',
  },
  'blog/gum-recession-and-sensitivity': {
    tr: 'blog/dis-eti-cekilmesi-ve-hassasiyet',
    en: 'blog/gum-recession-and-sensitivity',
    ru: 'blog/retsessiya-desny-i-chuvstvitelnost',
    pl: 'blog/recesja-dziasel-i-nadwrazliwosc',
    lt: 'blog/dantenu-atsitraukimas-ir-jautrumas',
  },
  'blog/dental-bridge': {
    tr: 'blog/dis-koprusu',
    en: 'blog/dental-bridge',
    ru: 'blog/zubnye-mosty',
    pl: 'blog/most-dentystyczny',
    lt: 'blog/dantu-tiltelis',
  },
  'blog/implant/what-is-dental-implant': {
    tr: 'blog/implant/dis-implant-nedir',
    en: 'blog/implant/what-is-dental-implant',
    ru: 'blog/implant/chto-takoe-dentalnyy-implant',
    pl: 'blog/implant/co-to-jest-implant-dentystyczny',
    lt: 'blog/implantas/kas-yra-dantu-implantas',
  },
  'blog/implant/same-day-implant': {
    tr: 'blog/implant/ayni-gun-implant',
    en: 'blog/implant/same-day-implant',
    ru: 'blog/implant/implantatsiya-za-odin-den',
    pl: 'blog/implant/implant-tego-samego-dnia',
    lt: 'blog/implantas/tos-pacios-dienos-dantu-implantas',
  },
  'blog/implant/implant-healing-process': {
    tr: 'blog/implant/implant-iyilesme-sureci',
    en: 'blog/implant/implant-healing-process',
    ru: 'blog/implant/protsess-priživleniya-implantata',
    pl: 'blog/implant/proces-gojenia-implantu',
    lt: 'blog/implantas/implanto-gijimo-procesas',
  },
  'blog/halitosis': {
    tr: 'blog/agiz-kokusu',
    en: 'blog/halitosis',
    ru: 'blog/galitoz',
    pl: 'blog/halitoza',
    lt: 'blog/halitozė',
  },
  'blog/implant/life-time': {
    tr: 'blog/implant/implant-omru',
    en: 'blog/implant/life-time',
    ru: 'blog/implant/srok-sluzhby-implantov',
    pl: 'blog/implant/zywotnosc-implantow',
    lt: 'blog/implantas/implanto-tarnavimo-laikas',
  },
  'blog/implant/single-tooth': {
    tr: 'blog/implant/tek-dis-implant',
    en: 'blog/implant/single-tooth',
    ru: 'blog/implant/implantatsiya-odnogo-zuba',
    pl: 'blog/implant/pojedynczy-implant-zebowy',
    lt: 'blog/implantas/vieno-danties-implantas',
  },
  'blog/dental-veneer-types': {
    tr: 'blog/dis-kaplama-cesitleri',
    en: 'blog/dental-veneer-types',
    ru: 'blog/vidy-koronok',
    pl: 'blog/rodzaje-koron-zebowych',
    lt: 'blog/dantu-karuneliu-tipai',
  },
  'blog/orthodontics': {
    tr: 'blog/ortodonti',
    en: 'blog/orthodontics',
    ru: 'blog/ortodontiya',
    pl: 'blog/ortodoncja',
    lt: 'blog/ortodontija',
  },
  'blog/what-are-orthodontic-treatments': {
    tr: 'blog/ortodontik-tedaviler-nelerdir',
    en: 'blog/what-are-orthodontic-treatments',
    ru: 'blog/ortodonticheskie-lecheniya',
    pl: 'blog/leczenie-ortodontyczne',
    lt: 'blog/ortodontiniai-gydymai',
  },
  'blog/spaced-teeth': {
    tr: 'blog/ayrik-dis-tedavisi',
    en: 'blog/spaced-teeth',
    ru: 'blog/lechenie-promezhutkov',
    pl: 'blog/leczenie-przerw',
    lt: 'blog/tarpai-tarp-dantu',
  },
  'blog/gum-bleeding': {
    tr: 'blog/dis-eti-kanamasi',
    en: 'blog/gum-bleeding',
    ru: 'blog/krovotochivost-desen',
    pl: 'blog/krwawienie-dziasel',
    lt: 'blog/dantenu-kraujavimas',
  },
  'blog/how-to-prevent-yellowing-of-teeth': {
    tr: 'blog/dis-sararmasini-onleme',
    en: 'blog/how-to-prevent-yellowing-of-teeth',
    ru: 'blog/kak-predotvratit-pozheltenie-zubov',
    pl: 'blog/jak-zapobiegac-zolknieciu-zebow',
    lt: 'blog/kaip-isvengti-dantu-pageltimo',
  },
  'blog/denture': {
    tr: 'blog/dis-protezi',
    en: 'blog/denture',
    ru: 'blog/zubnye-protezy',
    pl: 'blog/protezy',
    lt: 'blog/protezai',
  },
};

export default urlMappings;