import fs from 'node:fs';
import nodePath from 'node:path';
import { MetadataRoute } from 'next';
import { languages } from '@/lib/i18n';
import { faqCategories } from '@/lib/faq-data';

// Read the blog routes off disk so the sitemap cannot drift when articles are added.
function blogSlugs(): string[] {
  const dir = nodePath.join(process.cwd(), 'src', 'app', '[lang]', 'blog');
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => `/blog/${e.name}`)
    .sort();
}

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

  const faqPaths = faqCategories.map((c) => `/faq/${c.slug}`);

  const sitemapEntries: MetadataRoute.Sitemap = [];

  const allPages = [
    ...pages.map(p => ({ path: p, type: 'page' })),
    ...faqPaths.map(p => ({ path: p, type: 'faq' })),
    ...blogSlugs().map(p => ({ path: p, type: 'blog' })),
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
