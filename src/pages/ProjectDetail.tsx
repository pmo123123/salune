import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { format } from "date-fns";
import SearchBar from "@/components/SearchBar";
import Navigation from "@/components/Navigation";
import SolanaTokenChart from "@/components/SolanaTokenChart";
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
        <div className="absolute top-8 left-4 md:top-12 md:left-12 z-20 flex items-center gap-4">
          <Link to="/#gallery-section" className="text-black hover:opacity-70 transition-opacity flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Gallery</span>
          </Link>
          <Link to="/about" className="text-black hover:opacity-70 transition-opacity">
            <span className="text-sm font-medium">About</span>
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
            <div className="w-full mb-8">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg bg-card h-[700px] flex items-start justify-start p-8 gap-8">
                        <div className="w-48 h-48 rounded-lg flex items-center justify-center overflow-hidden border border-border/30">
                          <img src={sheriffStar} alt="Sheriff Star" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-[36px] font-bold text-foreground mt-[50px]">
                          Salune Arrives in New York City
                        </h2>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg bg-card h-[700px] flex items-center justify-center p-8">
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
            <h2 className="text-[36px] font-bold text-foreground mb-6">Salune Exclusives:</h2>
            <div className="w-full mb-8">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg bg-card h-[700px] flex items-center justify-center">
                        {/* Slide 1 content */}
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg bg-card h-[700px] flex items-center justify-center">
                        {/* Slide 2 content */}
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <div className="rounded-lg bg-card h-[700px] flex items-center justify-center">
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
        
      </div>
    </div>;
};
export default ProjectDetail;