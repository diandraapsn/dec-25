import { useState } from "react";
import { Mail, Heart } from "lucide-react";

interface EnvelopeAnimationProps {
  onOpen: () => void;
}

export function EnvelopeAnimation({ onOpen }: EnvelopeAnimationProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(onOpen, 1500);
  };

  return (
    <div
      className={`
        flex flex-col items-center justify-center min-h-screen p-8
        transition-all duration-1000
        ${isOpening ? "opacity-0 scale-110" : "opacity-100"}
      `}
      data-testid="envelope-landing"
    >
      <div className="text-center mb-8 animate-fade-in">
        <p className="font-handwriting text-xl sm:text-2xl text-muted-foreground mb-2">
          You have a special letter
        </p>
        <p className="font-casual text-sm text-muted-foreground">
          Click to open
        </p>
      </div>

      <button
        onClick={handleClick}
        disabled={isOpening}
        className={`
          relative group cursor-pointer
          transition-all duration-500 ease-out
          ${isOpening 
            ? "scale-125 rotate-12" 
            : "animate-envelope-bounce hover:scale-105"
          }
        `}
        data-testid="button-open-envelope"
      >
        <div className="relative">
          <div
            className={`
              w-64 h-44 sm:w-80 sm:h-56 rounded-lg
              bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50
              dark:from-rose-900/40 dark:via-pink-900/30 dark:to-amber-900/20
              border-2 border-rose-200 dark:border-rose-800
              shadow-xl
              transition-all duration-500
              ${isOpening ? "shadow-2xl" : ""}
            `}
          >
            <div
              className={`
                absolute inset-x-0 top-0 h-1/2
                bg-gradient-to-b from-rose-200/50 to-transparent
                dark:from-rose-700/30 dark:to-transparent
                rounded-t-lg
                origin-bottom
                transition-all duration-700
                ${isOpening ? "rotate-x-[-180deg] opacity-0" : ""}
              `}
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                transformStyle: "preserve-3d",
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <Mail 
                  className={`
                    w-16 h-16 sm:w-20 sm:h-20 text-primary/70
                    transition-all duration-500
                    ${isOpening ? "scale-0 opacity-0" : "group-hover:scale-110"}
                  `}
                />
                <Heart
                  className={`
                    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    w-6 h-6 text-rose-400 fill-rose-400
                    transition-all duration-300
                    ${isOpening ? "scale-150 opacity-0" : "group-hover:scale-125 animate-pulse-soft"}
                  `}
                />
              </div>
            </div>

            <div
              className={`
                absolute bottom-3 left-0 right-0 text-center
                transition-all duration-500
                ${isOpening ? "opacity-0" : ""}
              `}
            >
              <span className="font-signature text-2xl sm:text-3xl text-rose-400/80 dark:text-rose-300/80">
                For You
              </span>
            </div>
          </div>

          <div
            className={`
              absolute -bottom-3 left-1/2 transform -translate-x-1/2
              w-32 h-4 rounded-full
              bg-rose-200/30 dark:bg-rose-900/20
              blur-sm
              transition-all duration-500
              ${isOpening ? "w-48 opacity-0" : "group-hover:w-40"}
            `}
          />
        </div>

        <div className="absolute -top-2 -right-2 animate-pulse-soft">
          <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
        </div>
        <div className="absolute -bottom-2 -left-2 animate-pulse-soft" style={{ animationDelay: "0.5s" }}>
          <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
        </div>
      </button>

      <div className="mt-12 flex gap-3">
        {[...Array(3)].map((_, i) => (
          <Heart
            key={i}
            className="w-3 h-3 text-primary/40 fill-primary/40 animate-pulse-soft"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
    </div>
  );
}
