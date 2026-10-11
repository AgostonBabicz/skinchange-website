// Tell IndexNow (Bing, Yandex, Naver, Seznam) which pages changed, after a deploy.
// Reads the built sitemap (dist/sitemap.xml) and submits the URLs whose <lastmod> is on or after --since.
//
//   node scripts/indexnow.mjs --since 2026-10-01 --dry-run   # list what would be sent
//   node scripts/indexnow.mjs --since 2026-10-01             # submit
//   node scripts/indexnow.mjs --all                          # submit every sitemap URL (first run only)
//
// The key file public/<KEY>.txt must be live on the site before submitting, or IndexNow answers 403.
// <lastmod> comes from src/lib/content-dates.ts, so keep that file current.
import fs from 'node:fs';

const KEY = 'c2c0d8eae426e4f4f1e673a1b612d58c';
const HOST = 'www.skinchange.dk';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const all = args.includes('--all');
const sinceIdx = args.indexOf('--since');
const since = sinceIdx >= 0 ? args[sinceIdx + 1] : null;

if (!all && !/^\d{4}-\d{2}-\d{2}$/.test(since ?? '')) {
  console.error('Usage: node scripts/indexnow.mjs (--since YYYY-MM-DD | --all) [--dry-run]');
  process.exit(1);
}

const xml = fs.readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
const entries = [...xml.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<lastmod>([^<]+)<\/lastmod>[\s\S]*?<\/url>/g)].map(
  ([, loc, lastmod]) => ({ loc, lastmod: lastmod.slice(0, 10) }),
);
const urlList = entries.filter((e) => all || e.lastmod >= since).map((e) => e.loc);

if (urlList.length === 0) {
  console.log('IndexNow: no changed URLs, nothing to submit.');
  process.exit(0);
}

console.log(`IndexNow: ${urlList.length} URL(s)${dryRun ? ' (dry run, not sent)' : ''}`);
urlList.forEach((u) => console.log(`  ${u}`));
if (dryRun) process.exit(0);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow answered ${res.status} ${res.statusText}`);
// 200 and 202 mean accepted; anything else should not fail a deploy, so only report it.
