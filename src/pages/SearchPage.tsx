import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { destinations } from "@/data/destinations";
import Footer from "@/components/Footer";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const suggestions = useMemo(() => {
    if (query.length < 1) return [];
    const q = query.toLowerCase();
    return destinations.filter((d) => d.name.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">Search Destinations</h1>
          <p className="mt-2 text-muted-foreground">Find any destination in Angul District.</p>
        </motion.div>

        <div className="mt-8 relative max-w-xl">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by destination name..."
            className="w-full h-12 rounded-xl bg-secondary pl-11 pr-4 text-sm text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 max-w-xl rounded-xl bg-card card-shadow overflow-hidden"
          >
            {suggestions.map((d) => (
              <Link
                key={d.id}
                to={`/destination/${d.id}`}
                className="flex items-center gap-4 px-4 py-3 hover:bg-secondary transition-colors border-b border-border last:border-0"
              >
                <img src={d.image} alt={d.name} className="w-12 h-12 rounded-lg object-cover img-edge" />
                <div>
                  <p className="text-sm font-medium text-foreground">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.category}</p>
                </div>
              </Link>
            ))}
          </motion.div>
        )}

        {query.length > 0 && suggestions.length === 0 && (
          <p className="mt-4 text-sm text-muted-foreground">No destinations found for "{query}".</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
