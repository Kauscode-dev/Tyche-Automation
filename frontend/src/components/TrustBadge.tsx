import { Star, CheckCircle2 } from "lucide-react";

export const TrustBadge = () => {
  return (
    <div className="trust-badge">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= 4 ? "fill-green-500 text-green-500" : star === 5 ? "fill-green-500/50 text-green-500/50" : ""}`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-green-700">4.9/5</span>
      <span className="text-xs text-green-600">Founder Rated</span>
    </div>
  );
};

export const TrustBadgeInline = () => {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <CheckCircle2 className="w-4 h-4 text-green-500" />
        <span>Trusted by 50+ Founders</span>
      </div>
      <div className="flex items-center gap-1">
        <div className="flex">
          {[1, 2, 3, 4].map((star) => (
            <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
          <Star className="w-3.5 h-3.5 fill-amber-400/50 text-amber-400/50" />
        </div>
        <span>4.9 Rating</span>
      </div>
    </div>
  );
};
