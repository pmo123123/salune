import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import SolanaTokenChart from "@/components/SolanaTokenChart";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";

const ProjectDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        {/* Header overlay - absolute, doesn't affect layout */}
        <div className="absolute top-8 left-4 md:top-12 md:left-12 z-20">
          <Link 
            to="/" 
            className="text-black hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">HOME</span>
          </Link>
        </div>
        <div className="absolute top-8 right-4 md:top-12 md:right-12 z-20">
          <SearchBar />
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 py-8 pb-12 md:px-12 md:py-12">
          <div className="max-w-[1400px] mx-auto">
            {/* Logo - Clickable back to gallery */}
            <Link to="/#gallery-section" className="flex justify-center hover:opacity-80 transition-opacity">
              <img 
                src={saluneLogo} 
                alt="Salune" 
                className="w-64 md:w-96 lg:w-[500px] h-auto"
              />
            </Link>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - 1/3 width */}
              <div className="lg:col-span-1 space-y-6">
                {/* Icon/Mark Placeholder */}
                <div className="bg-white/95 rounded-lg p-8 backdrop-blur-sm">
                  <div className="text-muted-foreground text-center py-12">
                    Icon / Mark
                  </div>
                </div>

                {/* About Section */}
                <div className="bg-white/95 rounded-lg p-8 backdrop-blur-sm">
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                    ABOUT THIS PROJECT
                  </h2>
                  <div className="text-black leading-relaxed text-sm">
                    <p>
                      Five-sentence blurb goes here. Keep it clear and minimal: what this project is, what it tests, and what "good" looks like. This area is creator-facing content inside a Foundry-defined flow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - 2/3 width */}
              <div className="lg:col-span-2 space-y-6">
                {/* Chart Widget */}
                <div className="bg-white/95 rounded-lg p-8 backdrop-blur-sm">
                  <SolanaTokenChart tokenMint="2gGvMK4sxcfYumUwTmre6sXWwtNPTrYaaXLVmAUeauAv" />
                </div>

                {/* Twitter Feed Widget */}
                <div className="bg-white/95 rounded-lg p-8 backdrop-blur-sm">
                  <div 
                    className="elfsight-app-736bc0a5-4387-4ac0-b143-3461856170a4" 
                    data-elfsight-app-lazy
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Bottom */}
        <div className="pb-12 md:pb-16">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
