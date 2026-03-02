import { MetadataRoute } from 'next';
import { languages } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.skinchange.dk';
  const lastModified = new Date();

  // Define all pages for each language
  const pages = [
    '',                    // Home
    '/about',             // About
    '/download',          // Download
    '/faq',               // FAQ
    '/guide',             // User Guide
    '/contact',           // Contact
    '/privacy-policy',    // Privacy Policy
    '/terms-conditions',  // Terms & Conditions
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for all language/page combinations
  languages.forEach((lang) => {
    pages.forEach((page) => {
      const url = `${baseUrl}/${lang}${page}`;
      
      // Set priority based on page importance
      let priority = 0.5;
      let changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';
      
      if (page === '') {
        // Homepage
        priority = 1.0;
        changeFrequency = 'daily';
      } else if (page === '/about' || page === '/download' || page === '/faq') {
        // Important pages
        priority = 0.8;
        changeFrequency = 'weekly';
      } else if (page === '/guide' || page === '/contact') {
        // Medium priority
        priority = 0.6;
        changeFrequency = 'monthly';
      } else {
        // Legal pages - lower priority, less frequent updates
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
            da: `${baseUrl}/da${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
