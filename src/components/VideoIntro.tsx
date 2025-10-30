import { useState, useEffect } from "react";

interface VideoIntroProps {
  onVideoEnd: () => void;
}

export const VideoIntro = ({ onVideoEnd }: VideoIntroProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [playerRef, setPlayerRef] = useState<any>(null);
  const [needsUnmute, setNeedsUnmute] = useState(false);

  const handleVideoEnd = () => {
    setIsVisible(false);
    setTimeout(onVideoEnd, 1000); // Wait for fade out animation
  };

  const handleUnmute = () => {
    if (playerRef) {
      playerRef.setMuted(false);
      playerRef.setVolume(1);
      playerRef.play();
      setNeedsUnmute(false);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const iframe = document.querySelector("#vimeo-intro") as HTMLIFrameElement;
      if (iframe && (window as any).Vimeo) {
        const p = new (window as any).Vimeo.Player(iframe, { autopause: 0 });
        setPlayerRef(p);
        
        // Try autoplay with sound; fallback to muted if blocked by browser
        Promise.all([p.setMuted(false), p.setVolume(1)])
          .then(() => p.play())
          .catch(() => {
            setNeedsUnmute(true);
            p.setMuted(true);
            p.play().catch(() => {});
          });
        
        // Get video duration and start fade 2 seconds before end
        p.getDuration().then((duration: number) => {
          const fadeStartTime = duration - 2;
          let fadeStarted = false;
          
          p.on("timeupdate", (data: any) => {
            if (data.seconds >= fadeStartTime && !fadeStarted) {
              fadeStarted = true;
              setIsVisible(false);
            }
          });
        });
        
        p.on("ended", () => {
          setTimeout(onVideoEnd, 2000); // Wait for full fade out
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [onVideoEnd]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black transition-opacity duration-[2000ms] ease-out ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}>
      <div className="w-full h-full flex items-center justify-center">
        <div style={{ padding: "56.25% 0 0 0", position: "relative", width: "100%", height: "100%" }}>
          <iframe
            id="vimeo-intro"
            src="https://player.vimeo.com/video/1132113017?badge=0&autoplay=1&autopause=0&muted=0&controls=0&title=0&byline=0&portrait=0&playsinline=1&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Salune Promo"
          />
        </div>

        {needsUnmute && isVisible && (
          <button
            onClick={handleUnmute}
            className="absolute bottom-6 right-6 z-[110] bg-white/90 text-black border border-black/20 rounded-full px-4 py-2 hover-scale shadow-lg"
            aria-label="Enable sound"
          >
            Tap for sound
          </button>
        )}

        {isVisible && (
          <button
            onClick={handleVideoEnd}
            className="absolute top-6 right-6 z-[110] bg-white/90 text-black border border-black/20 rounded-full px-4 py-2 hover-scale shadow-lg"
            aria-label="Skip video"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
};
