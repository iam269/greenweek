import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, ExternalLink } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      id: "video1",
      title: "Cum să reciclezi corect acasă",
      description: "Un ghid simplu pentru reciclarea în viața de zi cu zi",
      src: "https://www.youtube.com/embed/uBsAVnQq3qo",
    },
    {
      id: "video2",
      title: "Impactul reciclării asupra mediului",
      description: "Descoperă cum acțiunile noastre mici pot face o diferență mare",
      src: "https://www.youtube.com/embed/u89JbuaPMWM",
    },
    {
      id: "video3",
      title: "Proiecte comunitare de curățare",
      description: "Vezi cum comunitățile se unesc pentru un viitor mai verde",
      src: "https://www.youtube.com/embed/gJ6ErqSoGk8",
    },
    {
      id: "video4",
      title: "Sustenabilitate și viitor verde",
      description: "Explorarea conceptelor de dezvoltare durabilă și viitor ecologic",
      src: "https://www.youtube.com/embed/REWXV1TlEXo",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <section id="videos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary
                        rounded-full text-sm font-medium mb-4">
            <Play className="w-4 h-4" />
            <span>Videoclipuri Educaționale</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Învață și <span className="text-primary">Inspiră-te</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Videoclipuri informative despre reciclare și protecția mediului
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
              src={videos[currentVideo].src}
              title={videos[currentVideo].title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video Info */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {videos[currentVideo].title}
            </h3>
            <p className="text-muted-foreground">
              {videos[currentVideo].description}
            </p>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setCurrentVideo(index)}
              className={`relative rounded-lg overflow-hidden transition-all duration-300
                         ${index === currentVideo
                           ? "ring-4 ring-primary scale-105"
                           : "opacity-70 hover:opacity-100 hover:scale-105"
                         }`}
            >
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <Play className="w-12 h-12 text-white" />
              </div>
              <div className="p-4 bg-background">
                <h4 className="font-semibold text-foreground mb-1">
                  {video.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {video.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* YouTube Playlist Box */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Mai multe videoclipuri despre reciclare
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Descoperă o colecție completă de videoclipuri educaționale despre reciclare,
              mediu și sustenabilitate pe canalul nostru YouTube.
            </p>
            <a
              href="https://www.youtube.com/playlist?list=PLcetZ6gSk96-AdmkxPgizwq1AZnOgjdRC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground
                         px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Vezi Playlist-ul Complet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;