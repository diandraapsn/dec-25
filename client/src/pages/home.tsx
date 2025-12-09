import { useState, useEffect } from "react";
import { FloatingHearts } from "@/components/FloatingHearts";
import { TwinklingStars } from "@/components/TwinklingStars";
import { EnvelopeAnimation } from "@/components/EnvelopeAnimation";
import { LetterContent } from "@/components/LetterContent";
import { MusicToggle } from "@/components/MusicToggle";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpen(true);
    setTimeout(() => {
      setShowLetter(true);
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.createElement("div");
      el.innerHTML = `
        <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in" id="love-error-popup">
          <div class="bg-card rounded-lg border border-card-border shadow-2xl p-6 max-w-sm mx-4 text-center animate-scale-in">
            <div class="text-4xl mb-3">💗</div>
            <p class="font-display text-lg text-foreground mb-2">Error 404</p>
            <p class="font-casual text-muted-foreground">Too much love detected</p>
            <p class="font-casual text-sm text-muted-foreground mt-1">Unable to contain feelings</p>
            <button 
              onclick="document.getElementById('love-error-popup').remove()" 
              class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md font-serif text-sm"
            >
              Continue Anyway
            </button>
          </div>
        </div>
      `;
      if (showLetter) {
        document.body.appendChild(el);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [showLetter]);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-rose-50 via-background to-blue-50 dark:from-rose-950/20 dark:via-background dark:to-blue-950/20"
      data-testid="home-page"
    >
      <FloatingHearts />
      <TwinklingStars />
      
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <ThemeToggle />
      </div>
      
      <MusicToggle />

      <div className="relative z-10">
        {!isEnvelopeOpen && (
          <EnvelopeAnimation onOpen={handleEnvelopeOpen} />
        )}

        {showLetter && (
          <LetterContent />
        )}
      </div>
    </div>
  );
}
