import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import { Metadata } from 'next';
import { Mail, MapPin, Building2 } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: { lang: Language };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const isDa = params.lang === 'da';
  
  return {
    title: isDa 
      ? "Kontakt os | SkinChange" 
      : "Contact Us | SkinChange",
    description: isDa
      ? "Kontakt SkinChange for spørgsmål om online hudkonsultation. Email: info@skinchange.ai. Vi besvarer din henvendelse inden for 24 timer."
      : "Contact SkinChange for questions about online skin consultation. Email: info@skinchange.ai. We respond within 24 hours.",
    alternates: {
      canonical: `https://www.skinchange.dk/${params.lang}/contact`,
    },
    openGraph: {
      title: isDa ? "Kontakt os | SkinChange" : "Contact Us | SkinChange",
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

  const faqItems = isDa ? [
    {
      q: "Hvor hurtigt får jeg svar?",
      a: "Vi besvarer alle henvendelser inden for 24 timer på hverdage. For teknisk support anbefaler vi at kontakte os via appen."
    },
    {
      q: "Kan jeg ringe til jer?",
      a: "Vi foretrækker kontakt via email for at sikre dokumentation og kvalitetssikring. Ved akutte spørgsmål kan du også bruge chat-funktionen i appen."
    },
    {
      q: "Hvor finder jeg mere information?",
      a: "Besøg vores FAQ-side eller download appen for at se, hvordan det virker."
    }
  ] : [
    {
      q: "How quickly will I get a response?",
      a: "We respond to all inquiries within 24 hours on business days. For technical support, we recommend contacting us through the app."
    },
    {
      q: "Can I call you?",
      a: "We prefer email contact to ensure documentation and quality assurance. For urgent questions, you can also use the chat function in the app."
    },
    {
      q: "Where can I find more information?",
      a: "Visit our FAQ page or download the app to see how it works."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navigation lang={lang} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a237e] to-[#304ffe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isDa ? 'Kontakt os' : 'Contact Us'}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {isDa 
              ? 'Har du spørgsmål? Vi er her for at hjælpe dig.' 
              : 'Have questions? We are here to help you.'}
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#304ffe]/10 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-[#304ffe]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isDa ? 'Email' : 'Email'}
              </h3>
              <p className="text-gray-600 mb-4">
                {isDa 
                  ? 'Send os en email, og vi svarer inden for 24 timer.' 
                  : 'Send us an email, and we will respond within 24 hours.'}
              </p>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-[#304ffe] font-semibold hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#304ffe]/10 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-[#304ffe]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isDa ? 'Virksomhed' : 'Company'}
              </h3>
              <p className="text-gray-600 mb-2">{contactInfo.company}</p>
              <p className="text-gray-500 text-sm">
                CVR: {contactInfo.cvr}
              </p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-[#304ffe]/10 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-[#304ffe]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {isDa ? 'Beliggenhed' : 'Location'}
              </h3>
              <p className="text-gray-600">
                {isDa 
                  ? 'Vi opererer i hele Danmark fra vores digitale platform.' 
                  : 'We operate throughout Denmark from our digital platform.'}
              </p>
              <p className="text-gray-500 mt-2">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-[21/9] w-full relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2263.0!2d9.58!3d55.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c0c8f0e4c6b5f%3A0x5c3e2d9f3c1a8e9d!2sHindb%C3%A6rhaven%2048%2C%207120%20Vejle%20%C3%98%2C%20Denmark!5e0!3m2!1sen!2sdk!4v1700000000000!5m2!1sen!2sdk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={isDa ? "Kort over Vejle" : "Map of Vejle"}
                className="absolute inset-0"
              />
            </div>
            <div className="p-6 md:p-8 bg-gray-50">
              <p className="text-gray-600 text-center">
                {isDa 
                  ? 'SkinChange er tilgængelig i hele Danmark. Vores digitale platform gør det muligt at modtage hudlægekonsultation uanset hvor du bor.' 
                  : 'SkinChange is available throughout Denmark. Our digital platform makes it possible to receive dermatologist consultation no matter where you live.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {isDa ? 'Ofte stillede spørgsmål om kontakt' : 'Frequently asked questions about contact'}
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${lang}/faq`}
              className="inline-flex items-center text-[#304ffe] font-semibold hover:underline"
            >
              {isDa ? 'Se alle FAQ' : 'View all FAQ'}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#1a237e] to-[#304ffe]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {isDa ? 'Klar til at komme i gang?' : 'Ready to get started?'}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {isDa 
              ? 'Download appen og få din første konsultation i dag.' 
              : 'Download the app and get your first consultation today.'}
          </p>
          <Link
            href={`/${lang}/download`}
            className="inline-flex items-center px-8 py-4 bg-white text-[#1a237e] rounded-full font-semibold text-lg hover:bg-white/90 transition-colors"
          >
            {isDa ? 'Download appen' : 'Download the app'}
          </Link>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
