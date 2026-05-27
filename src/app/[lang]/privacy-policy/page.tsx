import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Language } from '@/lib/i18n';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PageProps {
  params: { lang: Language };
}

const ppEnglish = `Last updated: 2026/05/14

## 1. INTRODUCTION

This privacy policy describes how SkinChange.AI ApS processes your personal data when you use the SKIND app. We process your data in accordance with Regulation (EU) 2016/679 (the General Data Protection Regulation, GDPR), the Danish Data Protection Act (databeskyttelsesloven), the Danish Health Act (sundhedsloven), the Danish Act on Authorisation of Healthcare Professionals (autorisationsloven), and the Danish Patient Records Order (journalføringsbekendtgørelsen).

SKIND is an online dermatology clinic, and a large part of the data we process is health data. We take the protection of this data very seriously.

## 2. DATA CONTROLLER

**SkinChange.AI ApS** is the data controller responsible for the processing of your personal data.

- **Name:** SkinChange.AI ApS
- **Company registration (CVR) no.:** 43156179
- **Address:** Hindbærhaven 48, 7120 Vejle Ø, Denmark
- **Email:** info@skinchange.ai
- **Phone:** +45 20 60 75 88
- **Website:** https://skinchange.dk/

For questions about the processing of personal data, you can contact us via the email or phone above. Please note: Do not send health information or other sensitive personal data via ordinary email. Use the app to communicate about your case.

**Data Protection Officer (DPO):** Brian Vangsgaard. The DPO can be contacted at:

- **Email:** info@skinchange.ai
- **Phone:** +45 20 60 75 88
- **Post:** SkinChange.AI ApS, attn. DPO Brian Vangsgaard, Hindbærhaven 48, 7120 Vejle Ø, Denmark

## 3. GEOGRAPHIC SCOPE

SKIND is available to customers residing in the EU and the EEA (the European Union as well as Norway, Iceland and Liechtenstein). If you attempt to create a case from a country outside the EU/EEA, you will be informed that the service is not available to you.

## 4. WHAT DATA WE PROCESS AND WHY

We only collect the data necessary to provide SKIND as a safe and lawful healthcare service. Below is an overview of the categories of data we process, the purposes for which we process them, the legal basis for the processing, and how long we retain them.

### 4.1 Identity and contact information

**What data:** Name, date of birth, address, and optionally phone number and email address.

**Purpose:** To verify your identity and age, to create an account in the app, to fulfil the agreement with you, and to be able to contact you about your case.

**Legal basis:** GDPR article 6(1)(b) (performance of a contract) and (c) (compliance with a legal obligation under the Danish Health Act and Authorisation Act regarding patient identification).

**Retention:** In the patient record for at least 10 years from the most recent entry, in accordance with section 15(1) of the Danish Patient Records Order.

**Note:** Name, date of birth and address are mandatory for us to create a case — these data are required by health legislation for patient identification. Email and phone number are optional; without an email, we communicate exclusively via the app.

### 4.2 Health information and images

**What data:** Images of your skin that you have taken and uploaded yourself, descriptions of symptoms, health information you provide in the app, and the dermatologists' assessment, diagnosis and advice. You decide which images you take and upload, and what is visible in them.

**Purpose:** To enable our dermatologists to assess your skin condition, make a diagnosis and provide advice, and to maintain a patient record as required by law.

**Legal basis:** GDPR article 9(2)(h) (processing for the purposes of medical diagnosis and the provision of healthcare), in conjunction with chapter 9 of the Danish Health Act (concerning the processing of health information) and chapter 6 of the Danish Act on Authorisation of Healthcare Professionals (concerning patient records).

**Retention:** In the patient record for at least 10 years from the most recent entry, in accordance with section 15(1) of the Danish Patient Records Order. The retention obligation applies even if you delete your account, and may be extended if a complaint, supervisory or compensation case arises.

### 4.3 Payment and transaction information

**What data:** Amount, date, payment method, transaction ID. Please note that we do not store your card details — these are handled directly by our payment provider, Stripe.

**Purpose:** To process payments for cases, to send receipts, to handle refunds, and to comply with bookkeeping obligations.

**Legal basis:** GDPR article 6(1)(b) (performance of a contract) and (c) (Danish Bookkeeping Act).

**Retention:** 5 years from the end of the financial year, in accordance with section 12(5) of the Danish Bookkeeping Act.

### 4.4 Support communication

**What data:** The content of your communications with us, e.g. via email or the app's support function.

**Purpose:** To respond to your enquiries, handle complaints, and document our communication.

**Legal basis:** GDPR article 6(1)(b) (performance of a contract) and 6(1)(f) (our legitimate interest in documenting communication for the purpose of potential dispute resolution).

**Retention:** Up to 3 years after the case has been closed, unless the communication forms part of the patient record, in which case it follows the retention period in section 4.2.

### 4.5 Technical and usage data

**What data:** Device type, operating system and version, app version, language settings, IP address, and anonymised information about how you use the app.

**Purpose:** To operate and improve the app, to troubleshoot technical issues, and to ensure the stability and security of the app.

**Legal basis:** GDPR article 6(1)(f) (our legitimate interest in operating and improving the service).

**Retention:** Up to 12 months.

### 4.6 Marketing

**What data:** Email address (if provided), marketing preferences.

**Purpose:** To send you newsletters, updates and information about SKIND, if you have consented to it.

**Legal basis:** GDPR article 6(1)(a) (consent), cf. section 10 of the Danish Marketing Practices Act.

**Retention:** Until you withdraw your consent. You can unsubscribe from marketing at any time via a link in each email, via the settings in the app, or by writing to info@skinchange.ai.

## 5. AUTOMATED DECISION-MAKING AND PROFILING

Even though our company name is SkinChange.AI, all medical assessments and diagnoses are made by human, licensed dermatologists. There is no automated decision-making or profiling within the meaning of GDPR article 22.

## 6. DATA PROCESSORS AND THIRD PARTIES

We do not share your personal data with third parties for marketing purposes. Your health information is not shared outside the treatment context unless you have given your express consent, or we are legally required to do so.

However, we do use a number of data processors who process your personal data on our behalf under a written data processing agreement (GDPR article 28). These include:

- **Dermatologists:** The licensed dermatologists who assess your case. They bear independent medical responsibility under the Danish Act on Authorisation of Healthcare Professionals.
- **Stripe Payments Europe Ltd. (Ireland)** with sub-processors in the USA — payment processing.
- **Firebase (Google Cloud):** Secure hosting and storage of data.
- **ActiveCampaign:** Sending of emails, including marketing and notifications.

We will update this list when we change data processors. A complete and up-to-date list of our data processors can be obtained by contacting info@skinchange.ai.

**Disclosure in special cases:** We may disclose your data if we are legally required to do so — for example to the Danish Agency for Patient Complaints (Styrelsen for Patientklager) in connection with a complaint, to the Danish Patient Safety Authority (Styrelsen for Patientsikkerhed) in connection with supervision, to the police pursuant to a court order, or to other public authorities with legal authority.

## 7. TRANSFERS TO THIRD COUNTRIES

Several of our data processors are located outside the EU/EEA, primarily in the USA. This applies to Firebase Cloud Messaging, Firebase Analytics and Firestore (all operated by Google), ActiveCampaign, and Stripe via sub-processors in the USA. Transfers to countries outside the EU/EEA take place on one of the following grounds:

- EU-US Data Privacy Framework (DPF), where the data processor is certified, or
- Standard Contractual Clauses approved by the European Commission, supplemented with additional technical measures.

You can request a copy of the transfer basis by contacting info@skinchange.ai.

## 8. COOKIES AND SIMILAR TECHNOLOGIES

We use cookies and similar tracking technologies on our website skinchange.dk and to a limited extent in the app. Cookies are categorised by purpose:

- **Necessary cookies:** Required for the website and the app to function. These are set without consent, in accordance with section 3(3) of the Danish Cookie Order (cookiebekendtgørelsen).
- **Statistics/analytics cookies:** Help us understand how the service is used. Only set with your consent.
- **Marketing cookies:** Used for targeted marketing. Only set with your consent.

On the website, you can give and withdraw your cookie consent via the cookie banner or via your browser settings. A complete list of the cookies we use, with purposes and durations, can be found at https://skinchange.dk/en/cookie-policy/.

## 9. SECURITY

We implement technical and organisational measures to protect your personal data against unauthorised access, alteration, loss or disclosure:

- **Encryption:** All communication between the app and our servers is protected by TLS encryption (HTTPS). Health information and images are encrypted both in transit and at rest.
- **Access control:** Only authorised personnel and the dermatologists assessing the specific case have access to your data. Access is logged.
- **Two-factor authentication:** All employees use two-factor authentication when accessing systems that contain personal data.
- **Security reviews:** Our security measures and data processing agreements are reviewed regularly.
- **Backup and business continuity:** We have procedures for backup and recovery of data.

## 10. PERSONAL DATA BREACHES

If a personal data breach occurs, we will notify the Danish Data Protection Agency (Datatilsynet) within 72 hours where feasible, in accordance with GDPR article 33. If the breach is likely to result in a high risk to your rights and freedoms, we will notify you without undue delay, in accordance with GDPR article 34. The notification will include a description of the nature of the breach, the likely consequences, and the measures we have taken.

## 11. YOUR RIGHTS UNDER GDPR

You have the following rights regarding your personal data:

- **Right of access (article 15):** You can request to be informed of what data we process about you, and to receive a copy.
- **Right to rectification (article 16):** You can request that inaccurate data be corrected.
- **Right to erasure (article 17):** You can request that your data be deleted. Please note: For health information and data in your patient record, this right is limited by the Danish Patient Records Order, which requires retention for at least 10 years. You can, however, have inaccurate information corrected.
- **Right to restriction (article 18):** You may in certain cases request that we restrict the processing of your data.
- **Right to object (article 21):** You may object to processing based on legitimate interest, and you can always opt out of marketing.
- **Right to data portability (article 20):** For data we process based on consent or contract, you can request to receive it in a structured, commonly used and machine-readable format.
- **Right to withdraw consent (article 7):** Where we process data based on your consent (e.g. for marketing), you can withdraw your consent at any time. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.

To exercise your rights, contact us at info@skinchange.ai or +45 20 60 75 88. We will respond to your request without undue delay and at the latest within one month. We may in certain cases ask for documentation of your identity before disclosing data.

## 12. YOUR RIGHTS UNDER THE DANISH HEALTH ACT

As a patient using SKIND, you also have rights under the Danish Health Act (sundhedsloven), which supplement the GDPR:

- **Right to access your patient record (sections 37-39 of the Danish Health Act):** You have the right to access your patient record.
- **Right to information about who has accessed your record (section 42a of the Danish Health Act):** You can be informed about which healthcare professionals have accessed your record.
- **Professional secrecy:** Healthcare professionals are bound by strict professional secrecy under section 40 of the Danish Health Act.

Requests for access to the patient record can be sent to info@skinchange.ai.

## 13. CHILDREN AND CASES ON BEHALF OF CHILDREN

SKIND is generally intended for persons aged 18 and over. We verify your age based on the date of birth you provide when signing up.

You may, however, create a case on behalf of a child under the age of 18 if you have parental authority or are otherwise authorised to do so. In that case, you submit a sworn declaration to this effect in the app in connection with creating the case.

When a case is created for a child, the child's data is processed on the following grounds:

- **Identity information:** GDPR article 6(1)(c) (legal obligation under the Danish Health Act)
- **Health information:** GDPR article 9(2)(h) (healthcare)
- **Consent** is given by the holder of parental authority on behalf of the child, in accordance with section 17 of the Danish Health Act on minors' consent to treatment.

The child's data is retained according to the same rules as other patient records (see section 4.2).

## 14. COMPLAINTS

If you are dissatisfied with how we process your personal data, we ask that you first contact us so we can try to resolve the issue. If you are not satisfied with how we handle your complaint, you can complain to:

> **Datatilsynet (the Danish Data Protection Agency)**
> Carl Jacobsens Vej 35
> 2500 Valby
> **Phone:** +45 33 19 32 00
> **Email:** dt@datatilsynet.dk
> [datatilsynet.dk](https://www.datatilsynet.dk)

For complaints about medical matters (e.g. the dermatologist's assessment or treatment), you can contact Styrelsen for Patientklager (the Danish Agency for Patient Complaints), email: stpk@stpk.dk, [stpk.dk](https://stpk.dk).

## 15. CHANGES TO THIS PRIVACY POLICY

We may update this privacy policy from time to time — for example if we change our service, change data processors, or if legislation changes. For material changes, we will notify you:

- Via a notification in the app, and
- If you have provided an email address, also by email

The current version is always available at https://skinchange.dk/en/privacy-policy/. The date of the most recent update is shown at the top of the document.

If the changes require your consent, we will ask for it actively — it is not sufficient that you continue to use the service.

## 16. CONTACT

Questions about this privacy policy or about our processing of your personal data can be directed to:

- **Email:** info@skinchange.ai
- **Phone:** +45 20 60 75 88
- **Post:** SkinChange.AI ApS, Hindbærhaven 48, 7120 Vejle Ø, Denmark

> **Please note:** Do not send sensitive information via ordinary email. Use the app to communicate about your case.

---

*This privacy policy has been prepared in accordance with the General Data Protection Regulation (GDPR), the Danish Data Protection Act, the Danish Health Act, the Danish Act on Authorisation of Healthcare Professionals, the Danish Patient Records Order, the Danish Bookkeeping Act, the Danish Marketing Practices Act, and the Danish Cookie Order. In case of any discrepancy between the Danish and English versions of this privacy policy, the Danish version shall prevail.*`;

export async function generateMetadata({ params }: { params: { lang: Language } }): Promise<Metadata> {
  const isDa = params.lang === 'da';
  return {
    title: isDa ? 'Privatlivspolitik | SKIND' : 'Privacy Policy | SKIND',
    description: isDa
      ? 'Læs vores privatlivspolitik for at forstå, hvordan vi behandler dine personoplysninger.'
      : 'Read our privacy policy to understand how we process your personal data.',
  };
}

export default function PrivacyPage({ params: { lang } }: PageProps) {
  const isDa = lang === 'da';

  return (
    <main className="min-h-screen bg-white">
      <Navigation lang={lang} />

      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-6 font-display text-center">
            {isDa ? 'Privatlivspolitik' : 'Privacy Policy'}
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
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{ppEnglish}</ReactMarkdown>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
