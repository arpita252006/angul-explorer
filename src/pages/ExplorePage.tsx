import { motion } from "framer-motion";
import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import Footer from "@/components/Footer";

export default function ExplorePage() {
  return (
    <div>
      <div className="container py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">Explore Angul</h1>
          <p className="mt-2 text-muted-foreground max-w-lg">
            All 23 destinations across Angul District. Find your next adventure.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >
              <DestinationCard destination={d} variant="grid" />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
