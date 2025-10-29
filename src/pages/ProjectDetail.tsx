import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <div className="px-4 py-8 md:px-12 md:py-12">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link 
              to="/" 
              className="text-black hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">HOME</span>
            </Link>
            <SearchBar />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 pb-12 md:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Logo - Clickable back to gallery */}
            <Link to="/#gallery-section" className="flex justify-center py-1 hover:opacity-80 transition-opacity">
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
              
              <div className="flex gap-4 text-sm text-black/70 mb-8">
                <span>10 Oct 2025</span>
                <span>•</span>
                <span>SuPp...yZ01</span>
              </div>

              {/* Project Image */}
              <div className="aspect-video bg-gray-300 rounded-lg mb-8 overflow-hidden">
                {/* Project main image will go here */}
              </div>

              {/* Project Description */}
              <div className="space-y-6 text-black">
                <section>
                  <h2 className="text-2xl font-bold mb-3">About This Project</h2>
                  <p className="leading-relaxed">
                    Project description and details will be displayed here.
                  </p>
                </section>

                {/* Additional project details can be added here */}
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
