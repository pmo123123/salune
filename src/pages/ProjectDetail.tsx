import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { format } from "date-fns";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import SolanaTokenChart from "@/components/SolanaTokenChart";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroBackground from "@/assets/hero-background.jpg";
import saluneLogo from "@/assets/salune-logo.png";
import nyLovesYou from "@/assets/ny-loves-you.jpg";
import saluneTeal from "@/assets/salune-teal.png";
import saluneMagenta from "@/assets/salune-magenta.png";
import saluneMockup from "@/assets/salune-mockup.png";
import saluneBadge from "@/assets/salune-badge.png";
import galleryLastImage from "@/assets/gallery-last-image.jpg";
import sheriffStar from "@/assets/sheriff-star.png";
import saluneMagentaHalftone from "@/assets/salune-magenta-halftone.png";
import saluneTealHalftone from "@/assets/salune-teal-halftone.png";

// Declare Solana wallet type
declare global {
  interface Window {
    solana?: {
      connect: () => Promise<{
        publicKey: {
          toString: () => string;
        };
      }>;
    };
  }
}
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
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        {/* Header overlay - absolute, doesn't affect layout */}
        <div className="absolute top-8 left-4 md:top-12 md:left-12 z-20">
          <Link to="/#gallery-section" className="bg-white/80 hover:bg-white border border-black/20 rounded-full p-3 transition-all hover:scale-110 active:scale-95 shadow-lg inline-flex items-center justify-center" aria-label="Back to gallery">
            <ArrowLeft className="w-5 h-5 text-black" />
          </Link>
        </div>
        <div className="absolute top-8 left-[90px] md:top-12 md:left-[106px] z-20">
          <Link to="/about" className="text-black hover:opacity-70 transition-opacity text-sm font-medium" aria-label="About">
            ABOUT
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

            {/* GeckoTerminal Embed */}
            <div className="w-full h-[500px] mb-8 rounded-lg overflow-hidden -mt-[50px]">
              <iframe id="geckoterminal-embed" title="GeckoTerminal Embed" src="https://www.geckoterminal.com/solana/pools/So11111111111111111111111111111111111111112?embed=1&info=0&swaps=0&light_chart=1&chart_type=market_cap&resolution=1d&bg_color=f1f5f9" frameBorder="0" allow="clipboard-write" allowFullScreen style={{
              width: '100%',
              height: '100%'
            }} />
            </div>

            {/* Wallet Connector */}
            <div className="mb-8 flex justify-start">
              <button onClick={() => {
              if (window.solana) {
                window.solana.connect().then((response: any) => {
                  console.log('Connected:', response.publicKey.toString());
                }).catch((err: any) => {
                  console.error('Connection failed:', err);
                });
              } else {
                alert('Please install Phantom wallet');
              }
            }} className="px-3 py-1.5 bg-white text-black rounded-md hover:bg-white/90 transition-colors text-sm font-medium border border-border">
                Connect Wallet
              </button>
            </div>

            {/* Carousel Section */}
            <div className="w-full mb-4">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg h-[700px] flex items-start justify-start p-12 gap-6">
                        <div className="w-48 h-48 rounded-lg flex items-center justify-center overflow-hidden border border-border/30">
                          <img src={sheriffStar} alt="Sheriff Star" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col -mt-[25px] max-w-3xl">
                          <h2 className="text-[36px] font-bold text-foreground mb-4 mt-[25px]">
                            Salune Arrives in New York City
                          </h2>
                          <div className="space-y-3 text-foreground/90 leading-relaxed">
                            <p>
                              Salune is a new kind of platform where culture, creativity, and blockchain innovation meet under one roof. Inspired by the idea of a saloon for the digital frontier, it's a place where creators, patrons, and explorers gather to exchange ideas, stories, and value. Each project on Salune functions like an item on a menu, an offering of vision and craft, served with transparency and intent.
                            </p>
                            <p>
                              Built on Solana's high-speed infrastructure, Salune transforms the energy of the internet into something human again: collaboration, experimentation, and storytelling. Rooted in cypherpunk values, it champions autonomy, transparency, and the right to build outside institutions, proving that code can protect creativity as much as it powers it. It's designed not just as a platform, but as an atmosphere. A space that invites participation and curiosity. Here, technology doesn't replace creativity; it amplifies it.
                            </p>
                            <p>
                              Salune represents a new chapter for the web, where design meets decentralization, and where each interaction helps shape the culture of tomorrow. Step inside, explore the menu, and find your place at the counter of this evolving frontier.
                            </p>
                            <p className="text-sm italic mt-6">
                              Contributors: Project Manager: Paige Oosterom | Branding: Lisa Lagova
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg h-[700px] flex items-center justify-center p-12">
                        <div className="elfsight-app-e665a315-1418-40dd-8f3e-b85d500362f0" data-elfsight-app-lazy></div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Second Carousel Section */}
            <div className="pl-12">
              <h2 className="text-[36px] font-bold text-foreground mb-4 -mt-[95px]">Salune Exclusives:</h2>
            </div>
            <div className="w-full mb-8 -mt-[25px]">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg h-[700px] flex flex-col items-center justify-start p-12 gap-6">
                        {/* Images */}
                        <div className="flex gap-6 items-center mt-[25px]">
                          <img src={saluneMagentaHalftone} alt="Salune Magenta" className="w-[400px] h-auto rounded-lg" />
                          <img src={saluneTealHalftone} alt="Salune Teal" className="w-[400px] h-auto rounded-lg" />
                        </div>
                        {/* Space for text */}
                        <div className="flex-1 w-full max-w-4xl space-y-4 text-foreground/90 leading-relaxed">
                          <p>
                            The team is deep in the branding phase, refining how Salune should feel and move as both a platform and an experience. Our visual direction draws from the spirit of the frontier, warm lights, brass tones, quiet conversations blended with the sleek infrastructure of Solana's digital landscape. The goal is to create a space that feels alive, communal, and slightly cinematic, where design isn't just aesthetic but atmospheric. Salune's identity sits between a Western bar and a blockchain terminal: a place where stories, ideas, and tokens all trade hands across the counter.
                          </p>
                          <p>
                            The name Salune itself is a fusion, part saloon, part Solana, part lunar. A saloon was always a gathering point, a crossroads of travelers and tales, and we wanted our site to feel the same way: a menu of choices, each project like a drink you can order, each interaction part of the story. It's a place to pause, participate, and connect where the old rituals of community meet the new architecture of Web3.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg h-[700px] flex flex-col items-start justify-start p-12 overflow-y-auto">
                        <h2 className="text-[36px] font-bold text-foreground mb-8">Timeline</h2>
                        
                        <div className="space-y-6 text-foreground/90">
                          <div>
                            <h3 className="text-[24px] font-bold text-foreground mb-3">Q4 2025 — Product Development</h3>
                            <p className="leading-relaxed">
                              The foundation of Salune comes to life. Website architecture, token mechanics, and user flow are built to reflect the platform's ethos: fluid, elegant, and transparent. The design direction draws inspiration from the world of glossy magazines: visually rich, editorial in tone, and built for deep scrolling rather than quick clicks. Each project reads like a feature story, a blend of imagery, text, and process, inviting visitors to slow down and engage. The development phase focuses on making blockchain interactions feel intuitive, almost invisible, so that creators experience the technology as atmosphere, not obstacle. Design meets utility: each project page functions as both a creative portfolio and a living ledger of process.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-[24px] font-bold text-foreground mb-3">Q4 2025 / Q1 2026 — Talent Scouting</h3>
                            <p className="leading-relaxed">
                              Salune begins curating its first circle of creators, innovators whose work blurs the boundaries between craft and concept. The goal isn't mass adoption, but quality of participation. Every contributor invited to the platform shares Salune's values of experimentation, transparency, and creative integrity. This early cohort helps test and shape the platform's tools while building a community that feels less like a marketplace and more like a movement.
                            </p>
                          </div>

                          <div>
                            <h3 className="text-[24px] font-bold text-foreground mb-3">Q2 2026 — First Mint Initiated</h3>
                            <p className="leading-relaxed">
                              The first project mint marks Salune's official debut. Rather than a finished artwork, it begins at the earliest stage of production, the initial sketch, the recipe draft, the storyboard pinned to the wall. From that moment on, the project unfolds in public view, with every step recorded on-chain. This inaugural mint serves as a proof of concept for Salune's vision: that process, not product, is where cultural value is born.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg h-[700px] flex items-center justify-center">
                        {/* Slide 3 content */}
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Project Info block */}
              

              {/* Chart block */}
              

              {/* About block */}
              

              {/* Live Feed block with Twitter Feed */}
              
            </div>
          </div>
        </div>

        {/* Navigation - Bottom */}
        
        {/* Footer */}
        <Footer />
      </div>
    </div>;
};
export default ProjectDetail;