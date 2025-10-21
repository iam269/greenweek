import { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const images = [
    {
      src: gallery1,
      alt: "Plante crescând din materiale reciclate",
      title: "Viață nouă din materiale reciclate",
    },
    {
      src: gallery2,
      alt: "Centru de reciclare organizat",
      title: "Reciclare eficientă și organizată",
    },
    {
      src: gallery3,
      alt: "Artă din materiale reciclate",
      title: "Creativitate prin reciclare",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
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
                <h3 className="text-xl font-semibold text-white">
                  {images[currentIndex].title}
                </h3>
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

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300
                          ${index === currentIndex 
                            ? "ring-4 ring-primary scale-105" 
                            : "opacity-60 hover:opacity-100 hover:scale-105"
                          }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
