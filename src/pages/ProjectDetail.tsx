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
      {/* Background */}
      <div 
        className="fixed inset-0"
        style={{ backgroundColor: '#FFF9ED' }}
      />

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
          <div className="max-w-[1200px] mx-auto">
            {/* Logo - Clickable back to gallery */}
            <Link to="/#gallery-section" className="flex justify-center hover:opacity-80 transition-opacity mb-7">
              <img 
                src={saluneLogo} 
                alt="Salune" 
                className="w-64 md:w-96 lg:w-[500px] h-auto"
              />
            </Link>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Icon/Mark block */}
              <div className="rounded-2xl ring-1 ring-black/10 bg-white/60 p-6 min-h-[340px] md:min-h-[420px]" />

              {/* Chart block */}
              <div className="rounded-2xl ring-1 ring-black/10 bg-white/60 p-6 min-h-[220px] md:min-h-[280px]">
                <SolanaTokenChart tokenMint="2gGvMK4sxcfYumUwTmre6sXWwtNPTrYaaXLVmAUeauAv" />
              </div>

              {/* About block */}
              <div className="rounded-2xl ring-1 ring-black/10 bg-white/60 p-6 min-h-[180px]" />

              {/* Live Feed block with three empty posts */}
              <div className="rounded-2xl ring-1 ring-black/10 bg-white/60 p-6 space-y-3">
                <div className="rounded-xl ring-1 ring-black/10 bg-white h-20" />
                <div className="rounded-xl ring-1 ring-black/10 bg-white h-20" />
                <div className="rounded-xl ring-1 ring-black/10 bg-white h-20" />
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
