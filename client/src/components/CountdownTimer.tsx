import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isWishing, setIsWishing] = useState(false);
  const [wishComplete, setWishComplete] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-12-25T00:00:00");
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMakeWish = () => {
    setIsWishing(true);
    setTimeout(() => {
      setIsWishing(false);
      setWishComplete(true);
    }, 3000);
  };

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center" data-testid={`countdown-${label.toLowerCase()}`}>
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-card border border-card-border flex items-center justify-center shadow-md">
          <span className="text-2xl sm:text-3xl font-display font-bold text-foreground">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
        <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-amber-400 animate-twinkle" />
      </div>
      <span className="mt-2 text-xs sm:text-sm text-muted-foreground font-serif uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="text-center py-8" data-testid="countdown-section">
      <h3 className="font-handwriting text-2xl sm:text-3xl text-foreground mb-6">
        Until Your Special Day
      </h3>
      
      <div className="flex justify-center gap-3 sm:gap-6 mb-8">
        <TimeBlock value={timeLeft.days} label="Days" />
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>

      {!wishComplete ? (
        <button
          onClick={handleMakeWish}
          disabled={isWishing}
          className={`
            px-6 py-3 rounded-full font-handwriting text-lg
            bg-gradient-to-r from-primary/80 to-pink-400/80 
            text-white shadow-lg
            transition-all duration-500 ease-out
            ${isWishing 
              ? "scale-95 opacity-75" 
              : "hover:scale-105 hover:shadow-xl"
            }
          `}
          data-testid="button-make-wish"
        >
          {isWishing ? (
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 animate-pulse-soft" />
              Close your eyes...
              <Sparkles className="w-5 h-5 animate-pulse-soft" />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Make a Wish
              <Sparkles className="w-5 h-5" />
            </span>
          )}
        </button>
      ) : (
        <div className="animate-fade-in" data-testid="wish-complete-message">
          <p className="font-handwriting text-xl text-primary flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 animate-twinkle" />
            Your wish has been sent to the stars
            <Sparkles className="w-5 h-5 animate-twinkle" />
          </p>
        </div>
      )}
    </div>
  );
}
