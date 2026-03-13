import { Link } from "react-router-dom";
import type { Destination } from "@/data/destinations";
import { Star } from "lucide-react";

interface Props {
  destination: Destination;
  variant?: "slider" | "grid";
}

export default function DestinationCard({ destination, variant = "grid" }: Props) {
  const d = destination;

  return (
    <Link
      to={`/destination/${d.id}`}
      className={`group block rounded-2xl bg-card card-shadow transition-all duration-200 hover:-translate-y-1 hover:card-shadow-hover ${
        variant === "slider" ? "w-[320px] flex-shrink-0" : ""
      }`}
    >
      <div className="p-2">
        <img
          src={d.image}
          alt={d.name}
          className="aspect-video w-full rounded-xl object-cover img-edge"
          loading="lazy"
        />
      </div>
      <div className="px-4 pb-4 pt-1">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">{d.category}</span>
        <h3 className="mt-1 text-base font-semibold text-card-foreground line-clamp-1">{d.name}</h3>
        {variant === "grid" && (
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{d.shortDescription}</p>
        )}
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-primary text-primary" />
            <span className="text-sm font-medium text-card-foreground" style={{ fontFeatureSettings: "'tnum'" }}>
              {d.rating.toFixed(1)}
            </span>
          </div>
          <span className="text-sm font-medium text-primary">
            {variant === "slider" ? "View Destination" : "Read More"} →
          </span>
        </div>
      </div>
    </Link>
  );
}
