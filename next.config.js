const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async rewrites() {
    return [
      // ================================================================
      // 1. ANA SAYFALAR (ÜST SEVİYE)
      // ================================================================

      // ---- /dental-treatments (Tüm diller) ----
      { source: '/tr/dis-tedavileri', destination: '/tr/dental-treatments' },
      { source: '/tr/stomatologicheskie-uslugi', destination: '/tr/dental-treatments' },
      { source: '/ru/dis-tedavileri', destination: '/ru/dental-treatments' },
      { source: '/ru/stomatologicheskie-uslugi', destination: '/ru/dental-treatments' },
      { source: '/en/dis-tedavileri', destination: '/en/dental-treatments' },
      { source: '/en/stomatologicheskie-uslugi', destination: '/en/dental-treatments' },
      { source: '/lt/dantų-gydymas', destination: '/lt/dental-treatments' },
      { source: '/pl/leczenie-zębów', destination: '/pl/dental-treatments' },

      // ---- /digital-dentistry ----
      { source: '/tr/dijital-dis-hekimligi', destination: '/tr/digital-dentistry' },
      { source: '/tr/tsifrovaya-stomatologiya', destination: '/tr/digital-dentistry' },
      { source: '/ru/dijital-dis-hekimligi', destination: '/ru/digital-dentistry' },
      { source: '/ru/tsifrovaya-stomatologiya', destination: '/ru/digital-dentistry' },
      { source: '/en/dijital-dis-hekimligi', destination: '/en/digital-dentistry' },
      { source: '/en/tsifrovaya-stomatologiya', destination: '/en/digital-dentistry' },
      { source: '/lt/skaitmeninė-odontologija', destination: '/lt/digital-dentistry' },
      { source: '/pl/stomatologia-cyfrowa', destination: '/pl/digital-dentistry' },

      // ---- /our-clinic ----
      { source: '/tr/klinigimiz', destination: '/tr/our-clinic' },
      { source: '/tr/nasha-klinika', destination: '/tr/our-clinic' },
      { source: '/ru/klinigimiz', destination: '/ru/our-clinic' },
      { source: '/ru/nasha-klinika', destination: '/ru/our-clinic' },
      { source: '/en/klinigimiz', destination: '/en/our-clinic' },
      { source: '/en/nasha-klinika', destination: '/en/our-clinic' },
      { source: '/lt/mūsų-klinika', destination: '/lt/our-clinic' },
      { source: '/pl/nasza-klinika', destination: '/pl/our-clinic' },

      // ---- /before-after ----
      { source: '/tr/oncesi-sonrasi', destination: '/tr/before-after' },
      { source: '/tr/do-i-posle', destination: '/tr/before-after' },
      { source: '/ru/oncesi-sonrasi', destination: '/ru/before-after' },
      { source: '/ru/do-i-posle', destination: '/ru/before-after' },
      { source: '/en/oncesi-sonrasi', destination: '/en/before-after' },
      { source: '/en/do-i-posle', destination: '/en/before-after' },
      { source: '/lt/prieš-po', destination: '/lt/before-after' },
      { source: '/pl/przed-po', destination: '/pl/before-after' },

      // ---- /contact ----
      { source: '/tr/iletisim', destination: '/tr/contact' },
      { source: '/tr/kontakty', destination: '/tr/contact' },
      { source: '/ru/iletisim', destination: '/ru/contact' },
      { source: '/ru/kontakty', destination: '/ru/contact' },
      { source: '/en/iletisim', destination: '/en/contact' },
      { source: '/en/kontakty', destination: '/en/contact' },
      { source: '/lt/kontaktai', destination: '/lt/contact' },
      { source: '/pl/kontakt', destination: '/pl/contact' },

      // ---- /blog (ana sayfa) ----
      { source: '/tr/blog', destination: '/tr/blog' },
      { source: '/ru/blog', destination: '/ru/blog' },
      { source: '/en/blog', destination: '/en/blog' },
      { source: '/lt/tinklaraštis', destination: '/lt/blog' },
      { source: '/pl/blog', destination: '/pl/blog' },

      // ================================================================
      // 2. DENTAL TREATMENTS ALT SAYFALARI (destination bazlı gruplanmış)
      // ================================================================

      // ---- /dental-treatments/aesthetic-dentistry ----
      { source: '/tr/dis-tedavileri/estetik-dis-hekimligi', destination: '/tr/dental-treatments/aesthetic-dentistry' },
      { source: '/tr/stomatologicheskie-uslugi/esteticheskaya-stomatologiya', destination: '/tr/dental-treatments/aesthetic-dentistry' },
      { source: '/ru/dis-tedavileri/estetik-dis-hekimligi', destination: '/ru/dental-treatments/aesthetic-dentistry' },
      { source: '/ru/stomatologicheskie-uslugi/esteticheskaya-stomatologiya', destination: '/ru/dental-treatments/aesthetic-dentistry' },
      { source: '/en/dis-tedavileri/estetik-dis-hekimligi', destination: '/en/dental-treatments/aesthetic-dentistry' },
      { source: '/en/stomatologicheskie-uslugi/esteticheskaya-stomatologiya', destination: '/en/dental-treatments/aesthetic-dentistry' },
      { source: '/lt/dantų-gydymas/estetinė-odontologija', destination: '/lt/dental-treatments/aesthetic-dentistry' },
      { source: '/pl/leczenie-zębów/stomatologia-estetyczna', destination: '/pl/dental-treatments/aesthetic-dentistry' },

      // ---- /dental-treatments/dental-bleaching ----
      { source: '/tr/dis-tedavileri/dis-beyazlatma', destination: '/tr/dental-treatments/dental-bleaching' },
      { source: '/tr/stomatologicheskie-uslugi/otbelivanie-zubov', destination: '/tr/dental-treatments/dental-bleaching' },
      { source: '/ru/dis-tedavileri/dis-beyazlatma', destination: '/ru/dental-treatments/dental-bleaching' },
      { source: '/ru/stomatologicheskie-uslugi/otbelivanie-zubov', destination: '/ru/dental-treatments/dental-bleaching' },
      { source: '/en/dis-tedavileri/dis-beyazlatma', destination: '/en/dental-treatments/dental-bleaching' },
      { source: '/en/stomatologicheskie-uslugi/otbelivanie-zubov', destination: '/en/dental-treatments/dental-bleaching' },
      { source: '/lt/dantų-gydymas/dantų-balinimas', destination: '/lt/dental-treatments/dental-bleaching' },
      { source: '/pl/leczenie-zębów/wybielanie-zębów', destination: '/pl/dental-treatments/dental-bleaching' },

      // ---- /dental-treatments/invisalign-orthodontics ----
      { source: '/tr/dis-tedavileri/telsiz-ortodonti-tedavisi', destination: '/tr/dental-treatments/invisalign-orthodontics' },
      { source: '/tr/stomatologicheskie-uslugi/nevidimaya-ortodontiya', destination: '/tr/dental-treatments/invisalign-orthodontics' },
      { source: '/tr/dis-tedavileri/invisalign', destination: '/tr/dental-treatments/invisalign-orthodontics' },
      { source: '/tr/stomatologicheskie-uslugi/invisalign', destination: '/tr/dental-treatments/invisalign-orthodontics' },
      { source: '/ru/dis-tedavileri/telsiz-ortodonti-tedavisi', destination: '/ru/dental-treatments/invisalign-orthodontics' },
      { source: '/ru/stomatologicheskie-uslugi/nevidimaya-ortodontiya', destination: '/ru/dental-treatments/invisalign-orthodontics' },
      { source: '/ru/dis-tedavileri/invisalign', destination: '/ru/dental-treatments/invisalign-orthodontics' },
      { source: '/ru/stomatologicheskie-uslugi/invisalign', destination: '/ru/dental-treatments/invisalign-orthodontics' },
      { source: '/en/dis-tedavileri/telsiz-ortodonti-tedavisi', destination: '/en/dental-treatments/invisalign-orthodontics' },
      { source: '/en/stomatologicheskie-uslugi/nevidimaya-ortodontiya', destination: '/en/dental-treatments/invisalign-orthodontics' },
      { source: '/en/dis-tedavileri/invisalign', destination: '/en/dental-treatments/invisalign-orthodontics' },
      { source: '/en/stomatologicheskie-uslugi/invisalign', destination: '/en/dental-treatments/invisalign-orthodontics' },
      { source: '/lt/dantų-gydymas/invisalign-ortodontija', destination: '/lt/dental-treatments/invisalign-orthodontics' },
      { source: '/pl/leczenie-zębów/invisalign-ortodoncja', destination: '/pl/dental-treatments/invisalign-orthodontics' },

      // ---- /dental-treatments/orthodontics ----
      { source: '/tr/dis-tedavileri/ortodonti-braket', destination: '/tr/dental-treatments/orthodontics' },
      { source: '/tr/stomatologicheskie-uslugi/ortodontiya-brekey', destination: '/tr/dental-treatments/orthodontics' },
      { source: '/ru/dis-tedavileri/ortodonti-braket', destination: '/ru/dental-treatments/orthodontics' },
      { source: '/ru/stomatologicheskie-uslugi/ortodontiya-brekey', destination: '/ru/dental-treatments/orthodontics' },
      { source: '/en/dis-tedavileri/ortodonti-braket', destination: '/en/dental-treatments/orthodontics' },
      { source: '/en/stomatologicheskie-uslugi/ortodontiya-brekey', destination: '/en/dental-treatments/orthodontics' },
      { source: '/lt/dantų-gydymas/ortodontija-breketai', destination: '/lt/dental-treatments/orthodontics' },
      { source: '/pl/leczenie-zębów/ortodoncja-aparaty', destination: '/pl/dental-treatments/orthodontics' },

      // ---- /dental-treatments/endodontics ----
      { source: '/tr/dis-tedavileri/kanal-tedavisi', destination: '/tr/dental-treatments/endodontics' },
      { source: '/tr/stomatologicheskie-uslugi/lechenie-kornevyh-kanalov', destination: '/tr/dental-treatments/endodontics' },
      { source: '/ru/dis-tedavileri/kanal-tedavisi', destination: '/ru/dental-treatments/endodontics' },
      { source: '/ru/stomatologicheskie-uslugi/lechenie-kornevyh-kanalov', destination: '/ru/dental-treatments/endodontics' },
      { source: '/en/dis-tedavileri/kanal-tedavisi', destination: '/en/dental-treatments/endodontics' },
      { source: '/en/stomatologicheskie-uslugi/lechenie-kornevyh-kanalov', destination: '/en/dental-treatments/endodontics' },
      { source: '/lt/dantų-gydymas/endodontija', destination: '/lt/dental-treatments/endodontics' },
      { source: '/pl/leczenie-zębów/endodoncja', destination: '/pl/dental-treatments/endodontics' },

      // ---- /dental-treatments/periodontology ----
      { source: '/tr/dis-tedavileri/dis-eti-tedavisi', destination: '/tr/dental-treatments/periodontology' },
      { source: '/tr/stomatologicheskie-uslugi/lechenie-desen', destination: '/tr/dental-treatments/periodontology' },
      { source: '/ru/dis-tedavileri/dis-eti-tedavisi', destination: '/ru/dental-treatments/periodontology' },
      { source: '/ru/stomatologicheskie-uslugi/lechenie-desen', destination: '/ru/dental-treatments/periodontology' },
      { source: '/en/dis-tedavileri/dis-eti-tedavisi', destination: '/en/dental-treatments/periodontology' },
      { source: '/en/stomatologicheskie-uslugi/lechenie-desen', destination: '/en/dental-treatments/periodontology' },
      { source: '/lt/dantų-gydymas/periodontologija', destination: '/lt/dental-treatments/periodontology' },
      { source: '/pl/leczenie-zębów/periodontologia', destination: '/pl/dental-treatments/periodontology' },

      // ---- /dental-treatments/pediatric-dentistry ----
      { source: '/tr/dis-tedavileri/cocuk-dis-hekimligi', destination: '/tr/dental-treatments/pediatric-dentistry' },
      { source: '/tr/stomatologicheskie-uslugi/detskaya-stomatologiya', destination: '/tr/dental-treatments/pediatric-dentistry' },
      { source: '/ru/dis-tedavileri/cocuk-dis-hekimligi', destination: '/ru/dental-treatments/pediatric-dentistry' },
      { source: '/ru/stomatologicheskie-uslugi/detskaya-stomatologiya', destination: '/ru/dental-treatments/pediatric-dentistry' },
      { source: '/en/dis-tedavileri/cocuk-dis-hekimligi', destination: '/en/dental-treatments/pediatric-dentistry' },
      { source: '/en/stomatologicheskie-uslugi/detskaya-stomatologiya', destination: '/en/dental-treatments/pediatric-dentistry' },
      { source: '/lt/dantų-gydymas/vaikų-odontologija', destination: '/lt/dental-treatments/pediatric-dentistry' },
      { source: '/pl/leczenie-zębów/stomatologia-dziecięca', destination: '/pl/dental-treatments/pediatric-dentistry' },

      // ---- /dental-treatments/implants ----
      { source: '/tr/dis-tedavileri/implant', destination: '/tr/dental-treatments/implants' },
      { source: '/tr/stomatologicheskie-uslugi/implantatsiya', destination: '/tr/dental-treatments/implants' },
      { source: '/ru/dis-tedavileri/implant', destination: '/ru/dental-treatments/implants' },
      { source: '/ru/stomatologicheskie-uslugi/implantatsiya', destination: '/ru/dental-treatments/implants' },
      { source: '/en/dis-tedavileri/implant', destination: '/en/dental-treatments/implants' },
      { source: '/en/stomatologicheskie-uslugi/implantatsiya', destination: '/en/dental-treatments/implants' },
      { source: '/lt/dantų-gydymas/implantai', destination: '/lt/dental-treatments/implants' },
      { source: '/pl/leczenie-zębów/implanty', destination: '/pl/dental-treatments/implants' },

      // ---- /dental-treatments/oral-jaw-surgery ----
      { source: '/tr/dis-tedavileri/agiz-cerrahi', destination: '/tr/dental-treatments/oral-jaw-surgery' },
      { source: '/tr/stomatologicheskie-uslugi/hirurgiya-rti', destination: '/tr/dental-treatments/oral-jaw-surgery' },
      { source: '/ru/dis-tedavileri/agiz-cerrahi', destination: '/ru/dental-treatments/oral-jaw-surgery' },
      { source: '/ru/stomatologicheskie-uslugi/hirurgiya-rti', destination: '/ru/dental-treatments/oral-jaw-surgery' },
      { source: '/en/dis-tedavileri/agiz-cerrahi', destination: '/en/dental-treatments/oral-jaw-surgery' },
      { source: '/en/stomatologicheskie-uslugi/hirurgiya-rti', destination: '/en/dental-treatments/oral-jaw-surgery' },
      { source: '/lt/dantų-gydymas/burnos-žandikaulių-chirurgija', destination: '/lt/dental-treatments/oral-jaw-surgery' },
      { source: '/pl/leczenie-zębów/chirurgia-jamy-ustnej-szczęki', destination: '/pl/dental-treatments/oral-jaw-surgery' },

      // ---- /dental-treatments/frenectomy ----
      { source: '/tr/dis-tedavileri/frenektomi', destination: '/tr/dental-treatments/frenectomy' },
      { source: '/tr/stomatologicheskie-uslugi/frenektomiya', destination: '/tr/dental-treatments/frenectomy' },
      { source: '/ru/dis-tedavileri/frenektomi', destination: '/ru/dental-treatments/frenectomy' },
      { source: '/ru/stomatologicheskie-uslugi/frenektomiya', destination: '/ru/dental-treatments/frenectomy' },
      { source: '/en/dis-tedavileri/frenektomi', destination: '/en/dental-treatments/frenectomy' },
      { source: '/en/stomatologicheskie-uslugi/frenektomiya', destination: '/en/dental-treatments/frenectomy' },
      { source: '/lt/dantų-gydymas/frenektomija', destination: '/lt/dental-treatments/frenectomy' },
      { source: '/pl/leczenie-zębów/frenektomia', destination: '/pl/dental-treatments/frenectomy' },

      // ---- /dental-treatments/all-on-4 ----
      { source: '/tr/dis-tedavileri/all-on-4', destination: '/tr/dental-treatments/all-on-4' },
      { source: '/tr/stomatologicheskie-uslugi/all-on-4', destination: '/tr/dental-treatments/all-on-4' },
      { source: '/ru/dis-tedavileri/all-on-4', destination: '/ru/dental-treatments/all-on-4' },
      { source: '/ru/stomatologicheskie-uslugi/all-on-4', destination: '/ru/dental-treatments/all-on-4' },
      { source: '/en/dis-tedavileri/all-on-4', destination: '/en/dental-treatments/all-on-4' },
      { source: '/en/stomatologicheskie-uslugi/all-on-4', destination: '/en/dental-treatments/all-on-4' },
      { source: '/lt/dantų-gydymas/all-on-4', destination: '/lt/dental-treatments/all-on-4' },
      { source: '/pl/leczenie-zębów/all-on-4', destination: '/pl/dental-treatments/all-on-4' },

      // ---- /dental-treatments/filling ----
      { source: '/tr/dis-tedavileri/dolgu', destination: '/tr/dental-treatments/filling' },
      { source: '/tr/stomatologicheskie-uslugi/plomby', destination: '/tr/dental-treatments/filling' },
      { source: '/ru/dis-tedavileri/dolgu', destination: '/ru/dental-treatments/filling' },
      { source: '/ru/stomatologicheskie-uslugi/plomby', destination: '/ru/dental-treatments/filling' },
      { source: '/en/dis-tedavileri/dolgu', destination: '/en/dental-treatments/filling' },
      { source: '/en/stomatologicheskie-uslugi/plomby', destination: '/en/dental-treatments/filling' },
      { source: '/lt/dantų-gydymas/plombavimas', destination: '/lt/dental-treatments/filling' },
      { source: '/pl/leczenie-zębów/wypełnienia', destination: '/pl/dental-treatments/filling' },

      // ---- /dental-treatments/fixed-prosthetic-applications ----
      { source: '/tr/dis-tedavileri/sabit-protez', destination: '/tr/dental-treatments/fixed-prosthetic-applications' },
      { source: '/tr/stomatologicheskie-uslugi/nesemnoye-protezirovanie', destination: '/tr/dental-treatments/fixed-prosthetic-applications' },
      { source: '/ru/dis-tedavileri/sabit-protez', destination: '/ru/dental-treatments/fixed-prosthetic-applications' },
      { source: '/ru/stomatologicheskie-uslugi/nesemnoye-protezirovanie', destination: '/ru/dental-treatments/fixed-prosthetic-applications' },
      { source: '/en/dis-tedavileri/sabit-protez', destination: '/en/dental-treatments/fixed-prosthetic-applications' },
      { source: '/en/stomatologicheskie-uslugi/nesemnoye-protezirovanie', destination: '/en/dental-treatments/fixed-prosthetic-applications' },
      { source: '/lt/dantų-gydymas/fiksuotos-protezavimo-procedūros', destination: '/lt/dental-treatments/fixed-prosthetic-applications' },
      { source: '/pl/leczenie-zębów/stale-uzupełnienia-protetyczne', destination: '/pl/dental-treatments/fixed-prosthetic-applications' },

      // ================================================================
      // 3. BLOG YAZILARI (TÜM DİLLER, destination bazlı gruplanmış)
      // ================================================================

      // ---- /blog/bruxism ----
      { source: '/tr/blog/bruksizm', destination: '/tr/blog/bruxism' },
      { source: '/ru/blog/bruksizm', destination: '/ru/blog/bruxism' },
      { source: '/en/blog/bruksizm', destination: '/en/blog/bruxism' },
      { source: '/lt/tinklaraštis/bruksizmas', destination: '/lt/blog/bruxism' },
      { source: '/pl/blog/bruksizm', destination: '/pl/blog/bruxism' },

      // ---- /blog/implant/all-on-4 ----
      { source: '/tr/blog/all-on-4-implant', destination: '/tr/blog/implant/all-on-4' },
      { source: '/ru/blog/all-on-4-implant', destination: '/ru/blog/implant/all-on-4' },
      { source: '/en/blog/all-on-4-implant', destination: '/en/blog/implant/all-on-4' },
      { source: '/lt/tinklaraštis/implantas/all-on-4', destination: '/lt/blog/implant/all-on-4' },
      { source: '/pl/blog/implant/all-on-4', destination: '/pl/blog/implant/all-on-4' },

      // ---- /blog/implant/bone-graft ----
      { source: '/tr/blog/kostnyy-transplantat', destination: '/tr/blog/implant/bone-graft' },
      { source: '/tr/blog/kemik-grefti', destination: '/tr/blog/implant/bone-graft' },
      { source: '/ru/blog/kostnyy-transplantat', destination: '/ru/blog/implant/bone-graft' },
      { source: '/ru/blog/kemik-grefti', destination: '/ru/blog/implant/bone-graft' },
      { source: '/en/blog/kostnyy-transplantat', destination: '/en/blog/implant/bone-graft' },
      { source: '/en/blog/kemik-grefti', destination: '/en/blog/implant/bone-graft' },
      { source: '/lt/tinklaraštis/implantas/kaulo-transplantatas', destination: '/lt/blog/implant/bone-graft' },
      { source: '/pl/blog/implant/przeszczep-kosci', destination: '/pl/blog/implant/bone-graft' },

      // ---- /blog/implant/healing-process ----
      { source: '/tr/blog/implant-iyilesmesi', destination: '/tr/blog/implant/healing-process' },
      { source: '/tr/blog/zazhivlenie-implantata', destination: '/tr/blog/implant/healing-process' },
      { source: '/ru/blog/implant-iyilesmesi', destination: '/ru/blog/implant/healing-process' },
      { source: '/ru/blog/zazhivlenie-implantata', destination: '/ru/blog/implant/healing-process' },
      { source: '/en/blog/implant-iyilesmesi', destination: '/en/blog/implant/healing-process' },
      { source: '/en/blog/zazhivlenie-implantata', destination: '/en/blog/implant/healing-process' },
      { source: '/lt/tinklaraštis/implanto-gijimo-procesas', destination: '/lt/blog/implant/healing-process' },
      { source: '/pl/blog/proces-gojenia-implantu', destination: '/pl/blog/implant/healing-process' },

      // ---- /blog/implant/same-day-implant ----
      { source: '/tr/blog/ayni-gun-implant', destination: '/tr/blog/implant/same-day-implant' },
      { source: '/tr/blog/implantatsiya-za-den', destination: '/tr/blog/implant/same-day-implant' },
      { source: '/ru/blog/ayni-gun-implant', destination: '/ru/blog/implant/same-day-implant' },
      { source: '/ru/blog/implantatsiya-za-den', destination: '/ru/blog/implant/same-day-implant' },
      { source: '/en/blog/ayni-gun-implant', destination: '/en/blog/implant/same-day-implant' },
      { source: '/en/blog/implantatsiya-za-den', destination: '/en/blog/implant/same-day-implant' },
      { source: '/lt/tinklaraštis/tos-pacios-dienos-dantu-implantas', destination: '/lt/blog/implant/same-day-implant' },
      { source: '/pl/blog/implant-tego-samego-dnia', destination: '/pl/blog/implant/same-day-implant' },

      // ---- /blog/implant/single-tooth ----
      { source: '/tr/blog/tek-dis-implant', destination: '/tr/blog/implant/single-tooth' },
      { source: '/tr/blog/implantatsiya/odin-implant', destination: '/tr/blog/implant/single-tooth' },
      { source: '/tr/blog/single-tooth-implant', destination: '/tr/blog/implant/single-tooth' },
      { source: '/tr/blog/implant/tek-dis-implanti', destination: '/tr/blog/implant/single-tooth' },
      { source: '/ru/blog/tek-dis-implant', destination: '/ru/blog/implant/single-tooth' },
      { source: '/ru/blog/implantatsiya/odin-implant', destination: '/ru/blog/implant/single-tooth' },
      { source: '/ru/blog/single-tooth-implant', destination: '/ru/blog/implant/single-tooth' },
      { source: '/ru/blog/implant/implantatsiya-odnogo-zuba', destination: '/ru/blog/implant/single-tooth' },
      { source: '/en/blog/tek-dis-implant', destination: '/en/blog/implant/single-tooth' },
      { source: '/en/blog/implantatsiya/odin-implant', destination: '/en/blog/implant/single-tooth' },
      { source: '/en/blog/single-tooth-implant', destination: '/en/blog/implant/single-tooth' },
      { source: '/lt/implantas/vieno-danties-implantas', destination: '/lt/blog/implant/single-tooth' },
      { source: '/lt/blog/implant/vieno-danties-implantas', destination: '/lt/blog/implant/single-tooth' },
      { source: '/pl/implant/implant-pojedynczego-zeba', destination: '/pl/blog/implant/single-tooth' },
      { source: '/pl/blog/implant/pojedynczy-ząb', destination: '/pl/blog/implant/single-tooth' },

      // ---- /blog/implant/temporary-options ----
      { source: '/tr/blog/gecici-disler', destination: '/tr/blog/implant/temporary-options' },
      { source: '/tr/blog/vremennye-zuby', destination: '/tr/blog/implant/temporary-options' },
      { source: '/ru/blog/gecici-disler', destination: '/ru/blog/implant/temporary-options' },
      { source: '/ru/blog/vremennye-zuby', destination: '/ru/blog/implant/temporary-options' },
      { source: '/en/blog/gecici-disler', destination: '/en/blog/implant/temporary-options' },
      { source: '/en/blog/vremennye-zuby', destination: '/en/blog/implant/temporary-options' },
      { source: '/lt/tinklaraštis/implantas/laikinos-galybes', destination: '/lt/blog/implant/temporary-options' },
      { source: '/pl/blog/implant/tymczasowe-opcje', destination: '/pl/blog/implant/temporary-options' },

      // ---- /blog/implant/what-is-dental-implant ----
      { source: '/tr/blog/implant-nedir', destination: '/tr/blog/implant/what-is-dental-implant' },
      { source: '/tr/blog/chto-takoe-implantat', destination: '/tr/blog/implant/what-is-dental-implant' },
      { source: '/ru/blog/implant-nedir', destination: '/ru/blog/implant/what-is-dental-implant' },
      { source: '/ru/blog/chto-takoe-implantat', destination: '/ru/blog/implant/what-is-dental-implant' },
      { source: '/en/blog/implant-nedir', destination: '/en/blog/implant/what-is-dental-implant' },
      { source: '/en/blog/chto-takoe-implantat', destination: '/en/blog/implant/what-is-dental-implant' },
      { source: '/lt/tinklaraštis/kas-yra-dantu-implantas', destination: '/lt/blog/implant/what-is-dental-implant' },
      { source: '/lt/tinklaraštis/dantų-implantai', destination: '/lt/blog/implant/what-is-dental-implant' },
      { source: '/pl/blog/co-to-jest-implant-dentystyczny', destination: '/pl/blog/implant/what-is-dental-implant' },
      { source: '/pl/blog/implanty-dentystyczne', destination: '/pl/blog/implant/what-is-dental-implant' },

      // ---- /blog/implant/life-time ----
      { source: '/tr/blog/implant-omru', destination: '/tr/blog/implant/life-time' },
      { source: '/ru/blog/srok-sluzhby-implantov', destination: '/ru/blog/implant/life-time' },
      { source: '/en/blog/implant-life-time', destination: '/en/blog/implant/life-time' },
      { source: '/lt/tinklaraštis/implanto-tarnavimo-laikas', destination: '/lt/blog/implant/life-time' },
      { source: '/pl/blog/zywotnosc-implantow', destination: '/pl/blog/implant/life-time' },

      // ---- /blog/dental-bridge ----
      { source: '/tr/blog/zubnye-mosty', destination: '/tr/blog/dental-bridge' },
      { source: '/tr/blog/kopru', destination: '/tr/blog/dental-bridge' },
      { source: '/ru/blog/zubnye-mosty', destination: '/ru/blog/dental-bridge' },
      { source: '/ru/blog/kopru', destination: '/ru/blog/dental-bridge' },
      { source: '/en/blog/zubnye-mosty', destination: '/en/blog/dental-bridge' },
      { source: '/en/blog/kopru', destination: '/en/blog/dental-bridge' },
      { source: '/lt/tinklaraštis/dantų-tiltelis', destination: '/lt/blog/dental-bridge' },
      { source: '/pl/blog/most-dentystyczny', destination: '/pl/blog/dental-bridge' },

      // ---- /blog/dental-veneer-types ----
      { source: '/tr/blog/dis-kaplama-cesitleri', destination: '/tr/blog/dental-veneer-types' },
      { source: '/ru/blog/vidy-koronok', destination: '/ru/blog/dental-veneer-types' },
      { source: '/lt/tinklaraštis/dantų-karuneliu-tipai', destination: '/lt/blog/dental-veneer-types' },
      { source: '/pl/blog/rodzaje-koron-zebowych', destination: '/pl/blog/dental-veneer-types' },

      // ---- /blog/denture ----
      { source: '/tr/blog/dis-protezi', destination: '/tr/blog/denture' },
      { source: '/ru/blog/zubnye-protezy', destination: '/ru/blog/denture' },
      { source: '/lt/tinklaraštis/protezai', destination: '/lt/blog/denture' },
      { source: '/lt/tinklaraštis/protezai-privalumai-trūkumai', destination: '/lt/blog/denture' },
      { source: '/pl/blog/protezy', destination: '/pl/blog/denture' },
      { source: '/pl/blog/protezy-zalety-wady', destination: '/pl/blog/denture' },

      // ---- /blog/how-to-prevent-yellowing-of-teeth ----
      { source: '/tr/blog/dis-sararmasi', destination: '/tr/blog/how-to-prevent-yellowing-of-teeth' },
      { source: '/ru/blog/kak-predotvratit-pozheltenie', destination: '/ru/blog/how-to-prevent-yellowing-of-teeth' },
      { source: '/lt/tinklaraštis/kaip-isvengti-dantu-pageltimo', destination: '/lt/blog/how-to-prevent-yellowing-of-teeth' },
      { source: '/lt/tinklaraštis/dantų-pageltimas', destination: '/lt/blog/how-to-prevent-yellowing-of-teeth' },
      { source: '/pl/blog/jak-zapobiegac-zolknieciu', destination: '/pl/blog/how-to-prevent-yellowing-of-teeth' },
      { source: '/pl/blog/zolkniecie-zebow', destination: '/pl/blog/how-to-prevent-yellowing-of-teeth' },

      // ---- /blog/impacted-teeth ----
      { source: '/tr/blog/gomulu-dis', destination: '/tr/blog/impacted-teeth' },
      { source: '/ru/blog/retinirovannye-zuby', destination: '/ru/blog/impacted-teeth' },
      { source: '/lt/tinklaraštis/uzdarame-kaule-esantis-dantis', destination: '/lt/blog/impacted-teeth' },
      { source: '/pl/blog/zeby-zatrzymane', destination: '/pl/blog/impacted-teeth' },
      { source: '/pl/blog/ekstrakcja-zeba-zatrzymanego', destination: '/pl/blog/impacted-teeth' },

      // ---- /blog/orthodontics ----
      { source: '/tr/blog/ortodonti', destination: '/tr/blog/orthodontics' },
      { source: '/ru/blog/ortodontiya', destination: '/ru/blog/orthodontics' },
      { source: '/lt/tinklaraštis/ortodontija', destination: '/lt/blog/orthodontics' },
      { source: '/pl/blog/ortodoncja', destination: '/pl/blog/orthodontics' },

      // ---- /blog/what-are-orthodontic-treatments ----
      { source: '/tr/blog/ortodontik-tedaviler-nelerdir', destination: '/tr/blog/what-are-orthodontic-treatments' },
      { source: '/ru/blog/ortodonticheskie-lecheniya', destination: '/ru/blog/what-are-orthodontic-treatments' },
      { source: '/lt/tinklaraštis/kokie-ortodontiniai-gydymai', destination: '/lt/blog/what-are-orthodontic-treatments' },
      { source: '/lt/tinklaraštis/ortodontiniai-gydymai', destination: '/lt/blog/what-are-orthodontic-treatments' },
      { source: '/pl/blog/jakie-sa-leczenia-ortodontyczne', destination: '/pl/blog/what-are-orthodontic-treatments' },
      { source: '/pl/blog/leczenie-ortodontyczne', destination: '/pl/blog/what-are-orthodontic-treatments' },

      // ---- /blog/gum-recession-and-sensitivity ----
      { source: '/tr/blog/dis-eti-cekilmesi', destination: '/tr/blog/gum-recession-and-sensitivity' },
      { source: '/tr/blog/retcessiya-desny', destination: '/tr/blog/gum-recession-and-sensitivity' },
      { source: '/ru/blog/dis-eti-cekilmesi', destination: '/ru/blog/gum-recession-and-sensitivity' },
      { source: '/ru/blog/retcessiya-desny', destination: '/ru/blog/gum-recession-and-sensitivity' },
      { source: '/en/blog/dis-eti-cekilmesi', destination: '/en/blog/gum-recession-and-sensitivity' },
      { source: '/en/blog/retcessiya-desny', destination: '/en/blog/gum-recession-and-sensitivity' },
      { source: '/lt/tinklaraštis/dantenų-atsitraukimas-ir-jautrumas', destination: '/lt/blog/gum-recession-and-sensitivity' },
      { source: '/pl/blog/recesja-dziąseł-i-nadwrażliwość', destination: '/pl/blog/gum-recession-and-sensitivity' },

      // ---- /blog/halitosis ----
      { source: '/tr/blog/halitoz', destination: '/tr/blog/halitosis' },
      { source: '/tr/blog/galitoz', destination: '/tr/blog/halitosis' },
      { source: '/ru/blog/halitoz', destination: '/ru/blog/halitosis' },
      { source: '/ru/blog/galitoz', destination: '/ru/blog/halitosis' },
      { source: '/en/blog/halitoz', destination: '/en/blog/halitosis' },
      { source: '/lt/tinklaraštis/halitozė', destination: '/lt/blog/halitosis' },
      { source: '/pl/blog/halitoza', destination: '/pl/blog/halitosis' },

      // ---- /blog/ayrik-dis-tedavisi (SPACED TEETH TR) ----
      // canonical: /tr/blog/ayrik-dis-tedavisi
      { source: '/tr/blog/ayrik-dis-tedavisi', destination: '/tr/blog/spaced-teeth' },
      //{ source: '/tr/blog/spaced-teeth-treatment', destination: '/tr/blog/ayrik-dis-tedavisi' },

      // ---- /blog/lechenie-promezhutkov (SPACED TEETH RU) ----
      { source: '/ru/blog/spaced-teeth', destination: '/ru/blog/lechenie-promezhutkov' },
      { source: '/ru/blog/spaced-teeth-treatment', destination: '/ru/blog/lechenie-promezhutkov' },
      { source: '/ru/blog/diastema', destination: '/ru/blog/lechenie-promezhutkov' },
      { source: '/ru/blog/lechenie-promezhutkov-mezhdu-zubami', destination: '/ru/blog/lechenie-promezhutkov' },

      // ---- /blog/spaced-teeth-treatment (EN canonical) ----
      // (zaten doğrudan bu URL kullanılıyor, ek alias yok)

      // ---- /blog/leczenie-przerw (PL) ----
      { source: '/pl/blog/spaced-teeth', destination: '/pl/blog/leczenie-przerw' },
      { source: '/pl/blog/spaced-teeth-treatment', destination: '/pl/blog/leczenie-przerw' },
      { source: '/pl/blog/diastema', destination: '/pl/blog/leczenie-przerw' },
      { source: '/pl/blog/przerwy-miedzy-zebami', destination: '/pl/blog/leczenie-przerw' },

      // ---- /blog/tarpai-tarp-dantu (LT) ----
      { source: '/lt/blog/spaced-teeth', destination: '/lt/blog/tarpai-tarp-dantu' },
      { source: '/lt/blog/spaced-teeth-treatment', destination: '/lt/blog/tarpai-tarp-dantu' },
      { source: '/lt/blog/diastema', destination: '/lt/blog/tarpai-tarp-dantu' },
      { source: '/lt/blog/diastemos-gydymas', destination: '/lt/blog/tarpai-tarp-dantu' },

      // ---- /blog/dis-eti-kanamasi (TOOTH BLEEDING TR) ----
      { source: '/tr/blog/dis-eti-kanamasi', destination: '/tr/blog/tooth-bleeding' },
      //{ source: '/tr/blog/gum-bleeding', destination: '/tr/blog/dis-eti-kanamasi' },

      // ---- /blog/krovotochivost-desen (RU) ----
      { source: '/ru/blog/tooth-bleeding', destination: '/ru/blog/krovotochivost-desen' },
      { source: '/ru/blog/gum-bleeding', destination: '/ru/blog/krovotochivost-desen' },
      { source: '/ru/blog/krovotochivost-desyon', destination: '/ru/blog/krovotochivost-desen' },

      // ---- /blog/tooth-bleeding (EN canonical) ----
      { source: '/en/blog/bleeding-gums', destination: '/en/blog/tooth-bleeding' },
      { source: '/en/blog/gum-bleeding', destination: '/en/blog/tooth-bleeding' },

      // ---- /blog/krwawienie-dziasel (PL) ----
      { source: '/pl/blog/tooth-bleeding', destination: '/pl/blog/krwawienie-dziasel' },
      { source: '/pl/blog/gum-bleeding', destination: '/pl/blog/krwawienie-dziasel' },
      { source: '/pl/blog/krwawiące-dziąsła', destination: '/pl/blog/krwawienie-dziasel' },

      // ---- /blog/dantenu-kraujavimas (LT) ----
      { source: '/lt/blog/tooth-bleeding', destination: '/lt/blog/dantenu-kraujavimas' },
      { source: '/lt/blog/gum-bleeding', destination: '/lt/blog/dantenu-kraujavimas' },
      { source: '/lt/blog/kraujuojancios-dantenos', destination: '/lt/blog/dantenu-kraujavimas' },
    ];
  },
};

module.exports = withNextIntl(nextConfig);