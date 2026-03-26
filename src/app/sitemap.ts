import { MetadataRoute } from 'next';
import { languages } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.skinchange.dk';
  const lastModified = new Date();

  const pages = [
    '',                    // Home
    '/about',
    '/download',
    '/faq',
    '/blog',
    '/guide',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
  ];

  const faqCategories = [
    '/faq/how-it-works',
    '/faq/pricing',
    '/faq/privacy-security',
    '/faq/app',
    '/faq/contact',
    '/faq/diseases',
  ];

  const blogSlugs = [
    '/blog/acne',
    '/blog/eczema-atopic-dermatitis',
    '/blog/rosacea',
    '/blog/urticaria-hives',
    '/blog/herpes-simplex-virus',
    '/blog/herpes-zoster-shingles',
    '/blog/tinea-infections-ringworm',
    '/blog/vitiligo',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  const allPages = [
    ...pages.map(p => ({ path: p, type: 'page' })),
    ...faqCategories.map(p => ({ path: p, type: 'faq' })),
    ...blogSlugs.map(p => ({ path: p, type: 'blog' })),
  ];

  languages.forEach((lang) => {
    allPages.forEach(({ path, type }) => {
      const url = `${baseUrl}/${lang}${path}/`;

      let priority = 0.5;
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';

      if (path === '') {
        priority = 1.0;
        changeFrequency = 'daily';
      } else if (['/about', '/download', '/faq', '/blog'].includes(path)) {
        priority = 0.8;
        changeFrequency = 'weekly';
      } else if (type === 'faq') {
        priority = 0.7;
        changeFrequency = 'weekly';
      } else if (type === 'blog') {
        priority = 0.7;
        changeFrequency = 'monthly';
      } else if (['/guide', '/contact'].includes(path)) {
        priority = 0.6;
        changeFrequency = 'monthly';
      } else {
        priority = 0.3;
        changeFrequency = 'monthly';
      }

      sitemapEntries.push({
        url,
        lastModified,
        changeFrequency,
        priority,
        alternates: {
          languages: {
            'x-default': `${baseUrl}/da${path}/`,
            da: `${baseUrl}/da${path}/`,
            en: `${baseUrl}/en${path}/`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
