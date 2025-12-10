import { Heart, Sparkles } from "lucide-react";

export function FinalMessage() {
  return (
    <div className="py-12 text-center" data-testid="final-message-section">
      <div className="flex justify-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-amber-400 animate-twinkle" />
        <Heart className="w-6 h-6 text-primary fill-primary animate-heart-beat" />
        <Sparkles className="w-5 h-5 text-amber-400 animate-twinkle" style={{ animationDelay: "0.5s" }} />
      </div>

      <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-6">
        To the Man Who Stole My Heart
      </h3>

      <div className="max-w-lg mx-auto space-y-4">
        <p className="font-casual text-lg sm:text-xl text-foreground leading-relaxed">
          On this special day, I want you to know that meeting you was the best 
          thing that ever happened to me. You make every day brighter, every laugh 
          louder, and every moment more meaningful.
        </p>

        <p className="font-casual text-lg sm:text-xl text-foreground leading-relaxed">
          You mean more to me than you could ever imagine, in ways words will never fully explain. 
          So let me raise a toast to the boy i love the most in this whole wide world. 
          It feels like all the stars in the universe showed up tonight just for your birthday. 
          To the man who stole my heart so effortlessly
        </p>

        <p className="font-handwriting text-2xl sm:text-3xl text-primary mt-8">
          Happy birthday, my sweet destiny.
        </p>

        <div className="pt-6">
          <p className="font-signature text-3xl sm:text-4xl text-foreground">
            With love, D.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {[...Array(7)].map((_, i) => (
          <Heart
            key={i}
            className={`
              text-primary fill-primary animate-pulse-soft
              ${i === 3 ? "w-5 h-5" : i === 2 || i === 4 ? "w-4 h-4" : "w-3 h-3"}
            `}
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}
