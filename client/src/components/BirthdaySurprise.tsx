import { useState } from "react";
import { Gift, Heart, Sparkles, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ConfettiExplosion } from "./ConfettiExplosion";

export function BirthdaySurprise() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleReveal = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setIsRevealed(true);
    }, 500);
  };

  return (
    <div className="py-8 text-center" data-testid="surprise-section">
      <ConfettiExplosion isActive={showConfetti} onComplete={() => setShowConfetti(false)} />
      
      {!isRevealed ? (
        <div className="animate-pulse-soft">
          <Button
            onClick={handleReveal}
            size="lg"
            className="px-8 py-6 text-lg font-handwriting bg-gradient-to-r from-primary to-pink-400 hover:from-primary/90 hover:to-pink-400/90 shadow-lg"
            data-testid="button-birthday-surprise"
          >
            <Gift className="w-6 h-6 mr-2" />
            Click for a Birthday Surprise
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </div>
      ) : (
        <div className="space-y-6 animate-scale-in">
          <Card className="p-6 bg-gradient-to-br from-card to-pink-50/30 dark:to-pink-950/20 border-card-border max-w-md mx-auto" data-testid="surprise-love-note">
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary animate-heart-beat" />
            </div>
            <p className="font-casual text-lg text-foreground leading-relaxed mb-4">
              Happy Birthday, my love! You are the best thing that ever happened to me. 
              Every day with you feels like a gift, and I'm so grateful the universe 
              brought us together.
            </p>
            <p className="font-handwriting text-xl text-primary">
              I love you endlessly
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 border-2 border-dashed border-amber-300 dark:border-amber-700 max-w-sm mx-auto transform rotate-1" data-testid="surprise-coupon">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Ticket className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <span className="font-display text-sm uppercase tracking-widest text-amber-700 dark:text-amber-300">
                Special Coupon
              </span>
              <Ticket className="w-5 h-5 text-amber-600 dark:text-amber-400 transform rotate-180" />
            </div>
            <h4 className="font-handwriting text-3xl text-amber-800 dark:text-amber-200 mb-2">
              1 Yes-Day
            </h4>
            <p className="font-serif text-sm text-amber-700/80 dark:text-amber-300/80 mb-3">
              Valid for 24 hours of saying yes to anything you want
            </p>
            <div className="border-t border-amber-300 dark:border-amber-700 pt-3">
              <p className="font-casual text-xs text-amber-600 dark:text-amber-400">
                No expiration date | Non-transferable | Made with love
              </p>
            </div>
          </Card>

          <div className="flex justify-center gap-2 pt-4">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-4 h-4 text-primary fill-primary animate-heart-beat"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
