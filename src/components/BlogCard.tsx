import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogs";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block rounded-2xl bg-card card-shadow transition-all duration-200 hover:-translate-y-1 hover:card-shadow-hover"
    >
      <div className="p-2">
        <img
          src={post.image}
          alt={post.title}
          className="aspect-video w-full rounded-xl object-cover img-edge"
          loading="lazy"
        />
      </div>
      <div className="px-4 pb-4 pt-1">
        <span className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
        <h3 className="mt-1 text-base font-semibold text-card-foreground line-clamp-2">{post.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
        <span className="mt-2 inline-block text-sm font-medium text-primary">Read More →</span>
      </div>
    </Link>
  );
}
