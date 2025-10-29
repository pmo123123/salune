import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const scrollToGallery = () => {
    document.getElementById('gallery-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
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
              className="group cursor-pointer transition-transform hover:scale-105 active:scale-95"
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
      </div>

      {/* Gallery Section */}
      <div id="gallery-section" className="min-h-screen bg-white px-4 py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full grid grid-cols-3 md:grid-cols-6 gap-2 bg-transparent h-auto p-0 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-white data-[state=inactive]:bg-white/80 border border-black/20 rounded-t-2xl rounded-b-none text-black font-medium py-4 px-6 hover:bg-white transition-all"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="bg-white border border-black/20 rounded-lg p-8 md:p-12">
              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-0">
                  {/* Two Column Grid with Divider */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                    {/* Left Column */}
                    <div className="space-y-16">
                      {projects
                        .filter((_, idx) => idx % 2 === 0)
                        .map((project) => (
                          <div key={project.id} className="space-y-4">
                            <h3 className="text-xl font-bold text-black text-center">
                              {project.title}
                            </h3>
                            <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                              {/* Placeholder for project image */}
                            </div>
                            <div className="flex justify-between text-sm text-black">
                              <span>{project.date}</span>
                              <span>{project.code}</span>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/20 -translate-x-1/2" />

                    {/* Right Column */}
                    <div className="space-y-16">
                      {projects
                        .filter((_, idx) => idx % 2 === 1)
                        .map((project) => (
                          <div key={project.id} className="space-y-4">
                            <h3 className="text-xl font-bold text-black text-center">
                              {project.title}
                            </h3>
                            <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
                              {/* Placeholder for project image */}
                            </div>
                            <div className="flex justify-between text-sm text-black">
                              <span>{project.date}</span>
                              <span>{project.code}</span>
                            </div>
                          </div>
                        ))}
                    </div>
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
