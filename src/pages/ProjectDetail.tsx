import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { format } from "date-fns";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import SolanaTokenChart from "@/components/SolanaTokenChart";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";
import nyLovesYou from "@/assets/ny-loves-you.jpg";
import saluneTeal from "@/assets/salune-teal.png";
import saluneMagenta from "@/assets/salune-magenta.png";
import saluneMockup from "@/assets/salune-mockup.png";
import saluneBadge from "@/assets/salune-badge.png";
import galleryLastImage from "@/assets/gallery-last-image.jpg";
const ProjectDetail = () => {
  const {
    id
  } = useParams();
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
  return <div className="relative min-h-screen w-full">
      {/* Background */}
      <div className="fixed inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        {/* Header overlay - absolute, doesn't affect layout */}
        <div className="absolute top-8 left-4 md:top-12 md:left-12 z-20">
          <Link to="/" className="text-black hover:opacity-70 transition-opacity flex items-center gap-2">
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
              <img src={saluneLogo} alt="Salune" className="w-64 md:w-96 lg:w-[500px] h-auto" />
            </Link>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Project Info block */}
              <div className="rounded-2xl ring-1 ring-black/10 bg-white/60 p-6 h-[700px] flex flex-col gap-4">
                <div className="flex gap-4">
                  {/* Project badge/logo */}
                  <img src={saluneBadge} alt="New York Loves You" className="w-32 h-32 rounded-lg object-cover flex-shrink-0" />
                  
                  {/* Title and date */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Salune Catalogue</h2>
                    <p className="text-sm text-muted-foreground">Published: October 29, 2025</p>
                  </div>
                </div>
                
                {/* Description */}
                <div className="flex-1 overflow-auto">
                  <p className="text-foreground leading-relaxed">
                    Salune is a revolutionary platform that brings together creativity and innovation. 
                    This project showcases the best of what's possible when technology meets artistic vision. 
                    Built with cutting-edge tools and designed for the future, Salune represents a new era 
                    of digital experiences. Join us on this journey as we explore new frontiers and push 
                    the boundaries of what's achievable.
                  </p>
                </div>
              </div>

              {/* Chart block */}
              <div className="rounded-2xl ring-1 ring-black/10 bg-white/60 p-6 h-[700px]">
                <SolanaTokenChart tokenMint="2gGvMK4sxcfYumUwTmre6sXWwtNPTrYaaXLVmAUeauAv" />
              </div>

              {/* About block */}
              <div className="rounded-2xl ring-1 ring-black/10 bg-white/60 p-6 h-[800px]">
                <h3 className="text-2xl font-bold text-foreground mb-4">Salune Exclusives</h3>
                <Carousel className="w-full h-[300px]">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="w-full h-[300px] bg-muted rounded-lg overflow-hidden">
                        <img src={saluneTeal} alt="Salune Logo" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="w-full h-[300px] bg-muted rounded-lg overflow-hidden">
                        <img src={saluneMagenta} alt="Salune Magenta" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="w-full h-[300px] bg-muted rounded-lg overflow-hidden">
                        <img src={galleryLastImage} alt="Gallery Image" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <p className="text-sm text-muted-foreground mt-3">
                  Update Date: {format(new Date(), "MMMM d, yyyy 'at' h:mm a")}
                </p>
                <blockquote className="mt-4 border-l-4 border-black pl-4 italic text-foreground/80 text-sm leading-relaxed">
                  The team is deep in the branding phase, refining how Salune should feel and move as both a platform and an experience. Our visual direction draws from the spirit of the frontier, warm lights, brass tones, quiet conversations blended with the sleek infrastructure of Solana's digital landscape. The goal is to create a space that feels alive, communal, and slightly cinematic, where design isn't just aesthetic but atmospheric. Salune's identity sits between a Western bar and a blockchain terminal: a place where stories, ideas, and tokens all trade hands across the counter.
                  <br /><br />
                  The name Salune itself is a fusion, part saloon, part Solana, part lunar. A saloon was always a gathering point, a crossroads of travelers and tales, and we wanted our site to feel the same way: a menu of choices, each project like a drink you can order, each interaction part of the story. It's a place to pause, participate, and connect where the old rituals of community meet the new architecture of Web3.
                </blockquote>
              </div>

              {/* Live Feed block with Twitter Feed */}
              <div className="rounded-2xl ring-1 ring-black/10 bg-white/60 p-6">
                <div className="elfsight-app-736bc0a5-4387-4ac0-b143-3461856170a4" data-elfsight-app-lazy></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Bottom */}
        
      </div>
    </div>;
};
export default ProjectDetail;