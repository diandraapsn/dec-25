import { useState, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        console.log("Audio playback failed - user interaction required");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-50"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-card border border-card-border rounded-md shadow-md whitespace-nowrap animate-fade-in">
          <span className="text-sm text-muted-foreground font-serif flex items-center gap-1.5">
            <Music className="w-3 h-3" />
            {isPlaying ? "Pause music" : "Play background music"}
          </span>
        </div>
      )}
      <Button
        size="icon"
        variant="outline"
        onClick={toggleMusic}
        className="rounded-full w-12 h-12 bg-card/90 backdrop-blur-sm border-card-border shadow-lg"
        data-testid="button-music-toggle"
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary" />
        ) : (
          <VolumeX className="w-5 h-5 text-muted-foreground" />
        )}
      </Button>
    </div>
  );
}
