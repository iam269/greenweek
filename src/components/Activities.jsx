import { useState } from "react";
import { Recycle, TreePine, Droplets, Lightbulb, Users, Sprout, X, Calendar, MapPin, Users as UsersIcon } from "lucide-react";

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const activities = [
    {
      icon: Recycle,
      title: "Colectare Selectivă",
      description: "Organizăm sesiuni de colectare selectivă în comunitate pentru plastic, hârtie și sticlă.",
      color: "from-primary to-primary/80",
      details: {
        fullDescription: "Colectarea selectivă este procesul de separare a deșeurilor în diferite categorii pentru a facilita reciclarea. Acest lucru reduce cantitatea de deșeuri care ajung la groapa de gunoi și conservă resursele naturale. Materialele reciclabile includ plastic, hârtie, sticlă, metal și carton.",
        benefits: "Reduce poluarea, economisește resurse, creează locuri de muncă în industria reciclării",
        howToParticipate: "Separă deșeurile acasă, spală recipientele, folosește containerele speciale din oraș",
        environmentalImpact: "Previne emisiile de CO2 și reduce consumul de apă și energie",
        funFacts: [
          "România reciclează doar 10% din deșeurile municipale, față de media UE de 40%",
          "O tonă de hârtie reciclată salvează 17 copaci",
          "Reciclarea unui singur borcan de sticlă economisește energie pentru 4 ore de televizor"
        ],
        contributors: "500,000,000"
      }
    },
    {
      icon: TreePine,
      title: "Plantare Copaci",
      description: "Plantăm 100 de copaci în parcurile locale pentru un aer mai curat și un oraș mai verde.",
      color: "from-accent to-accent/80",
      details: {
        fullDescription: "Plantarea copacilor contribuie la îmbunătățirea calității aerului, reducerea efectului de seră și crearea de habitate pentru animale. Copacii absorb dioxidul de carbon și produc oxigen, ajutând la combaterea schimbărilor climatice.",
        benefits: "Îmbunătățește calitatea aerului, reduce temperatura urbană, oferă umbră și frumusețe",
        howToParticipate: "Donează copaci, participă la evenimente de plantare, îngrijește copacii existenți",
        environmentalImpact: "Un copac matur poate absorbi până la 22 kg de CO2 pe an",
        funFacts: [
          "Un copac produce oxigen pentru 2 oameni pe an",
          "Pădurile urbane reduc temperatura cu până la 8°C în timpul verii",
          "Un copac poate filtra între 10 și 60 kg de poluanți pe an"
        ],
        contributors: "150,000,000"
      }
    },
    {
      icon: Droplets,
      title: "Curățare Comunitate",
      description: "Campanie de curățare a râurilor și parcurilor pentru protejarea naturii locale.",
      color: "from-primary/80 to-accent",
      details: {
        fullDescription: "Curățarea comunității implică îndepărtarea deșeurilor din spațiile publice pentru a preveni poluarea și a proteja ecosistemele locale. Acest lucru include curățarea parcurilor, malurilor râurilor și zonelor rurale.",
        benefits: "Îmbunătățește aspectul orașului, protejează animalele sălbatice, previne inundațiile",
        howToParticipate: "Participă la acțiuni de voluntariat, nu arunca gunoi în natură, raportează problemele",
        environmentalImpact: "Reduce poluarea vizuală și chimică, protejează biodiversitatea",
        funFacts: [
          "Un singur muc de țigară poluează 50 litri de apă",
          "Plasticele se descompun în 500-1000 de ani în natură",
          "Curățarea unui râu previne inundațiile și protejează ecosistemele acvatice"
        ],
        contributors: "114,000,000"
      }
    },
    {
      icon: Lightbulb,
      title: "Workshop Eco",
      description: "Ateliere interactive despre reciclare creativă și reutilizarea materialelor.",
      color: "from-accent/80 to-primary",
      details: {
        fullDescription: "Workshop-urile eco sunt sesiuni interactive unde participanții învață despre reciclare prin activități practice. Se creează obiecte decorative din materiale reciclabile, se învață despre impactul deșeurilor asupra mediului.",
        benefits: "Educație practică, dezvoltare creativității, conștientizare ecologică",
        howToParticipate: "Înscrie-te la workshop-uri, adu materiale reciclabile, împărtășește cunoștințele",
        environmentalImpact: "Încurajează reutilizarea materialelor și reduce consumul de resurse noi",
        funFacts: [
          "Din materiale reciclabile se pot crea opere de artă valoroase",
          "Un workshop eco poate schimba comportamentul a 20-30 de persoane",
          "Reciclarea creativă reduce cu 70% deșeurile care ajung la groapa de gunoi"
        ],
        contributors: "5,000,000"
      }
    },
    {
      icon: Users,
      title: "Voluntariat Verde",
      description: "Recrutăm voluntari pentru diverse activități eco și educație de mediu.",
      color: "from-primary to-accent/70",
      details: {
        fullDescription: "Voluntariatul verde reprezintă implicarea cetățenilor în activități de protecție a mediului. Voluntarii contribuie la proiecte de împădurire, curățenie și educație ecologică, făcând diferența în comunitatea lor.",
        benefits: "Dezvoltare personală, networking, satisfacția de a contribui la binele comun",
        howToParticipate: "Completează formularul de voluntariat, participă la training-uri, implică-te în proiecte",
        environmentalImpact: "Multiplică impactul activităților ecologice prin forța comunității",
        funFacts: [
          "Voluntarii eco salvează anual echivalentul a 10.000 de copaci",
          "Un voluntar poate inspira până la 50 de persoane să se implice",
          "Programele de voluntariat reduc depresia cu 20% la participanți"
        ],
        contributors: "860,000,000"
      }
    },
    {
      icon: Sprout,
      title: "Grădină Comunitară",
      description: "Creăm o grădină comunitară folosind compost din deșeuri organice reciclate.",
      color: "from-accent/70 to-primary/80",
      details: {
        fullDescription: "Grădinile comunitare folosesc compost din deșeurile organice pentru a crea spații productive. Acest proiect demonstrează cum deșeurile pot fi transformate în hrană sănătoasă și promovează agricultura urbană sustenabilă.",
        benefits: "Alimente organice locale, educație despre compostare, spații verzi în oraș",
        howToParticipate: "Contribuie cu compost, ajută la îngrijirea grădinii, cumpără produsele",
        environmentalImpact: "Reduce deșeurile organice la groapa de gunoi, promovează agricultura sustenabilă",
        funFacts: [
          "Compostul din bucătărie poate hrăni o grădină întreagă",
          "Grădinile comunitare reduc foamea în comunități cu 30%",
          "Un kg de compost înlocuiește 1 kg de îngrășăminte chimice"
        ],
        contributors: "2,000,000"
      }
    },
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Activități <span className="text-primary">Eco</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participă la activitățile noastre și contribuie la un mediu mai curat și mai sănătos
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/50
                         hover:shadow-lg transition-all duration-300 animate-fade-in hover:-translate-y-1 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedActivity(activity)}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color}
                              flex items-center justify-center mb-4 group-hover:scale-110
                              transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100
                              transition-opacity duration-300">
                  <span className="text-sm font-medium">Află mai mult</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        {/* Activity Details Modal */}
        {selectedActivity && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedActivity.color}
                                  flex items-center justify-center`}>
                      <selectedActivity.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {selectedActivity.title}
                      </h3>
                      <p className="text-muted-foreground">
                        Detalii complete despre activitate
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Despre activitate</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedActivity.details.fullDescription}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Beneficii</h4>
                    <p className="text-muted-foreground">{selectedActivity.details.benefits}</p>
                  </div>

                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Cum poți participa</h4>
                    <p className="text-muted-foreground">{selectedActivity.details.howToParticipate}</p>
                  </div>

                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Impact asupra mediului</h4>
                    <p className="text-muted-foreground">{selectedActivity.details.environmentalImpact}</p>
                  </div>

                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Curiozități</h4>
                    <ul className="text-muted-foreground space-y-1">
                      {selectedActivity.details.funFacts.map((fact, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm">{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-secondary/50 rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Contribuții comunitare</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Persoane care au contribuit:</span>
                      <span className="font-semibold text-primary">{selectedActivity.details.contributors}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg
                             hover:bg-primary/90 transition-colors font-medium"
                  >
                    Am înțeles
                  </button>
                  <button
                    onClick={() => setSelectedActivity(null)}
                    className="px-6 py-3 border border-border rounded-lg hover:bg-secondary
                             transition-colors font-medium"
                  >
                    Închide
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Activities;