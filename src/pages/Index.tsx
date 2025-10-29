import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";

const Index = () => {
  const scrollToContent = () => {
    document.getElementById('content-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

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
              onClick={scrollToContent}
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

      {/* Content Section Below */}
      <div id="content-section" className="min-h-screen bg-background px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
            Welcome to Salune
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Your content goes here. Add sections, features, or information about your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
