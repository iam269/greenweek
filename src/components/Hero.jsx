import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import heroImage from "@/assets/recycling-hero.jpg";

const Hero = () => {

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

            {/* Event Status */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">
                  Eveniment expirat
                </h3>
              </div>

              <p className="text-muted-foreground text-center text-lg">
                Evenimentul a expirat și va avea loc în 2026
              </p>
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