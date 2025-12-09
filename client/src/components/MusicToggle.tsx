import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const AMBIENT_MUSIC_URL = "/background-song.mp3";

export function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(AMBIENT_MUSIC_URL);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      audioRef.current.onerror = () => setAudioError(true);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setAudioError(true);
        });
    }
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
            {audioError ? "Audio unavailable" : isPlaying ? "Pause music" : "Play romantic music"}
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
