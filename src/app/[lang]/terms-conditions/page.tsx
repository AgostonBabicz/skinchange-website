import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PageProps {
  params: { lang: Language };
}

const tcEnglish = `Last updated: 2026/05/14

## 1. THE AGREEMENT AND THE PARTIES

These terms apply to your use of the SKIND app. SKIND is provided by SkinChange.AI ApS, with the following details:

- **Name:** SkinChange.AI ApS
- **Company registration (CVR) no.:** 43156179
- **Address:** Hindbærhaven 48, 7120 Vejle Ø, Denmark
- **Email:** info@skinchange.ai
- **Phone:** +45 20 60 75 88
- **Website:** https://skinchange.dk/

By using SKIND, you accept these terms and our [privacy policy](https://skinchange.dk/en/privacy-policy/). If you do not accept these terms, you may not use the service.

Please read these terms carefully before using SKIND.

## 2. ABOUT THE SKIND SERVICE

SKIND is a fee-based online clinic that provides you with a dermatological assessment of your skin condition. SKIND is available to customers residing in the EU and the EEA (the European Union as well as Norway, Iceland and Liechtenstein).

When you submit a case in SKIND, it is assessed by two certified dermatologists, typically within 48 hours. Based on the images, information and answers you provide in the app, the dermatologists make a diagnosis and advise on further treatment. A responsible physician has been appointed and conducts regular reviews of the cases in accordance with applicable legislation.

SKIND is not a medical device. The app is a communication tool between you and the dermatologists — the actual diagnosis and advice are provided by licensed health professionals.

**SKIND is not suitable for emergencies.** In acute situations, always contact your own doctor, an out-of-hours medical service, or the emergency number 112.

SKIND does not replace regular check-ups with your own doctor or dermatologist, and it is your own responsibility to follow up on the advice you receive.

## 3. WHO MAY USE SKIND

To create and submit a case in your own name, you must be at least 18 years of age and legally capable of entering into a binding agreement. We verify your age based on the date of birth you provide at sign-up.

**Cases on behalf of a child:** You may create and submit a case on behalf of a child under the age of 18 if you have parental authority or are otherwise authorised to do so. In connection with creating the case, you will be asked to submit a sworn declaration to this effect in the app.

## 4. PRICE AND PAYMENT

The current price for a case is clearly displayed in the app — both during case submission and on the final confirmation button where you complete and submit the case. The price is shown inclusive of VAT and all fees.

Payment is charged via your chosen payment method when the case is submitted for dermatological assessment. Each case is invoiced separately — there is no subscription and no automatic renewal.

If we are unable to process your case due to missing, invalid or unclear information, no payment will be charged.

You will receive a receipt for the purchase in the app. If you have provided an email address, the receipt will also be sent by email.

## 5. REFUND POLICY AND RIGHT OF WITHDRAWAL

**We offer a full refund — no questions asked.** If, for any reason, you are unsatisfied with your case or change your mind about your purchase, you can have your money refunded. Simply send an email to info@skinchange.ai within 30 days of submitting your case, asking for a refund. You do not need to provide any reason. The refund will be processed as soon as possible, and no later than 14 days after we receive your request, using the same payment method you originally used.

This policy goes beyond the statutory right of withdrawal. As a consumer, you also have a statutory right of withdrawal of 14 days under the Danish Consumer Contracts Act (*forbrugeraftaleloven*), counted from the time you submit your case. You can exercise this right by giving us an unambiguous statement to that effect — for example by emailing info@skinchange.ai, calling +45 20 60 75 88, or using the standard withdrawal form attached as an appendix.

**Important — express consent to begin the assessment before the withdrawal period expires:**

Because SKIND is designed to deliver a fast dermatological assessment (typically within 48 hours), we ask you to expressly consent to the dermatologists beginning their assessment immediately — that is, before the 14-day withdrawal period has expired. You provide this consent by ticking a clearly visible checkbox at the time of payment.

Under the Danish Consumer Contracts Act, the statutory right of withdrawal ceases once the service has been fully performed with your express prior consent and your acknowledgement that the right of withdrawal will cease. Our voluntary refund policy still applies, however, so you can still request a full refund within 30 days — even after the assessment has been completed.

## 6. SECURITY AND PROCESSING OF PERSONAL DATA

Data security is a high priority for us. We have implemented technical and organisational security measures to protect your information from unauthorised access, loss or misuse. Our security protocols are reviewed regularly.

SkinChange.AI ApS is the data controller for the processing of your personal data and health data, and we comply with the General Data Protection Regulation (GDPR) and Danish health legislation. For more information about which data we process, how we process it, and your rights, please see our [privacy policy](https://skinchange.dk/en/privacy-policy/).

You are responsible for keeping your login credentials confidential so that unauthorised persons cannot access your account. If you discover that your account has been misused, please contact us as soon as possible.

## 7. YOUR RIGHTS IN CASE OF DEFECTS

If you experience errors or defects in the service, you have the rights provided under the Danish Sale of Goods Act (*købeloven*). Please contact us at info@skinchange.ai or +45 20 60 75 88 so we can investigate the issue and find a solution.

## 8. COMPLAINTS

If you wish to make a complaint, please first contact us at info@skinchange.ai. We will do our best to resolve the issue quickly.

If we cannot find a solution together, you may contact the following:

- **Complaints about consumer matters (e.g. payment, contract, delivery):**  
  The Mediation Team for Consumer Complaints / Consumer Complaints Board (*Mæglingsteamet for Forbrugerklager / Forbrugerklagenævnet*), Nævnenes Hus, Toldboden 2, 8800 Viborg, Denmark.  
  [naevneneshus.dk](https://naevneneshus.dk)

- **Complaints about health matters (e.g. the dermatologist's assessment or treatment):**  
  The Danish Agency for Patient Complaints (*Styrelsen for Patientklager*), email: stpk@stpk.dk.  
  [stpk.dk](https://stpk.dk)

- **EU Online Dispute Resolution platform:**  
  If you live in another EU or EEA country, you can file a complaint via the European Commission's Online Dispute Resolution platform: [ec.europa.eu/consumers/odr](https://ec.europa.eu/consumers/odr). Our email address is info@skinchange.ai.

## 9. CHANGES TO THESE TERMS

We may change these terms if it becomes necessary due to:

- Changes in applicable law or regulatory practice
- Changes to the functionality or content of the service
- Technical or security-related circumstances
- Changes in pricing or business model

If we make changes that are of material importance to you, we will give you individual notice **at least 30 days before the change takes effect**. The notice will be sent via the app and — if you have provided an email address — also by email. The notice will clearly describe the scope of the change and the reason for it.

If you do not accept the changes, you have the right to terminate the agreement and delete your account, free of charge, before the changes take effect. If you continue to use SKIND after the changes have taken effect, you are deemed to have accepted them.

Minor, non-material changes (e.g. clarifications or linguistic adjustments) may be made without separate notice. The current version of the terms is always available at https://skinchange.dk/en/terms-conditions/.

## 10. TERMINATION AND ACCOUNT CLOSURE

You may delete your account and uninstall the app at any time. Deletion can be done via the settings in the app or by contacting us at info@skinchange.ai.

We may terminate your access to SKIND if:

- You materially breach these terms
- You misuse the service or attempt to gain unauthorised access to other users' data
- You provide inaccurate information, including about your age or parental authority

In such cases, we will, to the extent possible, give you written notice and a reasonable opportunity to remedy the issue, unless the breach is so serious that immediate closure is necessary.

If we close your account, we will delete your personal data in accordance with the retention periods described in our privacy policy. Please note that, under Danish health legislation, we are required to retain medical record information for a statutory period even after your account has been closed.

## 11. SERVICE LIMITATIONS AND DOWNTIME

We strive to keep SKIND available around the clock, but downtime may occur in connection with maintenance, updates, security-related circumstances or technical issues. Where practically possible, we will give advance notice of planned downtime.

We may change or discontinue features in SKIND if it is necessary for technical, legal or business reasons. Material changes will be communicated in accordance with section 9.

## 12. LIABILITY

SKIND facilitates contact between you and the dermatologists and provides the technical platform. The medical content, including diagnosis and advice, is provided by the associated licensed dermatologists, who bear professional medical responsibility under Danish health legislation.

SkinChange.AI ApS is liable in accordance with the general rules of Danish law on damages. However, we are not liable for:

- Indirect losses, including loss of business, loss of profit, or loss of data
- Losses caused by circumstances beyond our reasonable control (force majeure), e.g. failures at third-party providers, power outages, natural disasters or government action
- Losses you could have avoided by following our instructions or by using an updated version of the app

Nothing in these terms limits our liability in the event of:

- Intent or gross negligence
- Personal injury caused by us
- Liability that cannot be waived under mandatory law, including consumer and health law

## 13. INTELLECTUAL PROPERTY AND LICENCE

SKIND and the content in the app, including text, graphics, design and source code, belong to SkinChange.AI ApS. You are granted a personal, non-exclusive and non-transferable right to use the app for personal, non-commercial purposes, as long as you comply with these terms.

You may not copy, distribute, modify or otherwise exploit the content in the app for commercial purposes without our prior written consent.

## 14. GOVERNING LAW AND JURISDICTION

These terms are governed by Danish law. Any disputes that cannot be resolved amicably or through the complaint bodies mentioned in section 8 shall be settled by the Danish courts, with the District Court of Kolding (*Retten i Kolding*) as the court of first instance.

As a consumer, you always have the right to bring proceedings at the court of your place of residence, and you are protected by the mandatory consumer protection rules applicable in your country of residence within the EU or EEA.

## 15. CONTACT

If you have questions, comments or wish to file a complaint, please contact us:

- **Email:** info@skinchange.ai
- **Phone:** +45 20 60 75 88
- **Post:** SkinChange.AI ApS, Hindbærhaven 48, 7120 Vejle Ø, Denmark

> **Please note:** Do not send health information or other sensitive personal data via ordinary email. Use the app to communicate about your case.

---

## APPENDIX — STANDARD WITHDRAWAL FORM

*(this form should only be completed and returned if you wish to exercise the right of withdrawal)*

**To:**

> SkinChange.AI ApS  
> Hindbærhaven 48  
> 7120 Vejle Ø  
> Denmark  
> Email: info@skinchange.ai

I/we hereby give notice that I/we wish to exercise my/our right of withdrawal in connection with my/our agreement for the following service:

___________________________________________________________

**Ordered on:**

___________________________________________________________

**Name of consumer(s):**

___________________________________________________________

**Address of consumer(s):**

___________________________________________________________

**Signature of consumer(s)** *(only if this form is notified on paper)*:

___________________________________________________________

**Date:**

___________________________________________________________
`;

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Vilkår & Betingelser | SKIND' : 'Terms & Conditions | SKIND',
    description: isDa
      ? 'Læs vores vilkår og betingelser for brug af SKIND platformen.'
      : 'Read our terms and conditions for using the SKIND platform.',
  };
}

export default function TermsPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  return (
    <main className="min-h-screen bg-white">
      <Navigation lang={lang} />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display text-center">
            {isDa ? 'Vilkår & Betingelser' : 'Terms & Conditions'}
          </h1>
          <p className="text-gray-500 text-center mb-16">
            {isDa ? 'Sidst opdateret: 14. maj 2026' : 'Last updated: 14 May 2026'}
          </p>

          <div className="prose prose-lg max-w-none text-gray-600
            prose-headings:text-[#1a237e] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:mb-4 prose-p:text-gray-600
            prose-a:text-[#304FFE] prose-a:underline hover:prose-a:text-[#1a237e]
            prose-strong:text-gray-700
            prose-ul:list-disc prose-ul:pl-6 prose-li:mb-1
            prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-1
            prose-blockquote:border-l-4 prose-blockquote:border-[#304FFE] prose-blockquote:pl-4 prose-blockquote:text-gray-500
            prose-hr:border-gray-300 prose-hr:my-8
            prose-code:text-[#1a237e] prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{tcEnglish}</ReactMarkdown>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
