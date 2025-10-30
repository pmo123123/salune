import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";

const About = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="fixed inset-0 z-0 bg-background/30 backdrop-blur-sm" />
      {/* Back Button */}
      <Link 
        to="/" 
        className="fixed top-8 left-8 md:top-12 md:left-12 z-50 bg-white/80 hover:bg-white border border-black/20 rounded-full p-3 transition-all hover:scale-110 active:scale-95 shadow-lg"
        aria-label="Back to home"
      >
        <ArrowLeft className="w-5 h-5 text-black" />
      </Link>

      {/* Main Content */}
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Logo Section */}
          <div className="flex justify-center mb-12">
            <img src={saluneLogo} alt="Salune Logo" className="w-64 h-auto" />
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe 
                src="https://player.vimeo.com/video/1132113017?badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
                title="Salune Promo"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
