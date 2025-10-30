import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";
import saluneSlide4 from "@/assets/salune-slide-4.png";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const About = () => {
  const slides = [
    { 
      title: "The Dust Don't Settle Here", 
      description: `★ Speculation moves fast, but it doesn't build roots.

★ Billions flow daily through Solana. Cultural producers see none of it.

★ We've got attention, not alignment.

★ In New York, hype burns bright and dies by morning.`,
      image: undefined
    },
    { 
      title: "Rewiring the Rush", 
      description: `★ Selune ties coins to real creation - art, food, film, spaces.

★ Each project becomes a living record OC.

★ Built on Solana for speed and transparency.

★ Turns markets into mediums, and speculation into structure.`,
      image: undefined
    },
    { 
      title: "Tools of the Trade", 
      description: `★ Verified mints tied to creative production updates.

★ Open ledger for progress tracking.

★ Royalties loop back to creators & angel investors via treasury

★ Culture financing culture.`,
      image: undefined
    },
    { 
      title: "Where the Streets Meet the Chain", 
      description: `★ For cultural producers and crypto patrons alike.

★ Launching from New York City = the world's creative testbed.

★ Guerrilla campaigns spark curiosity and online buzz.`,
      image: saluneSlide4
    },
    { 
      title: "The Circular Trail", 
      description: `★ Fractional fee on verified mints and liquidity routing.

★ Treasury reinvests in new projects.

★ Value circulates =/= not extracted.`
    },
    { title: "First Tracks", description: "Description text goes here", image: undefined },
    { title: "From the Ground Up", description: "Description text goes here", image: undefined },
    { title: "The New Frontier", description: "Description text goes here", image: undefined },
  ];

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
          <div className="flex justify-center mb-12" style={{ marginTop: "-120px" }}>
            <img src={saluneLogo} alt="Salune Logo" className="w-64 h-auto" />
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe 
                src="https://player.vimeo.com/video/1132113017?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
                title="Salune Promo"
              />
            </div>
          </div>

          {/* Carousel Section */}
          <div className="max-w-2xl mx-auto mt-[150px]">
            <Carousel className="w-full">
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4">
                      <div className="space-y-4">
                        {/* Image */}
                        <div className="aspect-square max-w-md mx-auto rounded-lg border-2 border-border overflow-hidden">
                          {slide.image ? (
                            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                              <span className="text-muted-foreground">Image {index + 1}</span>
                            </div>
                          )}
                        </div>
                        {/* Text Space */}
                        <div className="text-center space-y-2">
                          <h3 className="text-lg font-semibold text-foreground">{slide.title}</h3>
                          <p className="text-sm text-foreground whitespace-pre-line">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
