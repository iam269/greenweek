import { ExternalLink } from "lucide-react";

const Resources = () => {
  const sources = [
    {
      title: "30 Key Recycling Statistics and Facts",
      url: "https://www.recyclecoach.com/blog/30-key-recycling-statistics-and-facts",
      description: "Statistici esențiale despre reciclare și impactul acesteia",
    },
    {
      title: "AP News - Environmental Impact",
      url: "https://apnews.com/article/6658d3c115738702a6a679b0eea43f30",
      description: "Știri despre impactul asupra mediului înconjurător",
    },
    {
      title: "World Cleanup Day",
      url: "https://www.worldcleanupday.org/",
      description: "Inițiativă globală pentru curățarea planetei",
    },
    {
      title: "Earth Day - Global Cleanup",
      url: "https://www.earthday.org/8-locations-around-the-world-that-really-did-the-great-global-cleanup/",
      description: "Locații din lume care au participat la curățarea globală",
    },
    {
      title: "Sustainable Volunteering Research",
      url: "https://www.sciencedirect.com/science/article/pii/S2405880723000985",
      description: "Cercetare științifică despre voluntariat sustenabil",
    },
    {
      title: "OECD - Volunteering Trends",
      url: "https://www.oecd.org/en/events/2024/12/valorising-volunteering-for-people-and-places-international-trends-and-experiences.html",
      description: "Tendințe internaționale în voluntariat",
    },
    {
      title: "Eco Students Organizations",
      url: "https://happyeconews.com/eco-students-organisations-around-the-world/",
      description: "Organizații studențești eco din întreaga lume",
    },
    {
      title: "Community Gardening Research",
      url: "https://www.researchgate.net/publication/49743684_Community_Gardening_A_Parsimonious_Path_to_Individual_Community_and_Environmental_Resilience",
      description: "Cercetare despre grădinile comunitare și reziliența",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary
                        rounded-full text-sm font-medium mb-4">
            <ExternalLink className="w-4 h-4" />
            <span>Surse și Referințe</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resurse <span className="text-primary">Educaționale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Informațiile prezentate sunt bazate pe cercetări și statistici din surse de încredere
          </p>
        </div>

        {/* Sources Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {sources.map((source, index) => (
            <a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-lg p-4 border border-border hover:border-primary/50
                       hover:shadow-md transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {source.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {source.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Aceste resurse sunt folosite pentru a furniza informații corecte și actualizate despre reciclare și mediu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resources;