import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";
import saluneLogoWhite from "@/assets/salune-logo-white.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isScrolling, setIsScrolling] = useState(false);
  
  const scrollToGallery = () => {
    setIsScrolling(true);
    document.getElementById('gallery-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    // Reset animation state after scroll completes
    setTimeout(() => setIsScrolling(false), 1000);
  };

  const categories = [
    { id: "all", label: "ALL" },
    { id: "spacial", label: "SPACIAL" },
    { id: "narrative", label: "NARRATIVE" },
    { id: "body", label: "BODY" },
    { id: "participatory", label: "PARTICIPATORY" },
    { id: "machine", label: "MACHINE" },
  ];

  // Placeholder project data
  const projects = [
    { id: 1, title: "PROJECT 1", date: "10 Oct 2025", code: "SuPp...yZ01", category: "spacial" },
    { id: 2, title: "PROJECT 2", date: "10 Oct 2025", code: "SuPp...yZ01", category: "narrative" },
    { id: 3, title: "PROJECT 3", date: "10 Oct 2025", code: "SuPp...yZ01", category: "body" },
    { id: 4, title: "PROJECT 4", date: "10 Oct 2025", code: "SuPp...yZ01", category: "participatory" },
  ];

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        >
          <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Search Bar - Top Right */}
          <div className="absolute top-8 right-8 md:top-12 md:right-12">
            <SearchBar />
          </div>

          {/* Centered Logo Button */}
          <div className="flex-1 flex items-center justify-center px-4">
            <button
              onClick={scrollToGallery}
              className={`group cursor-pointer transition-all duration-1000 ${
                isScrolling ? '-translate-y-[200vh] opacity-0' : 'translate-y-0 opacity-100'
              } hover:scale-105 active:scale-95`}
              aria-label="Enter website"
            >
              <img 
                src={saluneLogo} 
                alt="Salune" 
                className="w-64 md:w-96 lg:w-[500px] h-auto"
              />
            </button>
          </div>

          {/* Navigation - Bottom */}
          <div className="pb-12 md:pb-16">
            <Navigation />
          </div>
        </div>

        {/* Gradient Blur Transition Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-background/40 backdrop-blur-[2px]" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }} />
      </div>

      {/* Gallery Section - Continues background from hero */}
      <div 
        id="gallery-section" 
        className="relative min-h-screen px-4 py-8 md:py-12"
      >
        {/* Gradient Blur Transition - Top */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background/40 to-transparent backdrop-blur-lg" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }} />
        
        {/* Background continuation from hero */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        >
          <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* White Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={saluneLogoWhite} 
              alt="Salune" 
              className="w-48 md:w-64 h-auto"
            />
          </div>

          {/* Category Tabs - Manila folder style */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 gap-1 bg-transparent h-auto p-0 mb-0">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-white data-[state=inactive]:bg-white/70 border-t border-l border-r border-black/20 rounded-t-xl rounded-b-none text-black font-medium py-4 px-4 hover:bg-white transition-all data-[state=active]:border-b-0 data-[state=inactive]:border-b"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="bg-white border border-black/20 rounded-tr-lg rounded-b-lg p-8 md:p-12">
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  {/* Two Column Grid */}
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
                          <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
                            {/* Placeholder for project image */}
                          </div>
                        </Link>
                        <div className="flex justify-between text-sm text-black">
                          <span>{project.date}</span>
                          <span>{project.code}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;
