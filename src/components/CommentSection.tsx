import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Trash2, Reply } from "lucide-react";

interface Comment {
  id: string;
  email: string;
  name: string;
  text: string;
  date: string;
  replies: { name: string; text: string; date: string }[];
}

export default function CommentSection({ targetId }: { targetId: string }) {
  const { user } = useAuth();
  const storageKey = `angul_comments_${targetId}`;
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) setComments(JSON.parse(stored));
  }, [storageKey]);

  const save = (updated: Comment[]) => {
    setComments(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const addComment = () => {
    if (!user || !text.trim()) return;
    const c: Comment = {
      id: Date.now().toString(),
      email: user.email,
      name: user.name,
      text: text.trim(),
      date: new Date().toISOString(),
      replies: [],
    };
    save([...comments, c]);
    setText("");
  };

  const deleteComment = (id: string) => {
    save(comments.filter((c) => c.id !== id));
  };

  const addReply = (commentId: string) => {
    if (!user || !replyText.trim()) return;
    save(
      comments.map((c) =>
        c.id === commentId
          ? { ...c, replies: [...c.replies, { name: user.name, text: replyText.trim(), date: new Date().toISOString() }] }
          : c
      )
    );
    setReplyText("");
    setReplyTo(null);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Comments</h3>
      {user ? (
        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a comment..."
            className="flex-1 h-11 rounded-lg bg-secondary px-4 text-sm text-secondary-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            onKeyDown={(e) => e.key === "Enter" && addComment()}
          />
          <button onClick={addComment} className="h-11 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:-translate-y-px transition-transform">
            Post
          </button>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Log in to comment.</p>
      )}

      <div className="space-y-3">
        {comments.map((c) => (
          <div key={c.id} className="rounded-xl bg-secondary p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-foreground">{c.name}</span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {new Date(c.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex gap-2">
                {user?.isAdmin && (
                  <>
                    <button onClick={() => deleteComment(c.id)} className="text-destructive hover:opacity-70">
                      <Trash2 size={14} />
                    </button>
                    <button onClick={() => setReplyTo(replyTo === c.id ? null : c.id)} className="text-primary hover:opacity-70">
                      <Reply size={14} />
                    </button>
                  </>
                )}
              </div>
            </div>
            <p className="text-sm text-foreground">{c.text}</p>
            {c.replies.map((r, i) => (
              <div key={i} className="ml-4 border-l-2 border-primary/20 pl-3 mt-2">
                <span className="text-sm font-medium text-foreground">{r.name}</span>
                <span className="ml-2 text-xs text-muted-foreground">{new Date(r.date).toLocaleDateString()}</span>
                <p className="text-sm text-foreground">{r.text}</p>
              </div>
            ))}
            {replyTo === c.id && user?.isAdmin && (
              <div className="ml-4 flex gap-2 mt-2">
                <input
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Reply..."
                  className="flex-1 h-9 rounded-lg bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  onKeyDown={(e) => e.key === "Enter" && addReply(c.id)}
                />
                <button onClick={() => addReply(c.id)} className="h-9 px-3 rounded-lg bg-primary text-primary-foreground text-xs font-medium">
                  Reply
                </button>
              </div>
            )}
          </div>
        ))}
        {comments.length === 0 && <p className="text-sm text-muted-foreground">No comments yet.</p>}
      </div>
    </div>
  );
}
