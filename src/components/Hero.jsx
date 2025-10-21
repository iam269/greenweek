import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import heroImage from "@/assets/recycling-hero.jpg";

const Hero = () => {
  // Setăm sfârșitul Săptămânii Verzi (duminica aceasta)
  const endDate = new Date();
  const currentDay = endDate.getDay(); // 0 = duminică, 1 = luni, etc.
  const daysUntilSunday = (7 - currentDay) % 7;
  if (daysUntilSunday === 0) {
    // Dacă este duminică, setăm la sfârșitul zilei
    endDate.setHours(23, 59, 59, 999);
  } else {
    // Altfel, adăugăm zilele până duminica
    endDate.setDate(endDate.getDate() + daysUntilSunday);
    endDate.setHours(23, 59, 59, 999);
  }

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculează timpul rămas
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/10" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium">
              <Calendar className="w-4 h-4" />
              <span>Săptămâna Verde 2025</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Reciclare pentru un
              <span className="text-primary"> Viitor Verde</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Alătură-te mișcării eco! Reciclarea este primul pas către un mediu mai curat și
              un viitor sustenabil. Împreună putem face diferența pentru planeta noastră.
            </p>

            {/* Countdown Timer */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Timp rămas până la final
                </h3>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: timeLeft.days, label: "Zile" },
                  { value: timeLeft.hours, label: "Ore" },
                  { value: timeLeft.minutes, label: "Minute" },
                  { value: timeLeft.seconds, label: "Secunde" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 mb-2 font-bold text-2xl">
                      {item.value.toString().padStart(2, "0")}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img
              src={heroImage}
              alt="Reciclare - Săptămâna Verde"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;