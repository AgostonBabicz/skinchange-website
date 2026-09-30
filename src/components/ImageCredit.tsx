import { Language } from '@/lib/i18n';
import { imageCredits, licenseUrl } from '@/lib/image-credits';

const KIND_LABEL = {
  photo: { da: 'Foto', en: 'Photo' },
  illustration: { da: 'Illustration', en: 'Illustration' },
  micrograph: { da: 'Mikroskopbillede', en: 'Micrograph' },
};

const linkClass = 'underline underline-offset-[3px] transition-colors hover:text-ink';

export default function ImageCredit({ src, lang }: { src: string; lang: Language }) {
  const credit = imageCredits[src];
  if (!credit) return null;

  const isDa = lang === 'da';
  const isPublicDomain = credit.license === 'Public domain';
  const license = licenseUrl(credit.license, lang);

  return (
    <figcaption className="mx-2 mt-2.5 text-xs leading-[1.5] text-muted lg:mx-0 lg:mt-3 lg:text-[13px]">
      {KIND_LABEL[credit.kind][lang]}: {credit.author} ·{' '}
      <a href={credit.sourceUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
        Wikimedia Commons
      </a>{' '}
      ·{' '}
      {license ? (
        <a href={license} target="_blank" rel="license noopener noreferrer" className={linkClass}>
          {credit.license}
        </a>
      ) : (
        <span>{isDa ? 'Offentligt domæne' : 'Public domain'}</span>
      )}
      {!isPublicDomain && <span>{isDa ? ' · beskåret og nedskaleret' : ' · cropped and resized'}</span>}
    </figcaption>
  );
}
