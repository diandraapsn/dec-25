import { Heart, Star, Sparkles, Coffee, Moon, Sun, Music, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    icon: Heart,
    text: "The way your eyes light up when you talk about things you love",
    color: "text-rose-400",
  },
  {
    icon: Star,
    text: "How you make even the most ordinary moments feel magical",
    color: "text-amber-400",
  },
  {
    icon: Coffee,
    text: "Your sleepy morning voice that makes me want to stay in bed forever",
    color: "text-orange-400",
  },
  {
    icon: Moon,
    text: "Those late night conversations where we lose track of time",
    color: "text-indigo-400",
  },
  {
    icon: Music,
    text: "The way you randomly sing our favorite songs",
    color: "text-pink-400",
  },
  {
    icon: MessageCircle,
    text: "Your voice notes that I replay when I miss you",
    color: "text-blue-400",
  },
  {
    icon: Sun,
    text: "How you always know exactly what to say to make me smile",
    color: "text-yellow-400",
  },
  {
    icon: Sparkles,
    text: "Simply because you're you, and that's more than enough",
    color: "text-purple-400",
  },
];

export function ReasonsILoveYou() {
  return (
    <div className="py-8" data-testid="reasons-section">
      <h3 className="font-handwriting text-2xl sm:text-3xl text-center text-foreground mb-8">
        Reasons I Love You
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <Card
              key={index}
              className="p-4 bg-card/50 border-card-border backdrop-blur-sm transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              data-testid={`reason-card-${index}`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full bg-background/50 ${reason.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <p className="font-casual text-base sm:text-lg text-foreground leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
