import { useState, useEffect } from "react";

interface VideoIntroProps {
  onVideoEnd: () => void;
}

export const VideoIntro = ({ onVideoEnd }: VideoIntroProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleVideoEnd = () => {
    setIsVisible(false);
    setTimeout(onVideoEnd, 1000); // Wait for fade out animation
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const iframe = document.querySelector("#vimeo-intro") as HTMLIFrameElement;
      if (iframe && (window as any).Vimeo) {
        const player = new (window as any).Vimeo.Player(iframe);
        
        // Get video duration and start fade 2 seconds before end
        player.getDuration().then((duration: number) => {
          const fadeStartTime = duration - 2;
          
          player.on("timeupdate", (data: any) => {
            if (data.seconds >= fadeStartTime && isVisible) {
              setIsVisible(false);
            }
          });
        });
        
        player.on("ended", () => {
          setTimeout(onVideoEnd, 1000);
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [onVideoEnd, isVisible]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black transition-opacity duration-1000 ease-out ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}>
      <div className="w-full h-full flex items-center justify-center">
        <div style={{ padding: "56.25% 0 0 0", position: "relative", width: "100%", height: "100%" }}>
          <iframe
            id="vimeo-intro"
            src="https://player.vimeo.com/video/1132113017?badge=0&autoplay=1&autopause=0&muted=0&controls=0&title=0&byline=0&portrait=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Salune Promo"
          />
        </div>
      </div>
    </div>
  );
};
