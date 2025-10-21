import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import Activities from "@/components/Activities.jsx";
import Tips from "@/components/Tips.jsx";
import Gallery from "@/components/Gallery.jsx";
import Videos from "@/components/Videos.jsx";
import Resources from "@/components/Resources.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Activities />
      <Tips />
      <Gallery />
      <Videos />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;