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
          <div className="max-w-[1200px] mx-auto">
            {/* Logo - Clickable back to gallery */}
            <Link to="/#gallery-section" className="flex justify-center hover:opacity-80 transition-opacity mb-7">
              <img 
                src={saluneLogo} 
                alt="Salune" 
                className="w-64 md:w-96 lg:w-[500px] h-auto"
              />
            </Link>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.7fr] gap-6">
              {/* LEFT COLUMN */}
              <section className="flex flex-col gap-6">
                {/* Icon/Mark Card */}
                <div 
                  className="flex items-center justify-center min-h-[360px] rounded-[16px] border"
                  style={{ 
                    backgroundColor: '#fafafa',
                    borderColor: '#e5e7eb',
                    color: '#a1a1aa'
                  }}
                >
                  <div>Icon / Mark</div>
                </div>

                {/* About Card */}
                <div 
                  className="p-[18px] pb-5 rounded-[16px] border"
                  style={{ 
                    backgroundColor: '#fafafa',
                    borderColor: '#e5e7eb'
                  }}
                >
                  <div 
                    className="text-xs font-semibold mb-[10px]"
                    style={{ 
                      letterSpacing: '0.08em',
                      color: '#9ca3af'
                    }}
                  >
                    ABOUT THIS PROJECT
                  </div>
                  <p className="m-0" style={{ color: '#374151' }}>
                    Five-sentence blurb goes here. Keep it clear and minimal:
                    what this project is, what it tests, and what &quot;good&quot; looks like.
                    This area is creator-facing content inside a Foundry-defined flow.
                  </p>
                </div>
              </section>

              {/* RIGHT COLUMN */}
              <section className="flex flex-col gap-6">
                {/* Chart Card */}
                <div 
                  className="rounded-[16px] border overflow-hidden"
                  style={{ 
                    backgroundColor: '#ffffff',
                    borderColor: '#e5e7eb'
                  }}
                >
                  <div style={{ width: '100%', height: '300px' }}>
                    <SolanaTokenChart tokenMint="2gGvMK4sxcfYumUwTmre6sXWwtNPTrYaaXLVmAUeauAv" />
                  </div>
                </div>

                {/* Feed Card */}
                <div 
                  className="p-4 rounded-[16px] border"
                  style={{ 
                    backgroundColor: '#ffffff',
                    borderColor: '#e5e7eb'
                  }}
                >
                  <div 
                    className="text-xs font-semibold mx-1 mt-[2px] mb-[10px]"
                    style={{ 
                      letterSpacing: '0.08em',
                      color: '#9ca3af'
                    }}
                  >
                    LIVE FEED (STATIC PREVIEW)
                  </div>

                  {/* Post 1 */}
                  <article 
                    className="p-3 px-[14px] rounded-xl border"
                    style={{ 
                      backgroundColor: '#ffffff',
                      borderColor: '#e5e7eb'
                    }}
                  >
                    <div className="flex items-center gap-2 text-[13px] mb-[6px]" style={{ color: '#6b7280' }}>
                      <span className="font-bold" style={{ color: '#111827' }}>@your_handle_here</span>
                      <span className="inline-block w-1 h-1 rounded-full" style={{ backgroundColor: '#d1d5db' }}></span>
                      <span>2m</span>
                    </div>
                    <div className="text-[15px]" style={{ color: '#111827' }}>
                      Some still think visibility is the goal. They don&apos;t see the membrane thinning.
                    </div>
                    <div className="mt-2 text-xs flex gap-3" style={{ color: '#6b7280' }}>
                      23 Likes • 4 Reposts • 3 Replies
                    </div>
                  </article>

                  {/* Post 2 */}
                  <article 
                    className="p-3 px-[14px] rounded-xl border mt-3"
                    style={{ 
                      backgroundColor: '#ffffff',
                      borderColor: '#e5e7eb'
                    }}
                  >
                    <div className="flex items-center gap-2 text-[13px] mb-[6px]" style={{ color: '#6b7280' }}>
                      <span className="font-bold" style={{ color: '#111827' }}>@your_handle_here</span>
                      <span className="inline-block w-1 h-1 rounded-full" style={{ backgroundColor: '#d1d5db' }}></span>
                      <span>12m</span>
                    </div>
                    <div className="text-[15px]" style={{ color: '#111827' }}>
                      The body was never the bait — it was the vessel. The rupture comes when you remember that.
                    </div>
                    <div className="mt-2 text-xs flex gap-3" style={{ color: '#6b7280' }}>
                      89 Likes • 17 Reposts • 9 Replies
                    </div>
                  </article>

                  {/* Post 3 */}
                  <article 
                    className="p-3 px-[14px] rounded-xl border mt-3"
                    style={{ 
                      backgroundColor: '#ffffff',
                      borderColor: '#e5e7eb'
                    }}
                  >
                    <div className="flex items-center gap-2 text-[13px] mb-[6px]" style={{ color: '#6b7280' }}>
                      <span className="font-bold" style={{ color: '#111827' }}>@your_handle_here</span>
                      <span className="inline-block w-1 h-1 rounded-full" style={{ backgroundColor: '#d1d5db' }}></span>
                      <span>1h</span>
                    </div>
                    <div className="text-[15px]" style={{ color: '#111827' }}>
                      You&apos;re still arguing about reflections while the mirror&apos;s cracking open.
                    </div>
                    <div className="mt-2 text-xs flex gap-3" style={{ color: '#6b7280' }}>
                      140 Likes • 22 Reposts • 18 Replies
                    </div>
                  </article>
                </div>
              </section>
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
