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
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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

            {/* Project Content Container */}
            <div className="bg-white/95 rounded-lg p-8 md:p-12 backdrop-blur-sm">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                PROJECT {id}
              </h1>
              
              <div className="mb-6">
                <span className="text-sm text-black/70">10 Oct 2025</span>
              </div>

              {/* Project Description */}
              <div className="mb-8 text-black leading-relaxed">
                <p>
                  Selune was born from the crossroads of art and crypto. After being involved in Cloudy Heart with Jon Rafman, I saw firsthand what it takes to weave cultural production into Web3—and how easily that process gets lost behind spectacle. Selune was created to change that: a living catalogue where creative work is documented, verified, and circulated transparently on-chain. It's a platform that transforms speculation into stewardship, letting value flow back to the communities that create it. At its core, Selune is about building a new kind of frontier—one where technology serves meaning, and culture becomes the currency of trust.
                </p>
              </div>

              {/* Project Chart */}
              <div className="mb-8">
                <SolanaTokenChart tokenMint="2gGvMK4sxcfYumUwTmre6sXWwtNPTrYaaXLVmAUeauAv" />
              </div>

              {/* Twitter Widget */}
              <div className="mb-8">
                <div className="elfsight-app-736bc0a5-4387-4ac0-b143-3461856170a4" data-elfsight-app-lazy></div>
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
