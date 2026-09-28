import { Language } from '@/lib/i18n';
import { imageCredits, licenseUrl } from '@/lib/image-credits';

const KIND_LABEL = {
  photo: { da: 'Foto', en: 'Photo' },
  illustration: { da: 'Illustration', en: 'Illustration' },
  micrograph: { da: 'Mikroskopbillede', en: 'Micrograph' },
};

const linkClass = 'underline decoration-gray-300 underline-offset-2 hover:text-primary';

export default function ImageCredit({ src, lang }: { src: string; lang: Language }) {
  const credit = imageCredits[src];
  if (!credit) return null;

  const isDa = lang === 'da';
  const isPublicDomain = credit.license === 'Public domain';
  const license = licenseUrl(credit.license, lang);

  return (
    <figcaption className="mt-2 text-xs text-gray-500 leading-relaxed">
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
