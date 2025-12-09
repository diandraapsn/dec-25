import { Sparkles, Heart } from "lucide-react";
import { ReasonsILoveYou } from "./ReasonsILoveYou";
import { BirthdaySurprise } from "./BirthdaySurprise";
import { CountdownTimer } from "./CountdownTimer";
import { FinalMessage } from "./FinalMessage";

export function LetterContent() {
  return (
    <div 
      className="min-h-screen py-8 px-4 sm:px-8 animate-fade-in"
      data-testid="letter-content"
    >
      <div className="max-w-2xl mx-auto">
        <div 
          className="bg-card/80 backdrop-blur-sm rounded-lg border border-card-border shadow-xl p-6 sm:p-10"
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, 
                hsl(30 50% 97% / 0.9), 
                hsl(340 30% 96% / 0.9)
              )
            `,
          }}
        >
          <section className="text-center mb-12 pt-4" data-testid="hero-section">
            <div className="flex justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-400 animate-twinkle" />
              <Heart className="w-6 h-6 text-primary fill-primary animate-pulse-soft" />
              <Sparkles className="w-5 h-5 text-amber-400 animate-twinkle" style={{ animationDelay: "0.5s" }} />
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Someone I Love
              <br />
              <span className="text-primary">Was Born Today</span>
            </h1>
            
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Sparkles
                  key={i}
                  className="w-4 h-4 text-amber-300 animate-twinkle"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </section>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mb-12" />

          <section className="mb-12" data-testid="romantic-message-section">
            <p className="font-casual text-lg sm:text-xl text-foreground/90 leading-relaxed text-center">
              Hey you,
            </p>
            <p className="font-casual text-lg sm:text-xl text-foreground/90 leading-relaxed text-center mt-4">
              It's that time of year again — the day the universe decided to bless 
              this world with someone who would later steal my entire heart. I still 
              remember how we started, how every little moment with you felt like 
              something out of a dream. And honestly? It still does.
            </p>
            <p className="font-casual text-lg sm:text-xl text-foreground/90 leading-relaxed text-center mt-4">
              You're not just my person — you're my safe place, my 2 AM thought, 
              and the reason I believe in all those cheesy love songs. I hope this 
              year brings you everything you deserve (which is literally everything 
              good in this world).
            </p>
            <p className="font-handwriting text-xl sm:text-2xl text-primary text-center mt-6">
              I'm so lucky it's you
            </p>
          </section>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mb-12" />

          <ReasonsILoveYou />

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto my-12" />

          <BirthdaySurprise />

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto my-12" />

          <CountdownTimer />

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto my-12" />

          <FinalMessage />

          <div className="text-center pt-8 pb-4">
            <div className="inline-flex items-center gap-2 text-muted-foreground/50 text-sm font-serif">
              <Heart className="w-3 h-3 fill-current" />
              <span>Made with love, just for you</span>
              <Heart className="w-3 h-3 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
