import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import { Metadata } from 'next';
import ContactFaq from '@/components/ContactFaq';
import { ArrowRight, BuildingIcon, MailIcon, MapPinIcon } from '@/components/ui/Icons';
import Link from 'next/link';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  
  return {
    title: isDa 
      ? "Kontakt os | SKIND" 
      : "Contact Us | SKIND",
    description: isDa
      ? "Kontakt SKIND for spørgsmål om online hudkonsultation. Email: info@skinchange.ai. Vi besvarer din henvendelse inden for 48 timer."
      : "Contact SKIND for questions about online skin consultation. Email: info@skinchange.ai. We respond within 48 hours.",
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/contact`,
      languages: {
        'x-default': 'https://www.skinchange.dk/da/contact',
        da: 'https://www.skinchange.dk/da/contact',
        en: 'https://www.skinchange.dk/en/contact',
      },
    },
    openGraph: {
      title: isDa ? "Kontakt os | SKIND" : "Contact Us | SKIND",
      description: isDa 
        ? "Har du spørgsmål? Kontakt os på info@skinchange.ai"
        : "Have questions? Contact us at info@skinchange.ai",
      url: `https://www.skinchange.dk/${params.lang}/contact`,
    },
  };
}

export default function ContactPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  const contactInfo = {
    email: 'info@skinchange.ai',
    company: 'SkinChange.AI ApS',
    cvr: '43156179',
    address: isDa ? 'Hindbærhaven 48, 7120 Vejle Ø' : 'Hindbærhaven 48, 7120 Vejle Ø, Denmark',
  };

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: isDa ? 'Kontakt SKIND' : 'Contact SKIND',
    description: isDa
      ? 'Kontakt SKIND for spørgsmål om online hudkonsultation'
      : 'Contact SKIND for questions about online skin consultation',
    url: `https://www.skinchange.dk/${lang}/contact`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@skinchange.ai',
      contactType: 'customer service',
      availableLanguage: ['Danish', 'English'],
      areaServed: 'DK',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hindbærhaven 48',
      addressLocality: 'Vejle Ø',
      postalCode: '7120',
      addressCountry: 'DK',
    },
  };

  const faqItems = isDa ? [
    {
      q: "Hvor hurtigt får jeg svar?",
      a: "Vi besvarer alle henvendelser inden for 48 timer på hverdage."
    },
    {
      q: "Kan jeg ringe til jer?",
      a: "Vi foretrækker kontakt via email for at sikre dokumentation og kvalitetssikring."
    },
    {
      q: "Hvor finder jeg mere information?",
      a: "Besøg vores FAQ-side eller download appen for at se, hvordan det virker."
    }
  ] : [
    {
      q: "How quickly will I get a response?",
      a: "We respond to all inquiries within 48 hours on business days."
    },
    {
      q: "Can I call you?",
      a: "We prefer email contact to ensure documentation and quality assurance."
    },
    {
      q: "Where can I find more information?",
      a: "Visit our FAQ page or download the app to see how it works."
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
    <main className="min-h-screen overflow-x-clip bg-paper">
      <Navigation lang={lang} />

      <header className="mx-auto flex max-w-page flex-col gap-3 px-5 pb-7 pt-4 md:px-10 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-6 lg:pb-16 lg:pt-12 xl:px-20">
        <h1 className="animate-fokus font-display text-[54px] font-extrabold leading-[0.95] tracking-[-0.055em] lg:col-span-7 lg:text-[88px] lg:leading-[0.9] xl:text-[104px]">
          {isDa ? 'Kontakt os' : 'Contact Us'}
        </h1>
        <p className="animate-fokus text-lg leading-normal text-body [animation-delay:100ms] lg:col-span-5 lg:col-start-8 lg:text-[22px]">
          {isDa ? 'Har du spørgsmål? Vi er her for at hjælpe dig.' : 'Have questions? We are here to help you.'}
        </p>
      </header>

      <section aria-label={isDa ? 'Kontaktmuligheder' : 'Ways to contact us'} className="mx-auto flex max-w-page flex-col gap-3 px-4 md:px-10 lg:grid lg:grid-cols-12 lg:gap-6 xl:px-20">
        <div data-reveal className="relative flex flex-col gap-2.5 overflow-hidden rounded-[28px] bg-ink px-6 py-7 text-white lg:col-span-7 lg:gap-4 lg:rounded-[36px] lg:p-12">
          <span aria-hidden="true" className="absolute -bottom-[90px] -right-[90px] h-[280px] w-[280px] rounded-full border border-signal/20 lg:-bottom-40 lg:-right-40 lg:h-[520px] lg:w-[520px] lg:border-signal/[0.14]" />
          <span aria-hidden="true" className="absolute -bottom-[60px] -right-[60px] hidden h-80 w-80 rounded-full border border-signal/[0.22] lg:block" />
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-signal/[0.12] text-signal lg:h-14 lg:w-14 lg:rounded-[18px]">
            <MailIcon size={26} strokeWidth={1.8} className="h-6 w-6 lg:h-[26px] lg:w-[26px]" />
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] lg:mt-3 lg:text-[28px]">Email</h2>
          <p className="text-base leading-[1.55] text-on-ink-soft lg:text-lg">
            {isDa ? 'Send os en email, og vi svarer inden for 48 timer.' : 'Send us an email, and we will respond within 48 hours.'}
          </p>
          <a
            href={`mailto:${contactInfo.email}`}
            className="relative mt-2.5 flex min-h-11 items-center font-display text-[26px] font-bold tracking-[-0.025em] text-white underline decoration-signal decoration-2 underline-offset-[7px] transition-colors hover:text-signal lg:mt-7 lg:text-5xl lg:leading-[1.05] lg:tracking-[-0.035em] lg:underline-offset-[10px]"
          >
            {contactInfo.email}
          </a>
        </div>
        <div className="flex flex-col gap-3 lg:col-span-5 lg:gap-6">
          <div data-reveal className="flex gap-4 rounded-3xl border border-line bg-white p-[22px] lg:gap-[18px] lg:rounded-[28px] lg:p-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-brand-tint text-brand lg:h-12 lg:w-12 lg:rounded-2xl">
              <BuildingIcon size={24} strokeWidth={1.8} className="h-[22px] w-[22px] lg:h-6 lg:w-6" />
            </span>
            <div className="flex flex-col gap-1 lg:gap-1.5">
              <h2 className="font-display text-xl font-bold tracking-[-0.015em] lg:text-[22px]">{isDa ? 'Virksomhed' : 'Company'}</h2>
              <p className="text-base leading-normal lg:text-[17px] lg:leading-[1.55]">{contactInfo.company}</p>
              <p className="text-base leading-normal text-body lg:text-[17px] lg:leading-[1.55]">CVR: {contactInfo.cvr}</p>
            </div>
          </div>
          <div data-reveal style={{ ['--reveal-delay' as string]: '90ms' }} className="flex gap-4 rounded-3xl border border-line bg-white p-[22px] lg:gap-[18px] lg:rounded-[28px] lg:p-8">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-brand-tint text-brand lg:h-12 lg:w-12 lg:rounded-2xl">
              <MapPinIcon size={24} strokeWidth={1.8} className="h-[22px] w-[22px] lg:h-6 lg:w-6" />
            </span>
            <div className="flex flex-col gap-1 lg:gap-1.5">
              <h2 className="font-display text-xl font-bold tracking-[-0.015em] lg:text-[22px]">{isDa ? 'Beliggenhed' : 'Location'}</h2>
              <p className="text-base leading-normal lg:text-[17px] lg:leading-[1.55]">
                {isDa ? 'Vi opererer i hele Danmark fra vores digitale platform.' : 'We operate throughout Denmark from our digital platform.'}
              </p>
              <p className="text-base leading-normal text-body lg:text-[17px] lg:leading-[1.55]">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label={isDa ? 'Kort' : 'Map'} className="mx-auto max-w-page px-4 pt-12 md:px-10 lg:pt-24 xl:px-20">
        <figure data-reveal className="m-0 overflow-hidden rounded-[28px] border border-line bg-white lg:rounded-[36px]">
          <div className="relative h-60 bg-paper-deep lg:h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2263.0!2d9.58!3d55.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c0c8f0e4c6b5f%3A0x5c3e2d9f3c1a8e9d!2sHindb%C3%A6rhaven%2048%2C%207120%20Vejle%20%C3%98%2C%20Denmark!5e0!3m2!1sen!2sdk!4v1700000000000!5m2!1sen!2sdk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={isDa ? "Kort over Vejle" : "Map of Vejle"}
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <figcaption className="px-5 py-[18px] text-[15px] leading-[1.55] text-body lg:px-8 lg:py-[22px] lg:text-base">
            {isDa
              ? 'SKIND er tilgængelig i hele Danmark. Vores digitale platform gør det muligt at modtage hudlægekonsultation uanset hvor du bor.'
              : 'SKIND is available throughout Denmark. Our digital platform makes it possible to receive dermatologist consultation no matter where you live.'}
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="c-faq" className="mx-auto flex max-w-page flex-col gap-4 px-4 pt-16 md:px-10 lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0 lg:pt-32 xl:px-20">
        <div data-reveal className="flex flex-col items-start gap-4 px-1 lg:col-span-4 lg:gap-5 lg:px-0">
          <h2 id="c-faq" className="font-display text-[30px] font-bold leading-[1.05] tracking-[-0.03em] lg:text-[44px] lg:leading-[1.02] lg:tracking-[-0.035em]">
            {isDa ? 'Ofte stillede spørgsmål om kontakt' : 'Frequently asked questions about contact'}
          </h2>
          <Link href={`/${lang}/faq`} className="group hidden min-h-11 items-center gap-2 text-base font-semibold text-brand lg:flex">
            {isDa ? 'Se alle FAQ' : 'View all FAQ'}
            <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
          </Link>
        </div>
        <div data-reveal className="lg:col-span-7 lg:col-start-6">
          <ContactFaq items={faqItems} />
          <Link href={`/${lang}/faq`} className="mt-4 flex min-h-11 items-center gap-2 px-1 text-[15px] font-semibold text-brand lg:hidden">
            {isDa ? 'Se alle FAQ' : 'View all FAQ'}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-page px-4 pb-[72px] pt-10 md:px-10 lg:py-32 xl:px-20">
        <div data-reveal className="flex flex-col gap-3.5 rounded-[28px] bg-brand-tint px-6 py-7 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-6 lg:rounded-[40px] lg:px-16 lg:py-14">
          <div className="flex flex-col gap-3.5 lg:col-span-8 lg:gap-3">
            <h2 className="font-display text-[30px] font-bold leading-[1.05] tracking-[-0.03em] lg:text-[52px] lg:leading-none lg:tracking-[-0.035em]">
              {isDa ? 'Klar til at komme i gang?' : 'Ready to get started?'}
            </h2>
            <p className="text-[17px] leading-normal text-body lg:text-xl">
              {isDa ? 'Download appen og få din første konsultation i dag.' : 'Download the app and get your first consultation today.'}
            </p>
          </div>
          <Link
            href={`/${lang}/download`}
            className="group mt-1 flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-brand px-[30px] text-[17px] font-semibold text-white shadow-cta transition hover:-translate-y-px hover:bg-brand-hover hover:shadow-cta-hover active:scale-[0.98] lg:col-span-3 lg:col-start-10 lg:mt-0 lg:h-[58px] lg:justify-self-end"
          >
            {isDa ? 'Download appen' : 'Download the app'}
            <ArrowRight size={18} className="transition-transform duration-150 group-hover:translate-x-[3px]" />
          </Link>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
    </>
  );
}
