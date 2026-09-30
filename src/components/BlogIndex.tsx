'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Language } from '@/lib/i18n';
import { ArrowRight, ImageIcon } from '@/components/ui/Icons';

export interface BlogIndexPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
}

interface BlogIndexProps {
  lang: Language;
  posts: BlogIndexPost[];
}

// The general article list with category filters: cards on desktop, a compact list on phones.
export default function BlogIndex({ lang, posts }: BlogIndexProps) {
  const isDa = lang === 'da';
  const all = isDa ? 'Alle' : 'All';
  const [filter, setFilter] = useState(all);

  const chips = useMemo(() => {
    const counts = new Map<string, number>();
    posts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
    const categories = Array.from(counts.entries()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], lang));
    return [[all, posts.length] as [string, number], ...categories];
  }, [posts, all, lang]);

  const visible = filter === all ? posts : posts.filter((p) => p.category === filter);
  const meta = (p: BlogIndexPost) => `${p.date} • ${p.readTime} ${isDa ? 'læsetid' : 'read'}`;
  const credit = (
    <>
      {isDa ? 'Billeder fra Wikimedia Commons. Se ophav og licenser under ' : 'Images from Wikimedia Commons. See authors and licences under '}
      <Link href={`/${lang}/image-credits`} className="text-brand underline underline-offset-[3px] hover:text-brand-ink">
        {isDa ? 'billedkreditering' : 'image credits'}
      </Link>
      .
    </>
  );

  return (
    <>
      <div
        role="group"
        aria-label={isDa ? 'Filtrér artikler' : 'Filter articles'}
        className="no-scrollbar mx-auto flex max-w-page gap-2 overflow-x-auto px-5 pb-3 md:px-10 lg:flex-wrap lg:overflow-visible lg:pb-10 xl:px-20"
      >
        {chips.map(([label, count]) => {
          const on = label === filter;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setFilter(label)}
              aria-pressed={on}
              className={`flex h-11 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors duration-150 lg:gap-2 lg:px-[18px] lg:text-[15px] ${
                on ? 'border-ink bg-ink text-white' : 'border-line bg-white text-ink hover:border-line-strong'
              }`}
            >
              {label}
              <span className="text-xs font-medium opacity-70 lg:text-[13px]">{count}</span>
            </button>
          );
        })}
      </div>

      <section id="diseases" aria-label={isDa ? 'Artikler' : 'Articles'} className="mx-auto max-w-page px-5 md:px-10 xl:px-20">
        {/* Desktop and tablet: cards */}
        <div className="hidden gap-x-6 gap-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((post) => (
            <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className="group flex flex-col text-ink transition-transform duration-300 ease-soft hover:-translate-y-1">
              <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-paper-deep">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  width={640}
                  height={400}
                  loading="lazy"
                  className="block h-full w-full object-cover transition-transform duration-[600ms] ease-soft group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col gap-2.5 px-1 pt-[18px]">
                <span className="flex flex-wrap items-center gap-2 text-[13px] text-muted">
                  <span className="flex h-[26px] items-center rounded-full bg-brand-tint px-2.5 font-semibold text-brand-ink">{post.category}</span>
                  {meta(post)}
                </span>
                <h2 className="line-clamp-3 font-display text-xl font-semibold leading-[1.25] tracking-[-0.01em]">{post.title}</h2>
                <p className="line-clamp-2 text-[15px] leading-[1.55] text-body">{post.excerpt}</p>
                <span className="flex items-center gap-1.5 text-[15px] font-semibold text-brand">
                  {isDa ? 'Læs mere' : 'Read more'}
                  <ArrowRight size={16} className="transition-transform duration-300 ease-soft group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
          <div className="flex flex-col justify-end gap-3 rounded-3xl border border-dashed border-line-strong p-7">
            <ImageIcon size={28} strokeWidth={1.8} className="text-muted" />
            <p className="text-[15px] leading-[1.55] text-body">{credit}</p>
          </div>
        </div>

        {/* Phones: compact list */}
        <div className="flex flex-col md:hidden">
          {visible.map((post) => (
            <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className="flex items-center gap-4 border-b border-line py-3 text-ink">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.imageAlt}
                width={176}
                height={176}
                loading="lazy"
                className="block h-[88px] w-[88px] shrink-0 rounded-[18px] bg-paper-deep object-cover"
              />
              <span className="flex min-w-0 flex-col gap-1.5">
                <span className="text-xs font-semibold tracking-[0.02em] text-brand-ink">{post.category}</span>
                <span className="line-clamp-2 font-display text-base font-semibold leading-[1.25]">{post.title}</span>
                <span className="text-xs text-muted">{meta(post)}</span>
              </span>
            </Link>
          ))}
          <p className="mt-5 flex items-start gap-2.5 text-sm leading-[1.55] text-body">
            <ImageIcon size={20} strokeWidth={1.8} className="shrink-0 text-muted" />
            <span>{credit}</span>
          </p>
        </div>
      </section>
    </>
  );
}
