import { Star, Trophy } from "lucide-react";

type HeroSocialProofProps = {
  avatarLetters: string[];
  plusLabel: string;
  stars: number[];
  caption: string;
  qualityLabel: string;
};

// Social proof strip under hero copy (avatars, stars, and quality pill).
export function HeroSocialProof({
  avatarLetters,
  plusLabel,
  stars,
  caption,
  qualityLabel,
}: HeroSocialProofProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-6 pt-8 border-t border-slate-800/80">
      {/* Avatar cluster + total count token. */}
      <div className="flex -space-x-3">
        {avatarLetters.map((letter) => (
          <div
            key={letter}
            className="w-10 h-10 rounded-full border-2 border-[#030712] flex items-center justify-center text-xs font-bold text-foreground shadow-inner bg-primary"
          >
            {letter}
          </div>
        ))}
        <div className="w-10 h-10 rounded-full border-2 border-[#030712] bg-gradient-to-br from-primary to-primary flex items-center justify-center text-[10px] font-bold text-foreground shadow-[0_0_15px_rgba(16,185,129,0.4)] relative z-10">
          {plusLabel}
        </div>
      </div>

      {/* Star rating and caption. */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1 text-primary mb-1">
          {stars.map((star) => (
            <Star key={star} className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_2px_rgba(250,204,21,0.8)]" />
          ))}
        </div>
        <span className="text-xs text-slate-400 font-medium">{caption}</span>
      </div>

      {/* Divider + quality badge. */}
      <div className="hidden sm:block w-[1px] h-10 bg-slate-800 mx-2" />
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800">
        <Trophy className="w-4 h-4 text-primary" /> {qualityLabel}
      </div>
    </div>
  );
}
