import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import heroBackground from "@/assets/hero-background.jpg";

const Index = () => {
  return (
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

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4">
        </div>

        {/* Navigation - Bottom */}
        <div className="pb-12 md:pb-16">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Index;
