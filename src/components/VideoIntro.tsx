import { useState, useRef, useEffect } from "react";

interface VideoIntroProps {
  videoSrc: string;
  onVideoEnd: () => void;
}

export const VideoIntro = ({ videoSrc, onVideoEnd }: VideoIntroProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setIsVisible(false);
    setTimeout(onVideoEnd, 500); // Wait for fade out animation
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-black transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        src={videoSrc}
      />
    </div>
  );
};
