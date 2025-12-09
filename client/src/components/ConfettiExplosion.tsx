import { useState, useEffect } from "react";
import { Heart, Star, Sparkles } from "lucide-react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  type: "heart" | "star" | "sparkle";
  size: number;
  rotation: number;
}

interface ConfettiExplosionProps {
  isActive: boolean;
  onComplete?: () => void;
}

export function ConfettiExplosion({ isActive, onComplete }: ConfettiExplosionProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (isActive) {
      const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: 20 + Math.random() * 60,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2,
        type: ["heart", "star", "sparkle"][Math.floor(Math.random() * 3)] as "heart" | "star" | "sparkle",
        size: 16 + Math.random() * 20,
        rotation: Math.random() * 360,
      }));
      setPieces(newPieces);

      const timer = setTimeout(() => {
        setPieces([]);
        onComplete?.();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive || pieces.length === 0) return null;

  const getIcon = (type: string, size: number) => {
    const colors = ["text-primary", "text-pink-400", "text-rose-400", "text-amber-400", "text-blue-300"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    switch (type) {
      case "heart":
        return <Heart className={`${color} fill-current`} style={{ width: size, height: size }} />;
      case "star":
        return <Star className={`${color} fill-current`} style={{ width: size, height: size }} />;
      case "sparkle":
        return <Sparkles className={`${color}`} style={{ width: size, height: size }} />;
      default:
        return <Heart className={`${color} fill-current`} style={{ width: size, height: size }} />;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" data-testid="confetti-explosion">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            animation: `confetti-fall ${piece.duration}s ease-out forwards`,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        >
          {getIcon(piece.type, piece.size)}
        </div>
      ))}
    </div>
  );
}
