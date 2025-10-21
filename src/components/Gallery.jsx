import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { useAnalytics } from '../hooks/useAnalytics.js';
import cleanUpGiveBack from "@/assets/Clean Up – Give Back (organizație).jpg";
import cleanupsComing from "@/assets/Cleanups are coming (program comunitar).jpg";
import earth5R from "@/assets/Earth5R – strategie de mobilizare voluntari pentru curățare.jpg";
import keepPABeautiful from "@/assets/Keep PA Beautiful – organizare eveniment curățare.jpg";
import keepVirginiaBeautiful from "@/assets/Keep Virginia Beautiful.jpg";
import litterCleanUpPrograms from "@/assets/Litter Clean Up Programs.jpg";
import pdxCommunityCleanup from "@/assets/PDX Community Cleanup & Recycling Event.jpg";

const Gallery = () => {
  const { trackInteraction } = useAnalytics();

  const images = [
    {
      src: cleanUpGiveBack,
      alt: "Clean Up – Give Back (organizație)",
      title: "Curățenie – Dă înapoi (organizație)",
      link: "https://cleanupgiveback.org/",
    },
    {
      src: cleanupsComing,
      alt: "Cleanups are coming (program comunitar)",
      title: "Curățeniile vin (program comunitar)",
      link: "https://www.oregonmetro.gov/news/cleanups-are-coming-highway-park-or-street-near-you",
    },
    {
      src: earth5R,
      alt: "Earth5R – strategie de mobilizare voluntari pentru curățare",
      title: "Earth5R – strategie de mobilizare voluntari pentru curățare",
      link: "https://earth5r.org/",
    },
    {
      src: keepPABeautiful,
      alt: "Keep PA Beautiful – organizare eveniment curățare",
      title: "Păstrează Pennsylvania Frumoasă – organizare eveniment curățare",
      link: "https://keeppabeautiful.org/",
    },
    {
      src: keepVirginiaBeautiful,
      alt: "Keep Virginia Beautiful",
      title: "Păstrează Virginia Frumoasă",
      link: "https://keepvirginiabeautiful.org/",
    },
    {
      src: litterCleanUpPrograms,
      alt: "Litter Clean Up Programs",
      title: "Programe de Curățare Gunoi",
      link: "https://www.kcdumpster.com/litter-clean-up/",
    },
    {
      src: pdxCommunityCleanup,
      alt: "PDX Community Cleanup & Recycling Event",
      title: "Eveniment Comunitar de Curățare și Reciclare PDX",
      link: "https://volunteer.solveoregon.org/opportunity/a0CVL00001Qk4Cb2AJ/glisanpdx-community-cleanup-recycling-event",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    trackInteraction('gallery_navigation', 'carousel', 'previous');
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    trackInteraction('gallery_navigation', 'carousel', 'next');
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary
                        rounded-full text-sm font-medium mb-4">
            <ImageIcon className="w-4 h-4" />
            <span>Galerie Foto</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Momentele Noastre <span className="text-primary">Verzi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descoperă impactul pozitiv al reciclării prin imaginile noastre
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group animate-scale-in">
            {/* Main Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transition-transform duration-500"
              />

              {/* Overlay cu titlu */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <a
                  href={images[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  onClick={() => trackInteraction('external_link_click', 'gallery', images[currentIndex].title)}
                >
                  <h3 className="text-xl font-semibold text-white hover:text-primary transition-colors">
                    {images[currentIndex].title}
                  </h3>
                </a>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white
                       text-foreground p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100
                       transition-all duration-300 hover:scale-110"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white
                       text-foreground p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100
                       transition-all duration-300 hover:scale-110"
              aria-label="Imaginea următoare"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Du-te la imaginea ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;