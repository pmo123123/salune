import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import { WaitlistForm } from "@/components/WaitlistForm";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";
import saluneLogoWhite from "@/assets/salune-logo-white.png";
import sheriffStar from "@/assets/sheriff-star.png";
import bloomGrocerBag from "@/assets/bloom-grocer-bag.png";
import newspaperStack from "@/assets/newspaper-stack.png";
import saluneMockup from "@/assets/salune-mockup.png";


const Index = () => {
  const [showGallery, setShowGallery] = useState(false);
  const location = useLocation();
  
  const scrollToGallery = () => {
    setShowGallery(true);
  };

  useEffect(() => {
    if (location.hash === "#gallery-section") {
      setShowGallery(true);
      setTimeout(() => {
        document.getElementById("gallery-section")?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [location.hash]);

  // Placeholder project data
  const projects = [
    { id: 1, title: "Salune", date: "18 Oct 2025", code: "SuPp...yZ01", category: "spacial", image: sheriffStar },
    { id: 2, title: "Bloom Grocer", date: "05 Oct 2025", code: "SuPp...yZ01", category: "narrative", image: bloomGrocerBag },
    { id: 3, title: "Moby : Porcelain", date: "24 Sep 2025", code: "SuPp...yZ01", category: "body", image: newspaperStack },
    { id: 4, title: "Raxcos Jeans SS26", date: "12 Sep 2025", code: "SuPp...yZ01", category: "participatory", image: saluneMockup },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hero Section */}
      <div className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
        showGallery ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <div className="relative min-h-screen w-full">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroBackground})`,
            }}
          >
            <div className="absolute inset-0 bg-background/30 backdrop-blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col min-h-screen">
            {/* Centered Logo Button */}
            <div className="flex-1 flex items-center justify-center px-4">
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={scrollToGallery}
                  className="group cursor-pointer transition-transform hover:scale-105 active:scale-95"
                  aria-label="Enter website"
                >
                  <img 
                    src={saluneLogo} 
                    alt="Salune" 
                    className="w-64 md:w-96 lg:w-[500px] h-auto"
                  />
                </button>
                
                {/* Waitlist Form */}
                <div className="-mt-[100px]">
                  <WaitlistForm />
                </div>
              </div>
            </div>

            {/* Navigation - Bottom */}
            <div className="pb-12 md:pb-16">
              <Navigation />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div 
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
          showGallery ? 'translate-y-0' : 'translate-y-full'
        } overflow-y-auto`}
      >
        <div className="relative min-h-screen px-4 py-8 md:py-12">
          {/* Background continuation from hero */}
          <div 
            className="absolute inset-0 bg-cover bg-center -z-10"
            style={{
              backgroundImage: `url(${heroBackground})`,
            }}
          >
            <div className="absolute inset-0 bg-background/60 backdrop-blur-[40px]" />
          </div>

          <div id="gallery-section" className="relative z-10 max-w-[1400px] mx-auto">
            {/* Search button - Top Left */}
            <div className="fixed top-8 left-8 md:top-12 md:left-12 z-50">
              <SearchBar />
            </div>

            {/* Back to top button */}
            <button
              onClick={() => setShowGallery(false)}
              className="fixed top-8 right-8 md:top-12 md:right-12 z-50 bg-white/80 hover:bg-white border border-black/20 rounded-full p-3 transition-all hover:scale-110 active:scale-95 shadow-lg"
              aria-label="Back to landing page"
            >
              <ArrowUp className="w-5 h-5 text-black" />
            </button>

            {/* Black Logo */}
            <div className="flex justify-center">
              <img 
                src={saluneLogo} 
                alt="Salune" 
                className="w-64 md:w-96 lg:w-[500px] h-auto"
              />
            </div>

            {/* Projects Grid */}
            <div className="bg-white/70 border border-black/20 rounded-lg p-8 md:p-12 mt-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {projects.map((project, idx) => (
                  <div 
                    key={project.id} 
                    className={`space-y-4 py-8 ${idx > 1 ? 'border-t border-black/10' : ''}`}
                  >
                    <Link to={`/project/${project.id}`}>
                      <h3 className="text-xl font-bold text-black text-center hover:opacity-70 transition-opacity cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>
                    <Link to={`/project/${project.id}`} className="block">
                      <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center border-2 border-black/20">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                    </Link>
                    <div className="flex justify-between text-sm text-black">
                      <span>{project.date}</span>
                      <span>{project.code}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
