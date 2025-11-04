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
      <div className="fixed inset-0 z-0 bg-background/50 backdrop-blur-3xl" />
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
          <div className="flex justify-center" style={{ marginTop: "-120px" }}>
            <img src={saluneLogo} alt="Salune Logo" className="w-64 md:w-96 lg:w-[500px] h-auto" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
