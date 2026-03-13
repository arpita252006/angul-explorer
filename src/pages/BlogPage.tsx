import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div>
      <div className="container py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">Travel Blog</h1>
          <p className="mt-2 text-muted-foreground">Stories, guides, and insights from Angul District.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
