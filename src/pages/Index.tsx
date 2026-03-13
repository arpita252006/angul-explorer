import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-satkosia.jpg";
import wildlifeImg from "@/assets/section-wildlife.jpg";
import waterfallsImg from "@/assets/section-waterfalls.jpg";
import templesImg from "@/assets/section-temples.jpg";
import foodImg from "@/assets/section-food.jpg";
import { topDestinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const cinematicSections = [
  {
    title: "Nature & Wildlife",
    description: "From the majestic Satkosia Gorge to Tikarpada's gharial sanctuaries, Angul's forests teem with life waiting to be discovered.",
    image: wildlifeImg,
  },
  {
    title: "Waterfalls",
    description: "Hidden cascades tumble through rocky terrain and dense forests. The monsoon season transforms them into thundering spectacles of nature's power.",
    image: waterfallsImg,
  },
  {
    title: "Temples & Spiritual Sites",
    description: "Ancient temples with intricate stone carvings stand as living testaments to centuries of faith, devotion, and artistic mastery.",
    image: templesImg,
  },
  {
    title: "Local Food & Culture",
    description: "Savour authentic Odia cuisine — from dalma and pakhala to biryanis — while experiencing the warm hospitality of Angul's people.",
    image: foodImg,
  },
];

export default function HomePage() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    sliderRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <img src={heroImg} alt="Satkosia Gorge Wildlife Sanctuary" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl sm:text-7xl font-semibold text-white tracking-tight"
          >
            Angul Explorer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-4 text-lg sm:text-xl text-white/90"
          >
            Discover the Hidden Beauty of Angul District.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex gap-3 justify-center flex-wrap"
          >
            <Link
              to="/explore"
              className="h-11 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-medium inline-flex items-center hover:-translate-y-px transition-transform"
            >
              Explore
            </Link>
            <Link
              to="/search"
              className="h-11 px-6 rounded-lg bg-white/20 backdrop-blur text-white border border-white/30 text-sm font-medium inline-flex items-center hover:-translate-y-px transition-transform"
            >
              Search Destinations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Sections */}
      {cinematicSections.map((section, i) => (
        <motion.section
          key={i}
          {...fadeIn}
          className="relative min-h-[80vh] flex items-center"
        >
          <img src={section.image} alt={section.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 cinematic-overlay" />
          <div className="relative z-10 container py-24">
            <div className="max-w-lg">
              <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">{section.title}</h2>
              <p className="mt-4 text-base text-white/85 leading-relaxed max-w-md">{section.description}</p>
              <Link
                to="/explore"
                className="mt-6 inline-flex h-11 px-6 items-center rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:-translate-y-px transition-transform"
              >
                Explore Destinations
              </Link>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Top Destinations Slider */}
      <motion.section {...fadeIn} className="py-16 sm:py-24 bg-background">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-foreground">Top Destinations</h2>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll(-1)}
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
              >
                <ChevronLeft size={18} className="text-foreground" />
              </button>
              <button
                onClick={() => scroll(1)}
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
              >
                <ChevronRight size={18} className="text-foreground" />
              </button>
            </div>
          </div>
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-1 px-1"
            style={{ scrollbarWidth: "none" }}
          >
            {topDestinations.map((d) => (
              <DestinationCard key={d.id} destination={d} variant="slider" />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Visit Angul */}
      <motion.section {...fadeIn} className="py-16 sm:py-24 bg-secondary/30">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-6">Why Visit Angul</h2>
          <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
            Angul District is a hidden gem in the heart of Odisha, offering an extraordinary blend of pristine wildlife sanctuaries, thundering waterfalls, ancient temples, and warm local culture. From the breathtaking Satkosia Gorge carved by the Mahanadi River to the sacred hot springs of Deulajhari, every corner of Angul tells a story. Whether you're a nature enthusiast seeking untouched forests, a history buff exploring centuries-old caves and palaces, or a food lover craving authentic Odia cuisine — Angul has something unforgettable waiting for you. With 35 remarkable destinations spread across rolling hills, river valleys, and charming towns, Angul District is one of Odisha's best-kept secrets for travelers seeking authentic, off-the-beaten-path experiences.
          </p>
        </div>
      </motion.section>

      <Footer />
      <BackToTop />
    </div>
  );
}
