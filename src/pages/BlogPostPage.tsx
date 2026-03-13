import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlogPost } from "@/data/blogs";
import CommentSection from "@/components/CommentSection";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPost(id || "");

  if (!post) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-semibold text-foreground">Blog post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-primary text-sm">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="container py-8 sm:py-12 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        <motion.article initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <img src={post.image} alt={post.title} className="w-full aspect-video rounded-2xl object-cover img-edge" />
          <div className="mt-6">
            <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {post.author}</span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-semibold text-foreground">{post.title}</h1>
          </div>

          <div className="mt-8 text-foreground leading-relaxed whitespace-pre-line max-w-[65ch]">
            {post.content}
          </div>
        </motion.article>

        <div className="mt-12 border-t border-border pt-8">
          <CommentSection targetId={`blog_${post.id}`} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
