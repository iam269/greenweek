import { Leaf } from "lucide-react";
import { useState } from 'react';
import { useAnalytics } from '../hooks/useAnalytics.js';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { trackInteraction } = useAnalytics();

  // Smooth scroll function pentru navigare
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });

    // Track navigation clicks
    trackInteraction('navigation_click', 'header_navigation', sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo și titlu */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="p-2 bg-primary rounded-lg shadow-md">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Săptămâna Verde
              </h1>
              <p className="text-sm text-muted-foreground">Reciclare</p>
            </div>
          </div>

          {/* Navigare */}
          <nav className={`hidden md:flex items-center gap-6 ${isMobileMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border p-4' : ''}`}>
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Acasă
            </button>
            <button
              onClick={() => scrollToSection("activities")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Activități
            </button>
            <button
              onClick={() => scrollToSection("tips")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sfaturi
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Videoclipuri
            </button>
            <button
              onClick={() => scrollToSection("resources")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Resurse
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Leaf className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;