import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getDestination } from "@/data/destinations";
import StarRating from "@/components/StarRating";
import ImageGallery from "@/components/ImageGallery";
import PhotoUpload from "@/components/PhotoUpload";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function DestinationPage() {
  const { id } = useParams<{ id: string }>();
  const dest = getDestination(id || "");

  if (!dest) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-semibold text-foreground">Destination not found</h1>
        <Link to="/explore" className="mt-4 inline-block text-primary text-sm">← Back to Explore</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="container py-8 sm:py-12 max-w-4xl">
        <Link to="/explore" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft size={14} /> Back to Explore
        </Link>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Title */}
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{dest.category}</span>
          <h1 className="mt-1 text-3xl sm:text-4xl font-semibold text-foreground">{dest.name}</h1>

          {/* Rating */}
          <div className="mt-4">
            <StarRating destinationId={dest.id} initialRating={dest.rating} initialCount={dest.ratingCount} />
          </div>

          {/* Gallery */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Gallery</h2>
            <ImageGallery images={[dest.image, ...dest.gallery]} name={dest.name} />
          </div>

          {/* Description */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-foreground mb-3">About {dest.name}</h2>
            <p className="text-foreground leading-relaxed max-w-[65ch]">{dest.description}</p>
          </div>

          {/* User Photos */}
          <div className="mt-10">
            <PhotoUpload destinationId={dest.id} />
          </div>

          {/* Comments */}
          <div className="mt-10 border-t border-border pt-8">
            <CommentSection targetId={`dest_${dest.id}`} />
          </div>

          {/* Map */}
          <div className="mt-10 border-t border-border pt-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Location</h2>
            <div className="rounded-xl overflow-hidden img-edge">
              <iframe
                title={`Map of ${dest.name}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${dest.mapQuery}`}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
