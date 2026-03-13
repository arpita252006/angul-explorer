import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

interface Props {
  destinationId: string;
  initialRating: number;
  initialCount: number;
}

export default function StarRating({ destinationId, initialRating, initialCount }: Props) {
  const { user } = useAuth();
  const storageKey = `angul_ratings_${destinationId}`;
  const [ratings, setRatings] = useState<{ email: string; value: number }[]>([]);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setRatings(JSON.parse(stored));
  }, [storageKey]);

  const userRating = user ? ratings.find((r) => r.email === user.email)?.value || 0 : 0;

  const allRatings = ratings.map((r) => r.value);
  const totalCount = initialCount + allRatings.length;
  const avgRating =
    totalCount > 0
      ? (initialRating * initialCount + allRatings.reduce((a, b) => a + b, 0)) / totalCount
      : 0;

  const handleRate = (value: number) => {
    if (!user) return;
    if (userRating > 0) return; // already rated
    const updated = [...ratings, { email: user.email, value }];
    setRatings(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            disabled={!user || userRating > 0}
            onMouseEnter={() => user && userRating === 0 && setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleRate(star)}
            className="disabled:cursor-default"
          >
            <Star
              size={20}
              className={`transition-colors ${
                star <= (hover || userRating || Math.round(avgRating))
                  ? "fill-primary text-primary"
                  : "text-border"
              }`}
            />
          </button>
        ))}
      </div>
      <span className="text-sm font-medium text-foreground" style={{ fontFeatureSettings: "'tnum'" }}>
        {avgRating.toFixed(1)}
      </span>
      <span className="text-sm text-muted-foreground">({totalCount} ratings)</span>
      {!user && <span className="text-xs text-muted-foreground">Log in to rate</span>}
      {user && userRating > 0 && <span className="text-xs text-muted-foreground">You rated {userRating}★</span>}
    </div>
  );
}
