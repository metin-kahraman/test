// next.config.js
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
const urlMappings = require('./src/lib/urlMappings.js');

const defaultLocale = 'en';
const locales = ['tr', 'en', 'ru', 'pl', 'lt'];

const nextConfig = {
  async redirects() {
    const redirects = [];
    const seen = new Set();
    const push = (s, d) => {
      if (!s || !d || s === d || seen.has(s)) return;
      seen.add(s);
      redirects.push({ source: s, destination: d, permanent: true }); // 308
    };

    push('/our-doctors', '/en/our-dentist');
    push('/en/our-doctors', '/en/our-dentist');
    push('/blog/impacted-teeth', '/en/blog/impacted-tooth-extraction');
    for (const loc of locales) {
      push(`/${loc}/blog/impacted-teeth`, `/${loc}/${urlMappings['blog/impacted-tooth-extraction'][loc]}`);
    }

    for (const [enSlug, mapping] of Object.entries(urlMappings)) {
      // 1) Prefix'siz EN slug → /en/{enSlug}
      // /digital-dentistry → /en/digital-dentistry
      push(`/${enSlug}`, `/en/${enSlug}`);

      // 2) Prefix'siz dile özel slug → kendi diline
      // /klinigimiz → /tr/klinigimiz (TR slug, TR kullanıcı)
      // /nasha-klinika → /ru/nasha-klinika
      for (const loc of locales) {
        if (loc === defaultLocale) continue;
        const localized = mapping[loc];
        if (!localized || localized === enSlug) continue;
        push(`/${localized}`, `/${loc}/${localized}`);
      }

      // 3) Yanlış slug kombinasyonu → doğru slug
      // /en/dijital-dis-hekimligi → /en/digital-dentistry
      // /tr/digital-dentistry → /tr/dijital-dis-hekimligi
      for (const loc of locales) {
        const correctSlug = mapping[loc];
        if (!correctSlug) continue;
        for (const otherLoc of locales) {
          if (otherLoc === loc) continue;
          const wrongSlug = mapping[otherLoc];
          if (!wrongSlug || wrongSlug === correctSlug) continue;
          push(`/${loc}/${wrongSlug}`, `/${loc}/${correctSlug}`);
        }
      }
    }

    return redirects;
  },
};

module.exports = withNextIntl(nextConfig);