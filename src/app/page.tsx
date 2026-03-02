import { ArrowRight, Shield, Clock, CheckCircle, Stethoscope, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-primary">SkinChange</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hvordan-det-virker" className="text-gray-700 hover:text-primary transition-colors">Hvordan det virker</a>
              <a href="#for-patienter" className="text-gray-700 hover:text-primary transition-colors">For patienter</a>
              <a href="#for-laeger" className="text-gray-700 hover:text-primary transition-colors">For læger</a>
              <a href="#om-os" className="text-gray-700 hover:text-primary transition-colors">Om os</a>
            </div>
            <button className="btn-primary hidden md:block">
              Kom i gang
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-accent font-semibold text-sm">✓ MitID Verificeret</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6">
                Danmarks førende<br />
                <span className="text-accent">online hudklinik</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Få en professionel huddiagnose inden for <span className="font-bold text-accent">48 timer</span>. 
                Direkte fra certificerede hudlæger til din telefon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl">
                  Start din konsultation
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-xl transition-all">
                  Se hvordan det virker
                </button>
              </div>
              <div className="flex items-center gap-6 mt-10 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Sikker & krypteret</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>48 timers garanti</span>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative bg-white rounded-3xl shadow-2xl p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-lg">SKIND</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-accent/50 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Velkommen til SKIND</h3>
                  <p className="text-primary-100 mb-6">Din personlige hudklinik i lommen</p>
                  <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors">
                    Ny sag
                  </button>
                  <div className="mt-6 space-y-3">
                    <div className="bg-primary-800 rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-primary-200">Sag fra 26/1/2026</p>
                        <p className="text-sm">Status: Vurderet ✓</p>
                      </div>
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-primary-900 font-bold py-2 px-4 rounded-full shadow-lg">
                15.000+ patienter
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">15.000+</p>
              <p className="text-gray-600 mt-2">Behandlede sager</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">48</p>
              <p className="text-gray-600 mt-2">Timers diagnose</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-gray-600 mt-2">Certificerede læger</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">4.8/5</p>
              <p className="text-gray-600 mt-2">Patienttilfredshed</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="hvordan-det-virker" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Så nemt er det
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tre simple trin fra dit første symptom til din behandlingsplan
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload billeder",
                description: "Tag klare billeder af dit hudproblem og besvar nogle simple spørgsmål om dine symptomer.",
                icon: Smartphone,
              },
              {
                step: "2",
                title: "Lægen vurderer",
                description: "En certificeret hudlæge gennemgår din sag og stiller en diagnose inden for 48 timer.",
                icon: Stethoscope,
              },
              {
                step: "3",
                title: "Få behandling",
                description: "Modtag din personlige behandlingsplan med ICD-10 kode og recept direkte i appen.",
                icon: CheckCircle,
              },
            ].map((item) => (
              <div key={item.step} className="card text-center group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-700 transition-colors">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 bg-accent text-primary-900 rounded-full flex items-center justify-center mx-auto -mt-14 mb-4 font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Patients Section */}
      <section id="for-patienter" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                For patienter
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Slip for lange ventetider og besværlige kørsler til hudlægen. 
                Få hjælp når du har brug for det, direkte fra din telefon.
              </p>
              <ul className="space-y-4">
                {[
                  "Diagnose inden for 48 timer",
                  "Ingen ventetid på hudlæge",
                  "Sikker MitID login",
                  "Personlig behandlingsplan",
                  "Recept sendt direkte til apoteket",
                  "Opfølgning inkluderet",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary mt-8">
                Opret gratis profil
              </button>
            </div>
            <div className="relative">
              <div className="bg-primary rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Hvad koster det?</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-3xl font-bold">395 kr</p>
                    <p className="text-primary-200">per konsultation</p>
                  </div>
                  <p className="text-sm text-primary-200">
                    Inkluderer diagnose, behandlingsplan og opfølgning.
                    Receptgebyr tillægges ved behov.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>Tilskud fra Sygeforsikringen &quot;danmark&quot;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Doctors Section */}
      <section id="for-laeger" className="section-padding gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              For læger
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Bliv en del af Danmarks førende digitale dermatologiske platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fleksibel arbejdstid",
                description: "Vurder patienter når det passer dig. Ingen faste konsultationstider.",
              },
              {
                title: "Effektivt arbejdsflow",
                description: "Intelligent platform med strukturerede sager og automatisk ICD-10 kodning.",
              },
              {
                title: "Konkurrencedygtig honorar",
                description: "Godtgørelse per vurderet sag. Mulighed for fastansættelse.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all">
              Bliv SkinChange læge
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary-900" />
                </div>
                <span className="text-2xl font-bold">SkinChange</span>
              </div>
              <p className="text-gray-400 text-sm">
                Danmarks førende online dermatologiske klinik
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">For patienter</a></li>
                <li><a href="#" className="hover:text-white">For læger</a></li>
                <li><a href="#" className="hover:text-white">Priser</a></li>
                <li><a href="#" className="hover:text-white">App download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Om os</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Virksomhed</a></li>
                <li><a href="#" className="hover:text-white">Kontakt</a></li>
                <li><a href="#" className="hover:text-white">Presse</a></li>
                <li><a href="#" className="hover:text-white">Karriere</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Hjælpecenter</a></li>
                <li><a href="#" className="hover:text-white">Privatlivspolitik</a></li>
                <li><a href="#" className="hover:text-white">Handelsbetingelser</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 SkinChange. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
