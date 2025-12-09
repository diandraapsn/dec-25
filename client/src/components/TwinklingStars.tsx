import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface TwinklingStar {
  id: number;
  left: number;
  top: number;
  delay: number;
  size: number;
}

export function TwinklingStars() {
  const [stars, setStars] = useState<TwinklingStar[]>([]);

  useEffect(() => {
    const initialStars: TwinklingStar[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      size: 8 + Math.random() * 12,
    }));
    setStars(initialStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" data-testid="twinkling-stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
        >
          <Sparkles
            className="text-amber-300 dark:text-amber-200"
            style={{
              width: star.size,
              height: star.size,
              opacity: 0.6,
            }}
          />
        </div>
      ))}
    </div>
  );
}
