'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Language } from '@/lib/i18n';
import { X } from 'lucide-react';

interface PeterSectionProps {
  lang: Language;
}

export default function PeterSection({ lang }: PeterSectionProps) {
  const isDa = lang === 'da';
  const [showFullBio, setShowFullBio] = useState(false);

  const shortText = 'Expert in dermatology, laser treatments and skin cancer. Adjunct professor, Aalborg University. 300+ publications, 500+ international lectures.';

  const fullBio = `Peter Bjerring, Specialist in skin diseases, professor, Dr.med.

Training
1980: Master of Science (Med.), Aarhus University
1988: Specialist in dermatovenerology, Denmark
2001: Specialist in dermatovenerology, Norway
2004: Specialist in dermato-venereology, Netherlands

Experience
1993–2018: Head of Clinic, Dermatology Department (HudCenter Mølholm), Private Hospital Mølholm, Vejle, Copenhagen and Aarhus
2001–2007: Managing Director, Mølholm Private Hospital, Vejle and Aarhus
2004–2018: Chief Physician and Chief Medical Officer, Mølholm Private Hospital, Vejle and Aarhus
2018–Present: Clinical Professor, Senior Consultant and Specialist, Department of Dermatology, Aalborg University Hospital
2018–2022: Chair Professor in Dermato-Venereology, Aalborg University
2022–Present: Adjunct professor, Aalborg University

Specialization
Classical dermatology (Common skin diseases)
Dermatological laser surgery
Skin cancer treatment (medical, surgical and phototherapy)
Cosmetic laser treatment
Cosmetic medical dermatology
Photodermatology

Research and teaching
Has published more than 300 scientific articles within skin diseases, laser treatment and skin cancer treatment
Has given more than 500 lectures at international scientific meetings and congresses worldwide

Professional memberships
Danish Dermatological Society (DDS)
European Academy for Dermato-Venereology (EADV)
Danish Dermatologists' Organization (DDO)
European Society for Lasers and Energy-based Devices (ESLD - past president)
American Academy of Dermatology (AAD)
American Society for Lasers in Surgery and Medicine (ASLMS)
The International Peeling Society

Recognitions
Knight of the Dannebrog
Danish Dermatological Society's Honorary Award
Caroline and William Mark Memorial Award (Honorary award from the American Society for Lasers In Medicine and Surgery)
William Nielsen Prize`;

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Peter */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image src="/skinchange-website/Peter.jpeg" alt="Peter Bjerring" fill className="object-cover" />
            </div>
          </div>
          <div>
            <p className="text-[#304ffe] font-semibold mb-2">{isDa ? 'Mød vores førende hudlæge' : 'Meet our leading dermatologist'}</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">Peter Bjerring</h2>
            <p className="text-lg text-gray-600 mb-6">{shortText}</p>
            <button onClick={() => setShowFullBio(true)} className="text-[#304ffe] font-semibold hover:underline">{isDa ? 'Læs mere' : 'Read more'}</button>
          </div>
        </div>

        {/* Brian */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a237e] mb-4 font-display">Brian Vangsgaard</h2>
            <p className="text-[#304ffe] font-semibold mb-4">CEO</p>
            <p className="text-lg text-gray-600">
              Motiveret af at have haft hudkræft 3 gange, hvor jeg har oplevet et udfordrende behandlingsforløb samt at hudkræften blev overset og fejldiagnosticeret af ellers dygtige læger, valgte jeg at kaste mig ind i at blive en del af løsningen, der vil hjælpe alle med hudproblemer – store som små.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
              <Image src="/skinchange-website/About_us_Brian.png" alt="Brian Vangsgaard" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {showFullBio && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl max-h-[80vh] overflow-y-auto p-8 relative">
            <button onClick={() => setShowFullBio(false)} className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"><X className="w-5 h-5" /></button>
            <h3 className="text-2xl font-bold text-[#1a237e] mb-4">Peter Bjerring</h3>
            <pre className="text-gray-600 whitespace-pre-wrap font-sans text-sm leading-relaxed">{fullBio}</pre>
          </div>
        </div>
      )}
    </section>
  );
}
