import { CheckCircle2, Sparkles } from "lucide-react";

const Tips = () => {
  const tips = [
    {
      title: "Separă deșeurile corect",
      description: "Folosește containere diferite pentru plastic, sticlă, hârtie și metal. Verifică simbolurile de pe produse pentru a fi sigur că le sortezi corect.",
    },
    {
      title: "Spală recipientele înainte de reciclare",
      description: "Curăță ambalajele de resturi alimentare pentru a preveni contaminarea celorlalte materiale reciclabile și pentru a asigura un proces eficient.",
    },
    {
      title: "Reduce consumul de plastic",
      description: "Alege produse reutilizabile: sticle de apă, pungi de cumpărături textile, și containere pentru alimente. Evită plasticul de unică folosință.",
    },
    {
      title: "Compostează deșeurile organice",
      description: "Resturile de fructe, legume și resturi de grădină pot deveni compost. Acest lucru reduce deșeurile și creează îngrășământ natural pentru plante.",
    },
    {
      title: "Donează sau vinde obiectele vechi",
      description: "Hainele, jucăriile și electronicele funcționale pot avea o a doua viață. Donează-le către organizații sau vinde-le online în loc să le arunci.",
    },
    {
      title: "Informează-te continuu",
      description: "Regulile de reciclare se pot schimba. Verifică periodic ce materiale sunt acceptate în zona ta și cum trebuie pregătite pentru colectare.",
    },
  ];

  return (
    <section id="tips" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent-foreground
                         rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Ghid Practic</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sfaturi pentru <span className="text-primary">Reciclare</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Urmează aceste sfaturi simple pentru a recicla eficient și a proteja mediul înconjurător
          </p>
        </div>

        {/* Tips Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50
                        hover:shadow-lg transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-accent p-[2px] rounded-2xl animate-scale-in">
            <div className="bg-card px-8 py-6 rounded-2xl">
              <p className="text-lg font-medium text-foreground mb-2">
                Fiecare gest contează! 🌍
              </p>
              <p className="text-muted-foreground">
                Împreună putem face diferența pentru planeta noastră
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;